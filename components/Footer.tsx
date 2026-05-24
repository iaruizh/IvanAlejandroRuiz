import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)", padding: "4rem 4rem 2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "4rem", paddingBottom: "3rem", borderBottom: "1px solid var(--color-border)", marginBottom: "2rem" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 300, color: "var(--color-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Iván Ruiz</div>
          <p style={{ color: "var(--color-text3)", fontSize: "0.85rem", lineHeight: 1.8, marginTop: "1rem", maxWidth: 280 }}>
            Terapeuta holointegrativo, ingeniero mecatrónico y fundador de ZANATTE Centro Holointegrativo en Bogotá, Colombia.
          </p>
        </div>
        {[
          { title: "Páginas", links: [{ href: "/sobre-mi", label: "Sobre mí" }, { href: "/blog", label: "Blog" }, { href: "/prensa", label: "Prensa" }, { href: "/conferencias", label: "Conferencias" }] },
          { title: "Terapias", links: [{ href: "/#terapias", label: "Masaje holístico" }, { href: "/#terapias", label: "Trabajo energético" }, { href: "/#terapias", label: "Herbología" }, { href: "/#terapias", label: "Ceremonias" }] },
          { title: "Redes", links: [{ href: "https://instagram.com/IvanAleRuizH", label: "Instagram" }, { href: "https://tiktok.com/@IvanAleRuizH", label: "TikTok" }, { href: "https://zanatte.com.co", label: "ZANATTE" }] },
        ].map((col) => (
          <div key={col.title}>
            <h4 style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1.5rem" }}>{col.title}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {col.links.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.8rem" }}>
                  <Link href={link.href} style={{ color: "var(--color-text3)", textDecoration: "none", fontSize: "0.88rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text3)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ color: "var(--color-text3)", fontSize: "0.8rem" }}>© 2025 Iván Alejandro Ruiz Hernández · ivanruiz.com</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["@IvanAleRuizH", "zanatte.com.co"].map((s) => (
            <span key={s} style={{ color: "var(--color-text3)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
