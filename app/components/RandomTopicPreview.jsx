"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { pagesDataByLang } from "./pagesData";
import { assetPath } from "../utils/assetPath";
import "./random-topic-preview.css";

const MAX_PREVIEW_LENGTH = 300;

const flattenPages = (data) =>
  data.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
    }))
  );

const trimEmojiPrefix = (value) => value.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F\s]+/u, "").trim();

const extractPreview = (html, fallbackText) => {
  if (!html) return fallbackText;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const selectors = [
    "main .page .mise-avant",
    "main .page .texte",
    "main .page p",
    "article p",
    "p",
  ];

  let content = "";

  for (const selector of selectors) {
    const nodes = Array.from(doc.querySelectorAll(selector));
    const candidate = nodes
      .map((node) => (node.textContent || "").replace(/\s+/g, " ").trim())
      .find((text) => text.length > 80);

    if (candidate) {
      content = candidate;
      break;
    }
  }

  if (!content) {
    content = fallbackText;
  }

  if (content.length <= MAX_PREVIEW_LENGTH) {
    return content;
  }

  return `${content.slice(0, MAX_PREVIEW_LENGTH).trimEnd()}...`;
};

const RandomTopicPreview = ({ lang = "fr", labels }) => {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState(null);
  const [previewText, setPreviewText] = useState("");
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  const data = pagesDataByLang[lang] || pagesDataByLang.fr;
  const allPages = useMemo(() => flattenPages(data), [data]);

  const pickAnotherPage = () => {
    if (!allPages.length) return;

    if (allPages.length === 1) {
      setSelectedPage(allPages[0]);
      return;
    }

    setSelectedPage((current) => {
      let next = current;
      while (!next || next.path === current?.path) {
        next = allPages[Math.floor(Math.random() * allPages.length)];
      }
      return next;
    });
  };

  useEffect(() => {
    pickAnotherPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, allPages.length]);

  useEffect(() => {
    if (!selectedPage) return;

    const fallback = labels.fallbackPreview.replace("{topic}", trimEmojiPrefix(selectedPage.name));
    const controller = new AbortController();

    const loadPreview = async () => {
      setIsLoadingPreview(true);
      setPreviewText("");

      try {
        const response = await fetch(assetPath(selectedPage.path), { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Preview fetch failed");
        }
        const html = await response.text();
        setPreviewText(extractPreview(html, fallback));
      } catch (_error) {
        setPreviewText(fallback);
      } finally {
        setIsLoadingPreview(false);
      }
    };

    loadPreview();

    return () => controller.abort();
  }, [selectedPage, labels.fallbackPreview]);

  if (!selectedPage) {
    return null;
  }

  return (
    <section className="random-preview" aria-labelledby="random-preview-title">

      <article className="random-preview-card">
        <p className="random-preview-category">{selectedPage.category}</p>
        <h3 className="random-preview-topic">{selectedPage.name}</h3>

        {isLoadingPreview ? (
          <div className="random-preview-skeleton" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        ) : (
          <p className="random-preview-text">{previewText}</p>
        )}

        <div className="random-preview-actions">
          <button
            type="button"
            className="random-preview-open"
            onClick={() => router.push(selectedPage.path)}
          >
            {labels.readMoreCta}
          </button>
          <button
            type="button"
            className="random-preview-another"
            onClick={pickAnotherPage}
          >
            {labels.anotherTopicCta}
          </button>
        </div>
      </article>
    </section>
  );
};

export default RandomTopicPreview;
