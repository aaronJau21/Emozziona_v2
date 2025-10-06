import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Emozziona - Regalos Corporativos Personalizados',
    short_name: 'Emozziona',
    description: 'Transformamos regalos corporativos en experiencias memorables. Diseño personalizado, packaging premium y atención al detalle.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#C2878D',
    icons: [
      {
        src: '/emozziona-logo.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
