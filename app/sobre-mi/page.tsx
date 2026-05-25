import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre mí | Iván Alejandro Ruiz",
  description: "Conoce la historia de Iván Alejandro Ruiz Hernández, ingeniero mecatrónico, terapeuta holointegrativo y fundador de ZANATTE Centro Holointegrativo.",
};

export default function SobreMiPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", paddingTop: 120 }}>
        <section style={{ padding: "5rem 4rem 7rem" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            Mi historia
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem" }}>
            Un viaje de <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>ingeniería</em> a la <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>sanación</em>
          </h1>
          <p style={{ color: "var(--color-text2)", maxWidth: 700, lineHeight: 1.9, marginBottom: "5rem", fontSize: "1.05rem" }}>
            Mi nombre es Iván Alejandro Ruiz Hernández. Soy ingeniero mecatrónico de la Universidad Nacional de Colombia, terapeuta holointegrativo certificado por AMHI Internacional y herbólogo FUNIBÁ.
          </p>

          <div style={{ maxWidth: 900, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "5rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "1.5rem" }}>La formación en <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>ingeniería</em></h2>
              <p style={{ color: "var(--color-text2)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                Mi carrera como ingeniero mecatrónico me enseñó a comprender sistemas complejos, a analizar procesos y a buscar soluciones innovadoras. Estos conocimientos se convirtieron en una base sólida para entender cómo funciona el cuerpo humano como un sistema integrado.
              </p>
              <p style={{ color: "var(--color-text2)", lineHeight: 1.9 }}>
                La ingeniería me dio una mentalidad analítica y sistémica que ahora aplico a la salud integral.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "1.5rem" }}>El camino hacia la <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>terapia</em></h2>
              <p style={{ color: "var(--color-text2)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                A través de procesos personales profundos y el encuentro con maestros en terapia holística y medicina ancestral, descubrí que la verdadera transformación ocurre cuando integramos todas las dimensiones del ser: cuerpo, mente, emociones y espíritu.
              </p>
              <p style={{ color: "var(--color-text2)", lineHeight: 1.9 }}>
                Decidí formalizar esta pasión con certificaciones profesionales y hoy es mi misión compartir estas herramientas.
              </p>
            </div>
          </div>

          <div style={{ padding: "3rem", background: "var(--color-bg2)", border: "1px solid var(--color-border)", marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "2rem" }}>Mi <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>filosofía</em></h2>
            <ul style={{ listStyle: "none", padding: 0, color: "var(--color-text2)", lineHeight: 2, fontSize: "1rem" }}>
              <li>✓ El cuerpo siempre tiene la razón: síntomas y dolencias reflejan desequilibrios profundos</li>
              <li>✓ Salud integral: no existe bienestar sin armonía en todas las dimensiones del ser</li>
              <li>✓ La medicina ancestral y la ciencia moderna no son opuestas, son complementarias</li>
              <li>✓ El rol del terapeuta es facilitar, no imponer; los cambios vienen del consultante</li>
              <li>✓ Cada persona es un sistema único que requiere un enfoque personalizado</li>
              <li>✓ La transformación real es lenta, profunda y requiere responsabilidad personal</li>
            </ul>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "3rem" }}>Certificaciones y <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>formación</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Ingeniero Mecatrónico", org: "Universidad Nacional de Colombia" },
              { title: "Terapeuta Holointegrativo", org: "AMHI Internacional" },
              { title: "Herbólogo", org: "FUNIBÁ" },
              { title: "Facilitador de Ceremonias", org: "Tradición Ancestral" },
              { title: "Especialista en Medicina Ancestral", org: "Instituto de Sabiduría Andina" },
              { title: "Coach de Bienestar Integral", org: "Formación Continua" },
            ].map((cert) => (
              <div key={cert.title} style={{ padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-bg2)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 300, color: "var(--color-text)", marginBottom: "0.5rem" }}>{cert.title}</h3>
                <p style={{ color: "var(--color-accent)", fontSize: "0.85rem", letterSpacing: "0.08em" }}>{cert.org}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
