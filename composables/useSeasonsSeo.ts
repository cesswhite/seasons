const SITE_URL = 'https://seasons.ecostudios.dev'
const ORGANIZATION_ID = 'https://www.ecostudios.dev/#organization'

const PAGES: Record<string, { title: string; description: string; image: string }> = {
  '/': {
    title: 'Seasons | Nuxt Portfolio Templates',
    description: '4 independent and minimalist templates, built with Nuxt UI & Nuxt 3. Quickly create stunning web portfolios, perfect for freelancers, photographers, artists, musicians, and more.',
    image: '/spring.png',
  },
  ...Object.fromEntries(['spring', 'summer', 'autumn', 'winter'].map((season) => {
    const name = season[0]!.toUpperCase() + season.slice(1)
    return [`/seasons/${season}`, {
      title: `${name} Portfolio Template | Seasons`,
      description: `Preview the ${name} portfolio template, built with Nuxt 3 and Nuxt UI. Part of Seasons by Eco Development Studios.`,
      image: `/${season}.png`,
    }]
  })),
}

export function useSeasonsSeo() {
  const route = useRoute()
  const path = computed(() => route.path.replace(/\/+$/, '') || '/')
  const page = computed(() => PAGES[path.value])
  const canonical = computed(() => `${SITE_URL}${path.value}`)
  const image = computed(() => page.value ? `${SITE_URL}${page.value.image}` : undefined)

  useSeoMeta({
    title: () => page.value?.title,
    description: () => page.value?.description,
    ogTitle: () => page.value?.title,
    ogDescription: () => page.value?.description,
    ogType: 'website',
    ogSiteName: 'Seasons',
    ogUrl: () => page.value ? canonical.value : undefined,
    ogImage: () => image.value,
    twitterCard: 'summary_large_image',
    twitterTitle: () => page.value?.title,
    twitterDescription: () => page.value?.description,
    twitterImage: () => image.value,
    robots: () => page.value ? 'index, follow, max-image-preview:large' : 'noindex, follow',
  })

  useHead(() => ({
    link: page.value ? [{ rel: 'canonical', href: canonical.value }] : [],
    script: page.value ? [{
      key: 'seasons-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Organization', '@id': ORGANIZATION_ID, name: 'Eco Development Studios', url: 'https://www.ecostudios.dev/' },
          { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Seasons', url: `${SITE_URL}/`, inLanguage: 'en', publisher: { '@id': ORGANIZATION_ID } },
          { '@type': 'WebPage', '@id': `${canonical.value}#webpage`, name: page.value.title, url: canonical.value, inLanguage: 'en', isPartOf: { '@id': `${SITE_URL}/#website` } },
        ],
      }),
    }] : [],
  }))
}
