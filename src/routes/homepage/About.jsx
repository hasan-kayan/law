import { motion } from "framer-motion";
import AboutImg from "./../../assets/logo.png"; // Buraya büronun görseli veya logosu gelebilir
import "./../../css/sections/homepage/About.css";

export default function About() {
  return (
    <div className="aboutSection" id="about">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img className="aboutImg" src={AboutImg} alt="Çiftçi Hukuk Bürosu" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="aboutText__section"
      >
        <p className="lawyerAbout">Hukuk Bürosu</p>
        <h2 className="h2About">Çiftçi Hukuk Bürosu</h2>
        <p className="aboutText">
          Çiftçi Hukuk Bürosu, iş hukuku başta olmak üzere, işçi hakları, toplu
          iş sözleşmeleri ve sendikal faaliyetler konusunda uzmanlaşmış bir hukuk
          bürosudur. Müvekkillerimize yalnızca hukuki destek sunmakla kalmayıp,
          aynı zamanda çalışma hayatında karşılaşılan zorluklara karşı stratejik
          çözümler üretmeyi amaçlıyoruz.
        </p>
        <hr className="hrElement" />
        <h4 className="educationTitle">Deneyim ve Faaliyet Alanları</h4>
        <p className="educationAbout">
          Uzman kadromuz, Devrimci İşçi Sendikaları Konfederasyonu (DİSK)
          bünyesindeki birçok iş kolunda aktif hukuki danışmanlık görevini
          yürütmektedir. Yıllar içinde edinilen deneyimle, hem bireysel işçi
          uyuşmazlıklarında hem de toplu iş sözleşmelerinde güçlü müzakereler
          gerçekleştirilmiştir. Dava takiplerinden önleyici hukuk hizmetlerine
          kadar geniş bir yelpazede faaliyet gösteriyoruz.
        </p>
        <h4 className="educationTitle">Kurumsal Kimlik</h4>
        <p className="educationAbout">
          Büro, Burdur Barosu eski başkanı ve saygın hukukçu Yusuf Çiftçi
          tarafından kurulmuştur. Temelleri etik değerlere, toplumsal duyarlılığa
          ve hukukun üstünlüğüne dayanan büromuz, kurumsal müvekkillerin yanı
          sıra işçi haklarının korunması konusunda da öncü bir duruş
          sergilemektedir.
        </p>
      </motion.div>
    </div>
  );
}
