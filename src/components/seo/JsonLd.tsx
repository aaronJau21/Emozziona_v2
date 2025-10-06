import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schema para la organización
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Emozziona',
    url: 'https://emozziona.com',
    logo: 'https://emozziona.com/emozziona-logo.jpg',
    description: 'Transformamos regalos corporativos en experiencias memorables. Diseño personalizado, packaging premium y atención al detalle.',
    founder: {
      '@type': 'Person',
      name: 'Justina Martínez',
    },
    foundingDate: '2023',
    sameAs: [
      // Agrega aquí tus redes sociales cuando las tengas
      // 'https://www.facebook.com/emozziona',
      // 'https://www.instagram.com/emozziona',
      // 'https://www.linkedin.com/company/emozziona',
    ],
  };

  return <JsonLd data={schema} />;
}

// Schema para productos/servicios
export function ProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Regalos Corporativos Personalizados',
    description: 'Regalos corporativos personalizados con diseño intencional, packaging premium y atención al detalle.',
    brand: {
      '@type': 'Brand',
      name: 'Emozziona',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'PEN',
    },
  };

  return <JsonLd data={schema} />;
}

// Schema para la página de historia
export function AboutPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Historia de Emozziona',
    description: 'Conoce la historia de Emozziona y cómo Justina Martínez transformó la industria de regalos corporativos.',
    url: 'https://emozziona.com/history',
    mainEntity: {
      '@type': 'Organization',
      name: 'Emozziona',
      founder: {
        '@type': 'Person',
        name: 'Justina Martínez',
      },
    },
  };

  return <JsonLd data={schema} />;
}

// Schema para breadcrumbs
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
}
