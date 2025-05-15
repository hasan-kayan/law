import { motion } from "framer-motion";
import "./../../css/sections/homepage/Mission.css";

export default function Mission() {
  return (
    <section
      className="missionSection"
      id="mission"
      aria-labelledby="mission-heading"
      role="region"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        onViewportEnter={() => console.log("Animation triggered!")}
      >
        <h2 id="mission-heading" className="missionTitle subheading">
          Müvekkillerimizin <br />
          yanındayız
        </h2>
      </motion.div>

      <hr className="hrElement" aria-hidden="true" />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: false, amount: 0.1 }}
        className="missionText__section"
      >
        <p className="missionText">
          Çiftçi Hukuk Bürosu olarak, her bir müvekkilimizin hukuki ihtiyaçlarına
          özel, yenilikçi ve güvenilir çözümler sunmayı ilke edindik. İş hukuku
          başta olmak üzere, tüm çalışma alanlarımızda şeffaf iletişim, güçlü
          temsil kabiliyeti ve derin hukuki bilgiyle hareket ediyoruz. Hedefimiz,
          hukuki süreci müvekkillerimiz için anlaşılır, güvenli ve etkili hale
          getirmektir. Hizmetlerimizi inceleyerek size nasıl destek olabileceğimizi
          keşfedebilirsiniz.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true, amount: 0.4 }}
        className="missionButton__section"
      >
        <button
          className="missionButton"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="İletişim bölümüne geç"
        >
          <span aria-hidden="true">İletişim</span>
        </button>
      </motion.div>
    </section>
  );
}
