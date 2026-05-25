import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Iván Alejandro Ruiz | Holistic Therapist",
  description: "Mechanical engineer, certified holistic therapist and founder of ZANATTE Holistic Center in Bogotá. Integral wellness, ancestral medicine and personal transformation.",
};

export default function EnPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
        <section style={{ padding: "160px 4rem 6rem", background: "linear-gradient(135deg, rgba(184,147,90,0.1) 0%, rgba(184,147,90,0.05) 100%)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
              Welcome
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem,6vw,6rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2rem", maxWidth: 900 }}>
              Integral health through <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>consciousness</em> and <em style={{ fontStyle: "italic", color: "var(--color-accent-light)" }}>wisdom</em>
            </h1>
            <p style={{ color: "var(--color-text2)", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.9, marginBottom: "3rem" }}>
              I'm a mechanical engineer, certified holistic therapist and founder of ZANATTE Holistic Center. I work in the integration of body, mind and spirit for your deep transformation.
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <a href="/#contacto" style={{ background: "var(--color-accent)", color: "var(--color-bg)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Schedule Consultation →
              </a>
              <Link href="/" style={{ background: "transparent", border: "1px solid var(--color-accent)", color: "var(--color-accent)", padding: "1rem 2.5rem", textDecoration: "none", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)", transition: "all 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(184,147,90,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                En Español
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
