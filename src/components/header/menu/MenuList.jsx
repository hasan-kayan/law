import React from "react";
import "./../../../css/components/header/menu/MenuList.css";

export default function MenuList() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "home", label: "Anasayfa" },
    { id: "mission", label: "Misyonumuz" },
    { id: "expertise", label: "Uzmanlık Alanları" },
    { id: "about", label: "Hakkımızda" },
    { id: "contact", label: "İletişim" },
  ];

  return (
    <ul className="menuSection">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            className="menuBtn"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
