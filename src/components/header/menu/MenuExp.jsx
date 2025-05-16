import { Link } from "react-router-dom";
import "./../../../css/components/header/menu/MenuExp.css";

const lawLinks = [
  { label: "Medeni Hukuk", path: "/medeni-hukuk" },
  { label: "Aile Hukuku", path: "/aile-hukuku" },
  { label: "Ticaret Hukuku", path: "/ticaret-hukuku" },
  { label: "İş Hukuku", path: "/is-hukuku" },
  { label: "Gayrimenkul Hukuku", path: "/gayrimenkul-hukuku" },
  { label: "Kişisel Verilerin Korunması Hukuku", path: "/kvkk-hukuku" },
];

export default function MenuExp() {
  return (
    <div className="submenuWrapper">
      <ul
        className="submenuList"
        role="menu"
        aria-label="Hukuk alanları alt menüsü"
      >
        {lawLinks.map(({ label, path }) => (
          <li key={path} className="submenuItem" role="none">
            <hr aria-hidden="true" />
            <Link
              to={path}
              className="submenuLink"
              role="menuitem"
              tabIndex={0}
              aria-label={`${label} sayfasına git`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
