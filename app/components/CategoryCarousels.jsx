"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { pagesDataByLang } from "./pagesData";
import { assetPath } from "../utils/assetPath";
import "./category-carousels.css";

const EXCERPT_MAX = 170;
const FALLBACK_IMAGE = "/logo.png";

const clampChannel = (value) => Math.max(0, Math.min(255, Math.round(value)));
const WHITE_RGB = { r: 255, g: 255, b: 255 };

const trimEmojiPrefix = (value) => value.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F\s]+/u, "").trim();

const normalizeImageSrc = (src) => {
  if (!src) return assetPath(FALLBACK_IMAGE);
  if (/^https?:\/\//.test(src)) return src;
  if (src.startsWith("/")) return assetPath(src);
  return src;
};

const getImageFromDocument = (doc) => {
  const selectors = [
    "main .page .image-text-container .image-container img",
    "main .page .image-container img",
    "main .page img",
  ];

  for (const selector of selectors) {
    const nodes = Array.from(doc.querySelectorAll(selector));
    const imageNode = nodes.find((img) => {
      const src = img.getAttribute("src") || "";
      if (!src) return false;
      return !src.includes("favicon") && !src.includes("logo_lyon") && !src.includes("logo-cosa");
    });

    if (imageNode) {
      return normalizeImageSrc(imageNode.getAttribute("src") || "");
    }
  }

  return assetPath(FALLBACK_IMAGE);
};

const getExcerptFromDocument = (doc, fallback) => {
  const selectors = [
    "main .page .mise-avant",
    "main .page .texte",
    "main .page p",
  ];

  for (const selector of selectors) {
    const nodes = Array.from(doc.querySelectorAll(selector));
    const text = nodes
      .map((node) => (node.textContent || "").replace(/\s+/g, " ").trim())
      .find((value) => value.length > 70);

    if (!text) continue;
    if (text.length <= EXCERPT_MAX) return text;
    return `${text.slice(0, EXCERPT_MAX).trimEnd()}...`;
  }

  return fallback;
};

const trimExcerpt = (value) => {
  if (!value) return "";
  if (value.length <= EXCERPT_MAX) return value;
  return `${value.slice(0, EXCERPT_MAX).trimEnd()}...`;
};

const isExternalLink = (value) => /^https?:\/\//.test(value || "");

const defaultGradientVariants = ["cat-0", "cat-1", "cat-2", "cat-3", "cat-4", "cat-5"];

const getGradientVariant = (section, index) =>
  section.gradientVariant || defaultGradientVariants[index % defaultGradientVariants.length];

const toCssRgb = ({ r, g, b }) => `rgb(${clampChannel(r)}, ${clampChannel(g)}, ${clampChannel(b)})`;

const darkenColor = (color, amount) => ({
  r: clampChannel(color.r * (1 - amount)),
  g: clampChannel(color.g * (1 - amount)),
  b: clampChannel(color.b * (1 - amount)),
});

const toLinear = (channel) => {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const getLuminance = ({ r, g, b }) =>
  0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

const getContrastRatio = (foreground, background) => {
  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
};

const ensureWhiteContrast = (color, minRatio) => {
  let next = { ...color };
  let guard = 0;

  while (getContrastRatio(next, WHITE_RGB) < minRatio && guard < 12) {
    next = darkenColor(next, 0.12);
    guard += 1;
  }

  return next;
};

const buildSectionPalette = (baseR, baseG, baseB) => {
  const startRaw = { r: baseR + 16, g: baseG + 16, b: baseB + 16 };
  const endRaw = { r: baseR - 42, g: baseG - 42, b: baseB - 42 };
  const accentRaw = { r: baseR - 26, g: baseG - 26, b: baseB - 26 };

  const start = ensureWhiteContrast(startRaw, 4.5);
  const end = ensureWhiteContrast(endRaw, 4.5);
  const accent = ensureWhiteContrast(accentRaw, 4.5);
  const accentDark = darkenColor(accent, 0.2);

  return {
    background: `linear-gradient(135deg, ${toCssRgb(start)}, ${toCssRgb(end)})`,
    accent: toCssRgb(accent),
    accentDark: toCssRgb(accentDark),
  };
};

const getGradientFromImage = (src) =>
  new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.referrerPolicy = "no-referrer";

    img.onload = () => {
      try {
        const sampleSize = 24;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });

        if (!ctx) {
          resolve(null);
          return;
        }

        canvas.width = sampleSize;
        canvas.height = sampleSize;
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

        const { data } = ctx.getImageData(0, 0, sampleSize, sampleSize);

        let r = 0;
        let g = 0;
        let b = 0;
        let count = 0;

        for (let i = 0; i < data.length; i += 4) {
          const alpha = data[i + 3];
          if (alpha < 120) continue;

          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count += 1;
        }

        if (!count) {
          resolve(null);
          return;
        }

        const baseR = r / count;
        const baseG = g / count;
        const baseB = b / count;

        resolve(buildSectionPalette(baseR, baseG, baseB));
      } catch (_error) {
        resolve(null);
      }
    };

    img.onerror = () => resolve(null);
    img.src = src;
  });

const buildDefaultSections = (data) =>
  data.map((category) => ({
    title: category.category,
    items: category.items.map((item) => ({
      id: item.path,
      type: "topic",
      title: item.name,
      path: item.path,
    })),
  }));

