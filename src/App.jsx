import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./routes/homepage/Home.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import SubPage from "./routes/subpage/SubPage.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const pages = [
    {
      path: "/medeni-hukuk",
      title: "Medeni Hukuk",
      description:
        "Kapsamlı medeni hukuk hizmetleri sunuyoruz: sözleşme hazırlığı, dava takibi, tazminat talepleri ve mülkiyet anlaşmazlıklarında temsil hizmeti vermekteyiz.",
      subTitle: "Medeni hukuk kapsamında sunduğumuz hizmetler:",
      ulSubpage: [
        "Sözleşmelerin hazırlanması ve incelenmesi",
        "Mülkiyet ve borç ilişkileri konularında danışmanlık",
        "Tazminat ve manevi zarar davalarının yürütülmesi",
        "Miras davaları, mal paylaşımı ve tapu uyuşmazlıkları",
        "Arabuluculuk ve uzlaşma desteği",
      ],
    },
    {
      path: "/aile-hukuku",
      title: "Aile Hukuku",
      description:
        "Boşanma, velayet, nafaka ve evlat edinme davalarında müvekkillerimize destek sağlıyoruz. Ailevi konularda haklarınızı korumak için yanınızdayız.",
      subTitle: "Aile hukuku kapsamında sunduğumuz hizmetler:",
      ulSubpage: [
        "Boşanma, mal paylaşımı ve velayet davaları",
        "Çocuklarla kişisel ilişki kurulması ve düzenlenmesi",
        "Nafaka talepleri ve icrası",
        "Babalık davaları ve soybağı uyuşmazlıkları",
        "Evlat edinme ve koruyucu aile süreçlerinde danışmanlık",
        "Aile içi arabuluculuk hizmetleri",
      ],
    },
    {
      path: "/ticaret-hukuku",
      title: "Ticaret Hukuku",
      description:
        "Şirket kuruluşu, sözleşme hazırlığı ve ticari uyuşmazlıkların çözümünde iş dünyasına hukuki destek sağlıyoruz.",
      subTitle: "Ticaret hukuku kapsamında sunduğumuz hizmetler:",
      ulSubpage: [
        "Şirket kurulumu, dönüşümü ve tasfiyesi işlemleri",
        "Ticari sözleşmelerin hazırlanması ve yorumlanması",
        "Ticari davalarda ve tahkimde temsil",
        "İş ortaklıklarında müzakerelere hukuki destek",
        "Yönetim kurulu sorumlulukları ve şirket içi düzenlemeler",
        "Rekabet hukuku ve ticari sırların korunması",
      ],
    },
    {
      path: "/kvkk-hukuku",
      title: "Kişisel Verilerin Korunması Hukuku",
      description:
        "KVKK ve GDPR kapsamında danışmanlık hizmetleri sunuyoruz. Politika oluşturma, risk denetimi ve idari süreçlerde yanınızdayız.",
      subTitle: "KVKK kapsamında sunduğumuz hizmetler:",
      ulSubpage: [
        "KVKK ve GDPR uyumluluk danışmanlığı",
        "Veri koruma politikalarının hazırlanması",
        "İç denetim ve risk değerlendirmesi",
        "KVKK ihlallerinde süreç yönetimi ve savunma",
        "Veri sorumluları için eğitim ve bilinçlendirme faaliyetleri",
      ],
    },
    {
      path: "/is-hukuku",
      title: "İş Hukuku",
      description:
        "İş sözleşmeleri, fesih süreçleri, mobbing ve ayrımcılık davalarında hem işverenlere hem de çalışanlara destek sağlıyoruz.",
      subTitle: "İş hukuku kapsamında sunduğumuz hizmetler:",
      ulSubpage: [
        "İşe alım, işten çıkarma ve sözleşme düzenlemeleri",
        "İşe iade ve kıdem tazminatı davaları",
        "Mobbing ve ayrımcılık konularında dava ve danışmanlık",
        "İşyeri yönetmelikleri ve ücret politikaları",
        "Çalışma saatleri, izinler ve maaş uyuşmazlıkları",
        "İş uyuşmazlıklarında arabuluculuk hizmeti",
      ],
    },
    {
      path: "/gayrimenkul-hukuku",
      title: "Gayrimenkul Hukuku",
      description:
        "Tapu, kiralama, mülkiyet davaları, inşaat hukuku ve taşınmaz yatırımları konusunda hukuki çözümler sunuyoruz.",
      subTitle: "Gayrimenkul hukuku kapsamında sunduğumuz hizmetler:",
      ulSubpage: [
        "Gayrimenkul alım-satım ve kira sözleşmeleri",
        "Tapu işlemleri ve ipotek konuları",
        "Zilyetlik, ortaklık ve mülkiyet davaları",
        "İnşaat projelerinde hukuki danışmanlık",
        "İmar planı uyuşmazlıkları ve belediye işlemleri",
      ],
    },
  ];

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={
                <SubPage
                  title={page.title}
                  description={page.description}
                  subTitle={page.subTitle}
                  items={page.ulSubpage}
                />
              }
            />
          ))}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
