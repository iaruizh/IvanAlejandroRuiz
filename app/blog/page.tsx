import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Iván Alejandro Ruiz",
  description: "Artículos sobre terapia holointegrativa, bienestar integral, medicina ancestral y transformación personal.",
};

const blogPosts = [
  { slug: "que-es-la-terapia-holointegrativa", title: "¿Qué es la terapia holointegrativa?", category: "Terapias", date: "15 ene 2025", excerpt: "Descubre cómo la terapia holointegrativa aborda la salud desde una perspectiva integral del ser humano." },
  { slug: "bienestar-emocional-y-salud-fisica", title: "La conexión entre bienestar emocional y salud física", category: "Bienestar", date: "22 ene 2025", excerpt: "Cómo tus emociones afectan directamente tu salud física y cómo sanar esta conexión." },
  { slug: "medicina-ancestral-yage", title: "Medicina ancestral: el yagé como herramienta de conciencia", category: "Medicina Ancestral", date: "1 feb 2025", excerpt: "Explorando el uso sagrado del yagé en la medicina ancestral y su potencial transformador." },
  { slug: "como-manejar-el-estres-con-terapias-naturales", title: "Cómo manejar el estrés con terapias naturales", category: "Bienestar", date: "8 feb 2025", excerpt: "Técnicas probadas de terapias naturales para reducir el estrés y recuperar la paz mental." },
  { slug: "herbologia-plantas-medicinales-colombia", title: "Herbología: plantas medicinales de Colombia", category: "Herbología", date: "15 feb 2025", excerpt: "Las plantas medicinales más poderosas de la sabiduría colombiana y andina para tu salud." },
  { slug: "terapias-energeticas-para-ansiedad", title: "Terapias energéticas para la ansiedad", category: "Terapias Energéticas", date: "22 feb 2025", excerpt: "Cómo las terapias energéticas pueden ayudarte a liberar la ansiedad del cuerpo." },
  { slug: "masaje-holistico-beneficios", title: "Masaje holístico: beneficios físicos y emocionales", category: "Masaje", date: "1 mar 2025", excerpt: "Explora los múltiples beneficios del masaje holístico para tu bienestar integral." },
  { slug: "procesos-de-conciencia-transformacion", title: "Procesos de conciencia y transformación personal", category: "Transformación", date: "8 mar 2025", excerpt: "Cómo iniciar un proceso de autoconocimiento y transformación profunda." },
  { slug: "diferencia-terapia-holistica-medicina-convencional", title: "Diferencia entre terapia holística y medicina convencional", category: "Educación", date: "15 mar 2025", excerpt: "Una visión integral sobre cómo la terapia holística y la medicina convencional se complementan." },
  { slug: "migranas-terapias-alternativas", title: "Migrañas: enfoque holistico y terapias alternativas", category: "Casos", date: "22 mar 2025", excerpt: "Cómo abordamos las migrañas desde la terapia holointegrativa de raíz." },
  { slug: "rituales-de-bienestar-cotidiano", title: "Rituales de bienestar para el día a día", category: "Práctica", date: "29 mar 2025", excerpt: "Rituales simples pero poderosos que puedes incorporar en tu vida diaria." },
  { slug: "diabetes-y-bienestar-integral", title: "Diabetes y el enfoque integral del bienestar", category: "Casos", date: "5 abr 2025", excerpt: "Cómo la terapia integral puede complementar el tratamiento de la diabetes." },
  { slug: "trastornos-digestivos-enfoque-holistico", title: "Trastornos digestivos: enfoque holístico", category: "Casos", date: "12 abr 2025", excerpt: "La conexión entre emociones, estrés y problemas digestivos, y cómo sanarlos." },
  { slug: "ceremonia-yage-preparacion-integracion", title: "Ceremonia de yagé: preparación e integración", category: "Ceremonias", date: "19 abr 2025", excerpt: "Guía completa sobre cómo prepararse para una ceremonia de yagé e integrar la experiencia." },
  { slug: "ingenieria-y-terapia-vision-holistica", title: "Ingeniería y terapia: una visión holística", category: "Reflexión", date: "26 abr 2025", excerpt: "Cómo mi formación en ingeniería informó mi comprensión de la terapia holointegrativa." },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", paddingTop: 120 }}>
        <section style={{ padding: "5rem 4rem 7rem" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            Contenido
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,5vw,5rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem" }}>
            Blog: Bienestar <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>integral</em>
          </h1>
          <p style={{ color: "var(--color-text2)", maxWidth: 700, lineHeight: 1.9, marginBottom: "5rem", fontSize: "1.05rem" }}>
            Artículos, reflexiones y guías sobre terapia holointegrativa, medicina ancestral, bienestar emocional y transformación personal.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <article style={{ padding: "2.5rem", border: "1px solid var(--color-border)", background: "var(--color-bg2)", display: "flex", flexDirection: "column", height: "100%", transition: "all 0.3s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)"; (e.currentTarget as HTMLElement).style.background = "var(--color-bg3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.background = "var(--color-bg2)"; }}
                >
                  <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1rem" }}>{post.category}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 300, lineHeight: 1.3, marginBottom: "1rem", flex: 1 }}>{post.title}</h3>
                  <p style={{ color: "var(--color-text3)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{post.excerpt}</p>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text3)", letterSpacing: "0.08em" }}>{post.date}</div>
                </article>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