const CategoryCarousels = ({ lang = "fr", labels, sections }) => {
  const data = pagesDataByLang[lang] || pagesDataByLang.fr;
  const resolvedSections = useMemo(
    () => (sections?.length ? sections : buildDefaultSections(data)),
    [sections, data]
  );

  const [metaByPath, setMetaByPath] = useState({});
  const [sectionPalettes, setSectionPalettes] = useState({});
  const scrollerRefs = useRef({});

  const topicItems = useMemo(
    () =>
      resolvedSections
        .flatMap((section) => section.items || [])
        .filter((item) => item.type === "topic" && item.path),
    [resolvedSections]
  );

  useEffect(() => {
    let cancelled = false;

    const loadMeta = async () => {
      const entries = await Promise.all(
        topicItems.map(async (item) => {
          const itemTitle = trimEmojiPrefix(item.title || item.name || "");
          const fallbackExcerpt = labels.fallbackExcerpt.replace("{topic}", itemTitle);

          try {
            const response = await fetch(assetPath(item.path));
            if (!response.ok) {
              throw new Error("Failed to fetch page metadata");
            }

            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const imageSrc = getImageFromDocument(doc);
            const excerpt = getExcerptFromDocument(doc, fallbackExcerpt);

            return [item.path, { imageSrc, excerpt }];
          } catch (_error) {
            return [item.path, { imageSrc: assetPath(FALLBACK_IMAGE), excerpt: fallbackExcerpt }];
          }
        })
      );

      if (!cancelled) {
        setMetaByPath(Object.fromEntries(entries));
      }
    };

    if (topicItems.length) {
      loadMeta();
    }

    return () => {
      cancelled = true;
    };
  }, [topicItems, labels.fallbackExcerpt]);

  useEffect(() => {
    let cancelled = false;

    const loadSectionGradients = async () => {
      const entries = await Promise.all(
        resolvedSections.map(async (section, index) => {
          let candidateImage = "";

          for (const item of section.items || []) {
            if (item.type === "topic") {
              const src = metaByPath[item.path]?.imageSrc;
              if (src) {
                candidateImage = src;
                break;
              }
            } else if (item.imageSrc) {
              candidateImage = normalizeImageSrc(item.imageSrc);
              break;
            }
          }

          if (!candidateImage) {
            return [index, null];
          }

          const gradient = await getGradientFromImage(candidateImage);
          return [index, gradient];
        })
      );

      if (cancelled) return;

      const nextPalettes = {};
      entries.forEach(([index, palette]) => {
        if (palette) {
          nextPalettes[index] = palette;
        }
      });

      setSectionPalettes(nextPalettes);
    };

    loadSectionGradients();

    return () => {
      cancelled = true;
    };
  }, [resolvedSections, metaByPath]);

  const scrollCategory = (index, direction) => {
    const node = scrollerRefs.current[index];
    if (!node) return;
    const amount = Math.max(node.clientWidth * 0.85, 260);
    node.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="category-carousels" aria-label={labels.sectionAria}>
      {resolvedSections.map((section, index) => (
        <article
          key={section.title || section.category || index}
          className="category-carousel-block"
          style={
            sectionPalettes[index]
              ? {
                  "--section-accent": sectionPalettes[index].accent,
                }
              : undefined
          }
        >
          <aside
            className={`category-carousel-label category-gradient-${getGradientVariant(section, index)}`}
            style={sectionPalettes[index] ? { background: sectionPalettes[index].background } : undefined}
          >
            <h2 className="category-carousel-title">{section.title || section.category}</h2>
          </aside>

          <div className="category-carousel-content">
            <div className="category-carousel-controls" aria-hidden="true">
              <button type="button" className="category-carousel-arrow" onClick={() => scrollCategory(index, -1)}>
                {labels.prevLabel}
              </button>
              <button type="button" className="category-carousel-arrow" onClick={() => scrollCategory(index, 1)}>
                {labels.nextLabel}
              </button>
            </div>

            <div
              className="category-carousel-track"
              ref={(node) => {
                scrollerRefs.current[index] = node;
              }}
            >
              {(section.items || []).map((item, itemIndex) => {
                const itemTitle = trimEmojiPrefix(item.title || item.name || "");
                const itemKey = item.id || item.path || item.link || `${section.title || section.category}-${itemIndex}`;
                const isTopic = item.type === "topic";
                const link = item.path || item.link || "#";
                const isExternal = item.isExternal ?? isExternalLink(link);

                const topicMeta = isTopic ? metaByPath[item.path] : null;
                const fallbackTopicExcerpt = labels.fallbackExcerpt.replace("{topic}", itemTitle);

                const imageSrc = isTopic
                  ? topicMeta?.imageSrc || assetPath(FALLBACK_IMAGE)
                  : item.imageSrc
                    ? normalizeImageSrc(item.imageSrc)
                    : "";

                const excerpt = isTopic
                  ? topicMeta?.excerpt || fallbackTopicExcerpt
                  : trimExcerpt(item.excerpt || item.description || labels.resourceFallbackExcerpt || fallbackTopicExcerpt);

                const buttonLabel = item.buttonLabel || labels.readMoreLabel;

                return (
                  <article key={itemKey} className="category-topic-card">
                    <div className="category-topic-image-wrap">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={itemTitle}
                          className="category-topic-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="category-topic-emoji" aria-hidden="true">
                          {item.emoji || "🧭"}
                        </div>
                      )}
                    </div>

                    <div className="category-topic-content">
                      <h3 className="category-topic-title">{itemTitle}</h3>
                      <p className="category-topic-excerpt">{excerpt}</p>

                      {isExternal ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="category-topic-button">
                          {buttonLabel}
                        </a>
                      ) : (
                        <Link href={link} className="category-topic-button">
                          {buttonLabel}
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CategoryCarousels;
