import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conferencias y Charlas | Iván Alejandro Ruiz",
  description: "Temas de conferencias disponibles sobre terapia holointegrativa, bienestar integral y medicina ancestral.",
};

const conferenceTopics = [
  {
    title: "Introducción a la terapia holointegrativa",
    duration: "1.5 horas",
    description: "Una visión integral sobre cómo la terapia holointegrativa aborda la salud desde la perspectiva del ser humano completo.",
    format: "Charla interactiva + preguntas",
  },
  {
    title: "El cuerpo habla: descodificación de síntomas",
    duration: "2 horas",
    description: "Aprende a escuchar lo que tu cuerpo intenta comunicarte a través de síntomas y dolencias.",
    format: "Presentación + taller interactivo",
  },
  {
    title: "Bienestar emocional y liberación de traumas",
    duration: "2 horas",
    description: "Cómo las emociones no procesadas se almacenan en el cuerpo y cómo liberarlas.",
    format: "Charla + dinámicas vivenciales",
  },
  {
    title: "Medicina ancestral: sabiduría andina",
    duration: "1.5 horas",
    description: "Explorando la profunda sabiduría de las culturas ancestrales andinas y su aplicación en la actualidad.",
    format: "Charla ilustrada",
  },
  {
    title: "Plantas maestras y ceremonias sagradas",
    duration: "2 horas",
    description: "Conoce el papel de plantas sagradas como el yagé en los procesos de transformación y conciencia.",
    format: "Charla educativa + q&a",
  },
  {
    title: "Herbología medicinal: plantas que sanan",
    duration: "1.5 horas",
    description: "Descubre las plantas medicinales más poderosas disponibles en tu entorno y cómo usarlas.",
    format: "Presentación + muestras",
  },
  {
    title: "El sistema nervioso y el estrés crónico",
    duration: "1.5 horas",
    description: "Comprende cómo funciona tu sistema nervioso y por qué el estrés es una epidemia moderna.",
    format: "Charla científica + técnicas prácticas",
  },
  {
    title: "Rituales y prácticas para el bienestar cotidiano",
    duration: "2 horas",
    description: "Rituales simples pero poderosos que puedes incorporar en tu vida diaria para transformar tu bienestar.",
    format: "Taller práctico",
  },
];

export default function ConferenciasPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", paddingTop: 120 }}>
        <section style={{ padding: "5rem 4rem 7rem" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            Charlas
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem" }}>
            Conferencias y <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>charlas</em>
          </h1>
          <p style={{ color: "var(--color-text2)", maxWidth: 700, lineHeight: 1.9, marginBottom: "5rem", fontSize: "1.05rem" }}>
            Ofrezco conferencias y charlas sobre terapia holointegrativa, bienestar integral, medicina ancestral y transformación personal para empresas, universidades, eventos y comunidades. Cada charla es personalizada según las necesidades del público.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
            {conferenceTopics.map((topic) => (
              <div key={topic.title} style={{ padding: "2.5rem", border: "1px solid var(--color-border)", background: "var(--color-bg2)", transition: "all 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; }}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 300, marginBottom: "1rem", color: "var(--color-text)" }}>{topic.title}</h3>
                <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", fontSize: "0.85rem", color: "var(--color-accent)" }}>
                  <span>⏱ {topic.duration}</span>
                  <span>•</span>
                  <span>{topic.format}</span>
                </div>
                <p style={{ color: "var(--color-text2)", lineHeight: 1.7, fontSize: "0.95rem" }}>{topic.description}</p>
              </div>
            ))}
          </div>

          <div style={{ padding: "4rem", background: "var(--color-bg2)", border: "1px solid var(--color-border)", textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "1.5rem" }}>Interesado en una <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>conferencia?</em></h2>
            <p style={{ color: "var(--color-text2)", marginBottom: "2rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 2rem" }}>
              Ofrezco conferencias personalizadas para tu organización, universidad, evento o comunidad. Contáctame para discutir tus necesidades específicas y crear una charla que resuene con tu audiencia.
            </p>
            <a href="mailto:conferencias@ivanruiz.com" style={{ display: "inline-block", background: "var(--color-accent)", color: "var(--color-bg)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
              Solicitar conferencia →
            </a>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ color: "var(--color-text3)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>¿Prefieres hablar primero?</p>
            <a href="/#contacto" style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            >
              Agendar consulta
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
