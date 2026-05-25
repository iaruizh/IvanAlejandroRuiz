import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kit de Prensa | Iván Alejandro Ruiz",
  description: "Material de prensa, biografía profesional y fotos para medios de comunicación sobre Iván Alejandro Ruiz Hernández.",
};

export default function PrensaPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", paddingTop: 120 }}>
        <section style={{ padding: "5rem 4rem 7rem" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            Kit de Prensa
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem" }}>
            Material para <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>medios</em>
          </h1>
          <p style={{ color: "var(--color-text2)", maxWidth: 600, lineHeight: 1.9, marginBottom: "5rem" }}>
            Aquí encontrarás todo lo que necesitas para una nota, entrevista o mención de Iván Alejandro Ruiz Hernández en tus medios de comunicación.
          </p>

          <div style={{ marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "2rem" }}>Biografía <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>profesional</em></h2>
            <div style={{ padding: "2rem", background: "var(--color-bg2)", border: "1px solid var(--color-border)", marginBottom: "2rem", lineHeight: 1.8, color: "var(--color-text2)" }}>
              <p>
                Iván Alejandro Ruiz Hernández es ingeniero mecatrónico de la Universidad Nacional de Colombia, terapeuta holointegrativo certificado por AMHI Internacional y herbólogo FUNIBÁ. Es fundador y director de ZANATTE Centro Holointegrativo, un espacio dedicado a la transformación integral del ser humano ubicado en Bogotá, Colombia.
              </p>
              <p>
                Con más de 12 años de experiencia, Iván ha acompañado a más de 500 personas en sus procesos de transformación personal, integrando herramientas de terapia holística, medicina ancestral, terapias energéticas y herbología medicinal. Su enfoque único combina la precisión analítica de la ingeniería con la sabiduría ancestral y la comprensión emocional-energética del ser humano como un sistema integrado.
              </p>
              <p>
                Es conferencista activo en temas de bienestar integral, medicina ancestral y transformación personal, y autor de contenido educativo sobre terapias holísticas en su blog y redes sociales donde cuenta con miles de seguidores.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "2rem" }}>Datos <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>clave</em></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              {[
                { label: "Nombre completo", value: "Iván Alejandro Ruiz Hernández" },
                { label: "Profesión", value: "Ingeniero Mecatrónico, Terapeuta Holointegrativo" },
                { label: "Ubicación", value: "Bogotá, Colombia" },
                { label: "Años de experiencia", value: "12+" },
                { label: "Personas acompañadas", value: "500+" },
                { label: "Certificaciones", value: "8 certificaciones profesionales" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "1.5rem", border: "1px solid var(--color-border)", background: "var(--color-bg2)" }}>
                  <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.5rem" }}>{item.label}</p>
                  <p style={{ color: "var(--color-text)", fontSize: "1rem", fontWeight: 500 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 300, marginBottom: "2rem" }}>Redes <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>sociales</em></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              {[
                { platform: "Instagram", handle: "@IvanAleRuizH", followers: "15K+" },
                { platform: "TikTok", handle: "@IvanAleRuizH", followers: "25K+" },
                { platform: "Website", handle: "ivanruiz.com", followers: "Blog activo" },
                { platform: "ZANATTE", handle: "zanatte.com.co", followers: "Centro" },
              ].map((social) => (
                <div key={social.platform} style={{ padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-bg2)" }}>
                  <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.5rem" }}>{social.platform}</p>
                  <p style={{ color: "var(--color-text)", fontSize: "1.1rem", fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>{social.handle}</p>
                  <p style={{ color: "var(--color-text3)", fontSize: "0.85rem" }}>{social.followers}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "3rem", background: "var(--color-bg2)", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 300, marginBottom: "1rem" }}>¿Necesitas más <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>información?</em></h3>
            <p style={{ color: "var(--color-text2)", marginBottom: "2rem", lineHeight: 1.8 }}>Contáctame directamente para fotos profesionales, entrevistas o material adicional para tu medio de comunicación.</p>
            <a href="mailto:prensa@ivanruiz.com" style={{ display: "inline-block", background: "var(--color-accent)", color: "var(--color-bg)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
              Contactar para Prensa →
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
