import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import "./../css/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection footerInfo">
          <img className="footerLogo" src={Logo} alt="Çiftçi Hukuk Bürosu Logosu" />
          <p className="footerDescription">
            Çiftçi Hukuk Bürosu, Türkiye genelinde hem ofis ortamında hem de uzaktan
            hukuki danışmanlık hizmeti sunmaktadır.
          </p>
        </div>

        <div className="footerSection footerContact">
          <h3 className="footerHeading">İletişim Bilgileri</h3>
          <address className="footerAddress">
            <p>
              E-posta: <a href="mailto:umit@gmail.com">umit@gmail.com</a>
            </p>
            <p>
              Telefon: <a href="tel:+905062316028">+90 506 231 60 28</a>
            </p>
            {/* <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/hasan-kayan-37a59319b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/hasan-kayan-37a59319b
              </a>
            </p> */}
          </address>
        </div>

        <div className="footerSection footerSpecialties">
          <h3 className="footerHeading">Uzmanlık Alanlarımız</h3>
          <nav aria-label="Uzmanlık alanları">
            <ul className="footerLinks">
              <li>
                <Link to="/medeni-hukuk">Medeni Hukuk</Link>
              </li>
              <li>
                <Link to="/aile-hukuku">Aile Hukuku</Link>
              </li>
              <li>
                <Link to="/ticaret-hukuku">Ticaret Hukuku</Link>
              </li>
              <li>
                <Link to="/is-hukuku">İş Hukuku</Link>
              </li>
              <li>
                <Link to="/gayrimenkul-hukuku">Gayrimenkul Hukuku</Link>
              </li>
              <li>
                <Link to="/kvkk">Kişisel Verilerin Korunması</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerCredit">© 2025 Çiftçi Hukuk Bürosu – Tüm hakları saklıdır</p>
      </div>
    </footer>
  );
}
