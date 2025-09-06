import { useEffect, useState } from "react";
import "./contact.css";

const ContactCard = ({ image, title, subtitle, phone, email, hours, textButton, link, bgColor: propBgColor, textColor: propTextColor, variant }) => {
  const [bgColor, setBgColor] = useState(propBgColor || "#ffffff");
  const [textColor, setTextColor] = useState(propTextColor || "#000000");
  const [isDarkMode, setIsDarkMode] = useState(document.body.classList.contains("dark-mode"));

  useEffect(() => {
    if (!propBgColor || !propTextColor) {
      const img = new Image(); 
      img.crossOrigin = "Anonymous";
      img.src = image;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const pixelData = ctx.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

        if (!propBgColor) {
          setBgColor(color);
        }
        if (!propTextColor) {
          setTextColor("white");
        }
      };
    }
  }, [image, propBgColor, propTextColor]);
  

  useEffect(() => {
    const handleModeChange = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    window.addEventListener("dark-mode-change", handleModeChange);

    return () => {
      window.removeEventListener("dark-mode-change", handleModeChange);
    };
  }, []);

  const baseColors = {
    cardBg: (isDarkMode && propBgColor) ? "#343434" : bgColor,
    border: isDarkMode ? "#343434" : textColor,
    text: (isDarkMode && propTextColor) ? "#ffffff" : textColor,
    btnBg: (isDarkMode && propBgColor) ? "#343434" : bgColor,
    btnBorder: (isDarkMode && propTextColor) ? "#ffffff" : textColor,
    btnText: (isDarkMode && propTextColor) ? "#ffffff" : textColor
  };

  if (variant === 'horizontal') {
    return (
      <div className="contact-card contact-card-horizontal" style={{ backgroundColor: baseColors.cardBg, borderColor: baseColors.border }}>
        <img src={image} alt={title} className="contact-image" />
        <div className="contact-info">
          <h2 style={{ color: baseColors.text }}>{title}</h2>
          {subtitle && <h3 style={{ color: baseColors.text }}>{subtitle}</h3>}
          {phone && <h3 style={{ color: baseColors.text }}>{phone}</h3>}
          {link && (
            <a
              className="link-button"
              style={{ backgroundColor: baseColors.btnBg, borderColor: baseColors.btnBorder, color: baseColors.btnText }}
                  href={link}
                  onMouseEnter={(e) => {
                    e.target.style.color = (isDarkMode && propTextColor) ? "#343434" : baseColors.btnBg;
                    e.target.style.backgroundColor = (isDarkMode && propBgColor) ? "#ffffff" : baseColors.btnBorder;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = baseColors.btnText;
                    e.target.style.backgroundColor = baseColors.btnBg;
                  }}
                >
                  {textButton || 'Appeler'}
                </a>
              )}
        </div>
      </div>
    );
  }

  return (
    <div className="contact-card" style={{ backgroundColor: baseColors.cardBg, borderColor: baseColors.border }}>
      <img src={image} alt={title} className="contact-image" />
      <div className="contact-info">
        <h2 style={{ color: baseColors.text }}>{title}</h2>
        {subtitle && <h3 style={{ color: baseColors.text }}>{subtitle}</h3>}
        {phone && <p style={{ color: baseColors.text }}><strong>Téléphone :</strong> {phone}</p>}
        {email && <p style={{ color: baseColors.text }}><strong>Email :</strong> {email}</p>}
        {hours && <p style={{ color: baseColors.text }}><strong>Horaires :</strong> {hours}</p>}
        {link && (
          <a
            className="link-button"
            style={{ backgroundColor: baseColors.btnBg, borderColor: baseColors.btnBorder, color: baseColors.btnText }}
            href={link}
            onMouseEnter={(e) => {
              e.target.style.color = (isDarkMode && propTextColor) ? "#343434" : baseColors.btnBg;
              e.target.style.backgroundColor = (isDarkMode && propBgColor) ? "#ffffff" : baseColors.btnBorder;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = baseColors.btnText;
              e.target.style.backgroundColor = baseColors.btnBg;
            }}
          >
            {textButton}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;