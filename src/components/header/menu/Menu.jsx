import { useState, useEffect, useRef } from "react";
import MenuExp from "./MenuExp.jsx";
import ArrowDownIcon from "./../../../assets/icons/icon-arrow-down.svg";
import ArrowUpIcon from "./../../../assets/icons/icon-arrow-up.svg";
import CloseIcon from "./../../../assets/icons/closeIcon.svg";
import "./../../../css/components/header/menu/Menu.css";

const menuItems = [
  { label: "Ana Sayfa", id: "home" },
  { label: "Misyonumuz", id: "mission" },
  {
    label: "Uzmanlık Alanlarımız",
    id: "expertise",
    expandable: true,
  },
  { label: "Hakkımızda", id: "about" },
  { label: "İletişim", id: "contact" },
];

export default function Menu({ onClose }) {
  const [animation, setAnimation] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const menuRef = useRef();

  const onCloseAll = () => {
    setAnimation(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onCloseAll();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleClick = (item) => {
    if (item.expandable) {
      setShowExp(!showExp);
    } else {
      if (item.scrollTo === 0) {
        window.scroll({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(item.id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
      onCloseAll();
    }
  };

  return (
    <>
      <nav
        className={`sideMenu ${animation ? "closing" : ""}`}
        ref={menuRef}
        aria-label="Çiftçi Hukuk Bürosu Navigasyon Menüsü"
      >
        <button
          className="closeMenuBtn"
          onClick={onCloseAll}
          aria-label="Menüyü Kapat"
        >
          <img src={CloseIcon} alt="Menüyü kapat simgesi" />
        </button>

        <ul className="sideMenuList">
          {menuItems.map((item, index) => {
            const isExpanded = item.expandable && showExp;

            return (
              <li
                key={index}
                className={`sideMenuItem ${
                  item.expandable ? "sideMenuItemExpandable" : ""
                } ${isExpanded ? "expanded" : ""}`}
              >
                <div className={item.expandable ? "sideMenuItemRow" : ""}>
                  <button
                    className="sideMenuLink"
                    onClick={() => handleClick(item)}
                    aria-expanded={item.expandable ? showExp : undefined}
                    aria-controls={item.expandable ? "altMenu" : undefined}
                  >
                    {item.label}
                  </button>

                  {item.expandable && (
                    <button
                      className="toggleSubmenuBtn"
                      onClick={() => setShowExp(!showExp)}
                      aria-label={showExp ? "Alt menüyü gizle" : "Alt menüyü göster"}
                      aria-expanded={showExp}
                      aria-controls="altMenu"
                    >
                      <img
                        src={showExp ? ArrowUpIcon : ArrowDownIcon}
                        alt={showExp ? "Yukarı ok simgesi" : "Aşağı ok simgesi"}
                      />
                    </button>
                  )}
                </div>

                {item.expandable && showExp && (
                  <MenuExp onClose={() => setShowExp(false)} id="altMenu" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={`menuBackdrop ${animation ? "closing" : ""}`} aria-hidden="true" />
    </>
  );
}
