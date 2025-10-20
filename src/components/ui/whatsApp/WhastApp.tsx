"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import './whatsapp.css'

export const WhastApp = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza este número con el número de WhatsApp de tu empresa
    const phoneNumber = "51902198142"; // Formato: código de país + número sin espacios ni símbolos
    const message = encodeURIComponent(
      "Hola! Me gustaría obtener más información."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-float" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">¿Necesitas ayuda?</span>
    </div>
  );
};
