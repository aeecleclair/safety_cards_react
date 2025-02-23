import { useEffect, useState } from "react";
import "./contact.css";

const ContactCard = ({ image, title, subtitle, phone, email, hours, textButton, link, bgColor: propBgColor, textColor: propTextColor }) => {
  const [bgColor, setBgColor] = useState(propBgColor || "#ffffff");
  const [textColor, setTextColor] = useState(propTextColor || "#ffffff");

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

  return (
    <div className="contact-card" style={{ backgroundColor: bgColor, borderColor: textColor}}>
      <img src={image} alt={title} className="contact-image" />
      <div className="contact-info">
        <h2 style={{ color: textColor }}>{title}</h2>
        <h3 style={{ color: textColor }}>{subtitle}</h3>
        <p style={{ color: textColor }}><strong>Téléphone :</strong> {phone}</p>
        <p style={{ color: textColor }}><strong>Email :</strong> {email}</p>
        {hours && <p style={{ color: textColor }}><strong>Horaires :</strong> {hours}</p>}
        <a
          className="link-button" style={{ backgroundColor: bgColor, borderColor: textColor, color: textColor }}
          href={link}
          onMouseEnter={(e) => {
            e.target.style.color = bgColor;
            e.target.style.backgroundColor = textColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = textColor;
            e.target.style.backgroundColor = bgColor;
          }}
        >
          {textButton}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;