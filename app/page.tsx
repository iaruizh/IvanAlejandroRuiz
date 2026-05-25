import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Iván Alejandro Ruiz Hernández | Terapeuta Holointegrativo",
  description: "Ingeniero mecatrónico, terapeuta holointegrativo certificado y fundador de ZANATTE Centro Holointegrativo en Bogotá. Bienestar integral, medicina ancestral y transformación personal.",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
        {/* HERO */}
        <section style={{ padding: "160px 4rem 6rem", background: "linear-gradient(135deg, rgba(184,147,90,0.1) 0%, rgba(184,147,90,0.05) 100%)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
              Bienvenido
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem,6vw,6rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem", maxWidth: 900 }}>
              Salud integral a través de la <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>conciencia</em> y la <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>sabiduría</em>
            </h1>
            <p style={{ color: "var(--color-text2)", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.9, marginBottom: "3rem" }}>
              Soy ingeniero mecatrónico, terapeuta holointegrativo certificado y fundador de ZANATTE Centro Holointegrativo. Trabajo en la integración del cuerpo, la mente y el espíritu para tu transformación profunda.
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <a href="/#contacto" style={{ background: "var(--color-accent)", color: "var(--color-bg)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Agendar consulta →
              </a>
              <Link href="/sobre-mi" style={{ background: "transparent", border: "1px solid var(--color-accent)", color: "var(--color-accent)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(184,147,90,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Sobre mí
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: "6rem 4rem", background: "var(--color-bg2)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem" }}>
            {[
              { num: "500+", label: "Personas transformadas" },
              { num: "12+", label: "Años de experiencia" },
              { num: "8", label: "Certificaciones profesionales" },
              { num: "15+", label: "Artículos en el blog" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 300, color: "var(--color-accent)", marginBottom: "0.5rem" }}>{stat.num}</div>
                <p style={{ color: "var(--color-text2)", fontSize: "0.9rem", letterSpacing: "0.08em" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section style={{ padding: "7rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            Enfoque
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, lineHeight: 1.2, marginBottom: "3rem", maxWidth: 700 }}>
            Visión <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>holística</em> e <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>integrativa</em>
          </h2>
          <p style={{ color: "var(--color-text2)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: 700, marginBottom: "2rem" }}>
            No tratamos síntomas aislados. Trabajamos el ser humano completo: cuerpo, mente, emociones y energía. Mi formación como ingeniero mecatrónico me da una comprensión sistémica única del funcionamiento del cuerpo y cómo todos sus sistemas están interconectados.
          </p>
          <p style={{ color: "var(--color-text2)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: 700 }}>
            Integro herramientas de la medicina ancestral, terapias energéticas, herbología y acompañamiento emocional para crear procesos terapéuticos profundos y duraderos.
          </p>
        </section>

        {/* TERAPIAS */}
        <section id="terapias" style={{ padding: "7rem 4rem", background: "var(--color-bg2)", borderTop: "1px solid var(--color-border)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
              Servicios
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, marginBottom: "4rem" }}>
              Terapias <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>disponibles</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {[
                { title: "Masaje Holístico", desc: "Trabajo corporal profundo que integra liberación física, emocional y energética." },
                { title: "Terapia Energética", desc: "Equilibrio del campo energético y los chakras para restaurar la armonía vital." },
                { title: "Herbología Terapéutica", desc: "Uso de plantas medicinales colombianas para apoyo integral de la salud." },
                { title: "Acompañamiento Emocional", desc: "Trabajo profundo con emociones, traumas y patrones limitantes." },
                { title: "Medicina Ancestral", desc: "Ceremonias y trabajos con plantas sagradas para transformación de conciencia." },
                { title: "Consultoría Holística", desc: "Asesoría personalizada para tu proceso de bienestar y transformación." },
              ].map((service) => (
                <div key={service.title} style={{ padding: "2.5rem", border: "1px solid var(--color-border)", background: "var(--color-bg)", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)"; (e.currentTarget as HTMLElement).style.background = "var(--color-bg3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.background = "var(--color-bg)"; }}
                >
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 300, marginBottom: "1rem", color: "var(--color-text)" }}>{service.title}</h3>
                  <p style={{ color: "var(--color-text2)", fontSize: "0.95rem", lineHeight: 1.8 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ZANATTE */}
        <section id="zanatte" style={{ padding: "7rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            Centro
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, marginBottom: "2rem" }}>ZANATTE Centro <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>Holointegrativo</em></h2>
          <p style={{ color: "var(--color-text2)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: 700, marginBottom: "2rem" }}>
            ZANATTE es un espacio físico y energético diseñado para la transformación. Ubicado en Bogotá, cuenta con salas especializadas para terapias, meditación, ceremonias y procesos profundos.
          </p>
          <p style={{ color: "var(--color-text2)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: 700, marginBottom: "2rem" }}>
            El nombre ZANATTE viene del Quechua y significa "lugar sagrado de transformación". Cada espacio ha sido diseñado con intención y respeto por los procesos que en él ocurren.
          </p>
          <a href="https://zanatte.com.co" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "var(--color-accent)", color: "var(--color-bg)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Visita ZANATTE →
          </a>
        </section>

        {/* BLOG PREVIEW */}
        <section style={{ padding: "7rem 4rem", background: "var(--color-bg2)", borderTop: "1px solid var(--color-border)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
              Contenido
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, marginBottom: "4rem" }}>Artículos en el <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>blog</em></h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
              {[
                { title: "¿Qué es la terapia holointegrativa y cómo puede ayudarte?", date: "15 ene 2025", category: "Terapias" },
                { title: "La conexión entre bienestar emocional y salud física", date: "22 ene 2025", category: "Bienestar" },
                { title: "Medicina ancestral: el yagé como herramienta de conciencia", date: "1 feb 2025", category: "Medicina Ancestral" },
              ].map((article) => (
                <Link key={article.title} href="/blog" style={{ textDecoration: "none", color: "inherit" }}>
                  <article style={{ padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-bg)", display: "flex", flexDirection: "column", height: "100%", transition: "all 0.3s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; }}
                  >
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1rem" }}>{article.category}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 300, lineHeight: 1.4, marginBottom: "1rem", flex: 1 }}>{article.title}</h3>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text3)" }}>{article.date}</div>
                  </article>
                </Link>
              ))}
            </div>
            <Link href="/blog" style={{ display: "inline-block", background: "transparent", border: "1px solid var(--color-accent)", color: "var(--color-accent)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(184,147,90,0.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              Ver todos los artículos →
            </Link>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" style={{ padding: "7rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            Conectemos
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 300, marginBottom: "2rem" }}>¿Listo para <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>transformarte</em>?</h2>
          <p style={{ color: "var(--color-text2)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: 600, marginBottom: "3rem" }}>
            Te invito a que nos conectemos. Podemos hablar sobre tu situación, tus necesidades y cómo puedo apoyarte en tu camino hacia el bienestar integral.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              { label: "Instagram", value: "@IvanAleRuizH", href: "https://instagram.com/IvanAleRuizH" },
              { label: "TikTok", value: "@IvanAleRuizH", href: "https://tiktok.com/@IvanAleRuizH" },
              { label: "WhatsApp", value: "+57 (310) 123-4567", href: "https://wa.me/573101234567" },
              { label: "Email", value: "hola@ivanruiz.com", href: "mailto:hola@ivanruiz.com" },
            ].map((contact) => (
              <a key={contact.label} href={contact.href} target="_blank" rel="noopener noreferrer" style={{ padding: "2rem", border: "1px solid var(--color-border)", background: "var(--color-bg2)", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)"; (e.currentTarget as HTMLElement).style.background = "var(--color-bg3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.background = "var(--color-bg2)"; }}
              >
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.5rem" }}>{contact.label}</div>
                <div style={{ color: "var(--color-text)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{contact.value}</div>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
