import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ivanruiz.com";
  const now = new Date();

  const blogSlugs = [
    "que-es-la-terapia-holointegrativa",
    "bienestar-emocional-y-salud-fisica",
    "medicina-ancestral-yage",
    "como-manejar-el-estres-con-terapias-naturales",
    "herbologia-plantas-medicinales-colombia",
    "terapias-energeticas-para-ansiedad",
    "masaje-holistico-beneficios",
    "procesos-de-conciencia-transformacion",
    "diferencia-terapia-holistica-medicina-convencional",
    "migranas-terapias-alternativas",
    "rituales-de-bienestar-cotidiano",
    "diabetes-y-bienestar-integral",
    "trastornos-digestivos-enfoque-holistico",
    "ceremonia-yage-preparacion-integracion",
    "ingenieria-y-terapia-vision-holistica",
  ];

  const pages = [
    { url: base, priority: 1.0 },
    { url: `${base}/sobre-mi`, priority: 0.9 },
    { url: `${base}/conferencias`, priority: 0.8 },
    { url: `${base}/prensa`, priority: 0.7 },
    { url: `${base}/blog`, priority: 0.8 },
    { url: `${base}/en`, priority: 0.9 },
    { url: `${base}/en/about`, priority: 0.8 },
    ...blogSlugs.map((slug) => ({ url: `${base}/blog/${slug}`, priority: 0.7 })),
  ];

  return pages.map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
