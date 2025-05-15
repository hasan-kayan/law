import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import civilIcon from "./../../assets/icons/civilIcon.svg";
import economIcon from "./../../assets/icons/economicIcon.svg";
import estateIcon from "./../../assets/icons/estateIcon.svg";
import familyIcon from "./../../assets/icons/familyIcon.svg";
import jobIcon from "./../../assets/icons/jobIcon.svg";
import dataIcon from "./../../assets/icons/personaldataIcon.svg";
import "./../../css/sections/homepage/Expertise.css";

export default function Expertise() {
  return (
    <section
      className="expertiseSection"
      id="expertise"
      aria-labelledby="expertise-heading"
      role="region"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="expertise-heading" className="expertiseTitle subheading">
          Uzmanlık Alanlarımız
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="gridSection">
          {[
            {
              icon: jobIcon,
              alt: "İş Hukuku İkonu",
              to: "/is-hukuku",
              title: "İş Hukuku",
              description:
                "Büromuz, DİSK (Devrimci İşçi Sendikaları Konfederasyonu) ile uzun yıllara dayanan iş birliği içinde olup, işçi ve sendika hakları konusunda geniş tecrübeye sahiptir. Toplu iş sözleşmeleri, işe iade davaları, haklı/haksız fesih, kıdem-ihbar tazminatları ve iş güvenliği konularında uzman desteği sunmaktayız.",
            },
            {
              icon: civilIcon,
              alt: "Medeni Hukuk İkonu",
              to: "/medeni-hukuk",
              title: "Medeni Hukuk",
              description:
                "Sözleşme hazırlanması, tazminat talepleri, kişilik haklarının korunması ve miras hukuku gibi konularda müvekkillerimize dava ve danışmanlık hizmeti sunuyoruz.",
            },
            {
              icon: familyIcon,
              alt: "Aile Hukuku İkonu",
              to: "/aile-hukuku",
              title: "Aile Hukuku",
              description:
                "Boşanma, velayet, nafaka, mal paylaşımı ve aile içi şiddetle ilgili süreçlerde hukuki destek sağlıyoruz. Aile kurumunun hassasiyetini gözeterek çözüm odaklı yaklaşımlar benimsiyoruz.",
            },
            {
              icon: economIcon,
              alt: "Ticaret Hukuku İkonu",
              to: "/ticaret-hukuku",
              title: "Ticaret Hukuku",
              description:
                "Şirket kuruluşu, ticari sözleşmeler, rekabet hukuku, iflas ve konkordato işlemleri gibi konularda şirketlere danışmanlık ve temsil hizmeti veriyoruz.",
            },
            {
              icon: estateIcon,
              alt: "Gayrimenkul Hukuku İkonu",
              to: "/gayrimenkul-hukuku",
              title: "Gayrimenkul Hukuku",
              description:
                "Taşınmaz alım-satımı, kira sözleşmeleri, tapu işlemleri ve kat mülkiyeti ile ilgili hukuki süreçlerde temsil hizmeti sunuyoruz.",
            },
            {
              icon: dataIcon,
              alt: "Kişisel Veri Koruma Hukuku İkonu",
              to: "/kvkk",
              title: "Kişisel Verilerin Korunması",
              description:
                "6698 sayılı KVKK kapsamında şirketlere uyum süreçleri, aydınlatma metinleri, açık rıza formları ve veri ihlali prosedürleri gibi konularda rehberlik ediyoruz.",
            },
          ].map((item, index) => (
            <Link className="gridElement" key={index} to={item.to}>
              <img className="gridImg" src={item.icon} alt={item.alt} />
              <h3 className="lawTitle">{item.title}</h3>
              <p className="lawDescription">{item.description}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
