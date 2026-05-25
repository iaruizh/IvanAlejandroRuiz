import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const blogArticles: Record<string, { title: string; date: string; category: string; content: string }> = {
  "que-es-la-terapia-holointegrativa": {
    title: "¿Qué es la terapia holointegrativa?",
    date: "15 ene 2025",
    category: "Terapias",
    content: "La terapia holointegrativa es un enfoque que considera al ser humano como un sistema integrado donde cuerpo, mente, emociones y energía están interconectados. A diferencia de otros enfoques que tratan síntomas aislados, la terapia holointegrativa busca encontrar la raíz del desequilibrio y trabajar desde allí.",
  },
  "bienestar-emocional-y-salud-fisica": {
    title: "La conexión entre bienestar emocional y salud física",
    date: "22 ene 2025",
    category: "Bienestar",
    content: "La ciencia moderna confirma lo que las tradiciones ancestrales siempre han sabido: nuestras emociones tienen un impacto directo en la salud física. El estrés crónico, la ansiedad y la depresión generan cambios en el cuerpo que pueden manifestarse como dolores, enfermedades y desequilibrios.",
  },
  "medicina-ancestral-yage": {
    title: "Medicina ancestral: el yagé como herramienta de conciencia",
    date: "1 feb 2025",
    category: "Medicina Ancestral",
    content: "El yagé es una de las plantas maestras de la sabiduría ancestral andina. Utilizada por siglos en ceremonias sagradas, el yagé ofrece una oportunidad profunda de autoconocimiento y transformación espiritual. Su uso requiere respeto, intención y el acompañamiento de facilitadores experimentados.",
  },
  "como-manejar-el-estres-con-terapias-naturales": {
    title: "Cómo manejar el estrés con terapias naturales",
    date: "8 feb 2025",
    category: "Bienestar",
    content: "El estrés es una respuesta natural del cuerpo, pero cuando es crónico se convierte en un problema. Las terapias naturales como el masaje holístico, la meditación, la herbología medicinal y las terapias energéticas ofrecen herramientas efectivas para manejar el estrés sin los efectos secundarios de los fármacos.",
  },
  "herbologia-plantas-medicinales-colombia": {
    title: "Herbología: plantas medicinales de Colombia",
    date: "15 feb 2025",
    category: "Herbología",
    content: "Colombia es uno de los países más biodiversos del mundo, y su riqueza medicinal es inmensa. Plantas como la guanabana, la moringa, la uña de gato y cientos más ofrecen propiedades terapéuticas poderosas que han sido validadas tanto por la tradición como por la ciencia moderna.",
  },
  "terapias-energeticas-para-ansiedad": {
    title: "Terapias energéticas para la ansiedad",
    date: "22 feb 2025",
    category: "Terapias Energéticas",
    content: "La ansiedad es a menudo una alteración en el flujo energético del cuerpo. Las terapias energéticas como la sanación con chakras, el reiki y el trabajo con el aura pueden ayudar a liberar bloqueos energéticos y restaurar el equilibrio natural del cuerpo.",
  },
  "masaje-holistico-beneficios": {
    title: "Masaje holístico: beneficios físicos y emocionales",
    date: "1 mar 2025",
    category: "Masaje",
    content: "El masaje holístico no es solo relajación. Es un trabajo profundo que activa la capacidad del cuerpo para sanar, libera emociones atrapadas en el cuerpo físico y restaura la conexión mente-cuerpo que muchos hemos perdido en el ritmo de la vida moderna.",
  },
  "procesos-de-conciencia-transformacion": {
    title: "Procesos de conciencia y transformación personal",
    date: "8 mar 2025",
    category: "Transformación",
    content: "La transformación personal no es una meta que se alcanza, sino un proceso continuo de autoconocimiento. Requiere honestidad contigo mismo, disposición al cambio y apoyo de herramientas y facilitadores que te ayuden a ver lo que no puedes ver por ti mismo.",
  },
  "diferencia-terapia-holistica-medicina-convencional": {
    title: "Diferencia entre terapia holística y medicina convencional",
    date: "15 mar 2025",
    category: "Educación",
    content: "No se trata de elegir uno u otro, sino de integrar ambos enfoques. La medicina convencional es excelente para emergencias y diagnósticos. La terapia holística es excelente para prevención y tratamiento de las causas profundas. Juntas, crean un enfoque completo de salud.",
  },
  "migranas-terapias-alternativas": {
    title: "Migrañas: enfoque holistico y terapias alternativas",
    date: "22 mar 2025",
    category: "Casos",
    content: "Las migrañas muchas veces son síntomas de tensiones emocionales no procesadas, desequilibrios energéticos o desconexiones cuerpo-mente. A través de la terapia holointegrativa, podemos identificar y sanar las causas raíz, liberando al cuerpo del dolor recurrente.",
  },
  "rituales-de-bienestar-cotidiano": {
    title: "Rituales de bienestar para el día a día",
    date: "29 mar 2025",
    category: "Práctica",
    content: "Los rituales no tienen que ser complicados. Desde una meditación de 5 minutos por la mañana, hasta beber agua con intención, los rituales cotidianos te reconectan contigo mismo y crean un fundamento de bienestar que sostiene tu día.",
  },
  "diabetes-y-bienestar-integral": {
    title: "Diabetes y el enfoque integral del bienestar",
    date: "5 abr 2025",
    category: "Casos",
    content: "La diabetes es una enfermedad que exige un enfoque multidimensional. Mientras que la medicina convencional maneja los niveles de glucosa, la terapia holística puede abordar el estrés, las emociones y los desequilibrios energéticos que muchas veces están en la raíz del problema.",
  },
  "trastornos-digestivos-enfoque-holistico": {
    title: "Trastornos digestivos: enfoque holístico",
    date: "12 abr 2025",
    category: "Casos",
    content: "El aparato digestivo es nuestro segundo cerebro. Las emociones como la ansiedad, el miedo y la tristeza pueden manifestarse como problemas digestivos. Sanar el gut significa aussi sanar nuestras emociones y nuestro sistema nervioso.",
  },
  "ceremonia-yage-preparacion-integracion": {
    title: "Ceremonia de yagé: preparación e integración",
    date: "19 abr 2025",
    category: "Ceremonias",
    content: "Una ceremonia de yagé es una experiencia profunda que requiere preparación antes y cuidado integral después. La integración post-ceremonia es tan importante como la ceremonia misma, ya que es donde los aprendizajes se solidifican en cambios reales de vida.",
  },
  "ingenieria-y-terapia-vision-holistica": {
    title: "Ingeniería y terapia: una visión holística",
    date: "26 abr 2025",
    category: "Reflexión",
    content: "Mi formación como ingeniero mecatrónico me enseñó a ver sistemas complejos, a analizar causas y efectos, y a buscar soluciones eficientes. Estas habilidades trasladadas a la terapia holointegrativa me permiten ver el cuerpo humano como el sistema extraordinario que es, donde todo está conectado.",
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = blogArticles[params.slug];
  return {
    title: `${article.title} | Iván Alejandro Ruiz`,
    description: article.content.substring(0, 155),
  };
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = blogArticles[params.slug];

  if (!article) {
    return (
      <>
        <Nav />
        <div style={{ padding: "200px 4rem", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>Artículo no encontrado</h1>
        </div>
        <Footer />
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Iván Alejandro Ruiz Hernández",
    },
  };

  return (
    <>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <Nav />
      <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", paddingTop: 120 }}>
        <article style={{ padding: "5rem 4rem 7rem", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-accent)" }} />
            {article.category}
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,4vw,3.5rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "1rem" }}>{article.title}</h1>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginBottom: "4rem", paddingBottom: "2rem", borderBottom: "1px solid var(--color-border)", color: "var(--color-text3)", fontSize: "0.85rem" }}>
            <span>{article.date}</span>
            <span>•</span>
            <span>Iván Alejandro Ruiz Hernández</span>
          </div>
          <div style={{ color: "var(--color-text2)", lineHeight: 1.9, fontSize: "1.05rem" }}>
            <p>{article.content}</p>
            <p style={{ marginTop: "2rem" }}>
              Si deseas explorar estos temas más profundamente o necesitas acompañamiento personalizado, te invito a que nos conectemos. Podemos hablar sobre tu situación y cómo puedo apoyarte en tu camino hacia el bienestar integral.
            </p>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
