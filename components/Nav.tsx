"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.5rem 4rem",
      background: scrolled ? "rgba(10,10,8,0.95)" : "linear-gradient(to bottom, rgba(10,10,8,0.9), transparent)",
      backdropFilter: "blur(12px)",
      transition: "background 0.4s",
      borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
    }}>
      <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 300, color: "var(--color-accent)", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
        Iván Ruiz
      </Link>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {[
          { href: "/sobre-mi", label: "Sobre mí" },
          { href: "/#terapias", label: "Terapias" },
          { href: "/#zanatte", label: "Zanatte" },
          { href: "/blog", label: "Blog" },
          { href: "/prensa", label: "Prensa" },
        ].map((item) => (
          <li key={item.href}>
            <Link href={item.href} style={{ color: "var(--color-text2)", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text2)")}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/#contacto" style={{ background: "transparent", border: "1px solid var(--color-accent)", color: "var(--color-accent)", padding: "0.6rem 1.5rem", fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-accent)"; (e.currentTarget as HTMLElement).style.color = "var(--color-bg)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"; }}
      >
        Agendar sesión
      </Link>
    </nav>
  );
}
