import { Inter } from '@next/font/google'
import { PageTemplate } from '@/components/layout/Template/TemplatePage'
import { Catalogue } from '@/components/catalogue/Catalogue'

import Hero from '@/components/hero'
import { Categories } from '@/components/categories/Categories'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageTemplate>
      <Hero/>
      <Catalogue/>
      <Categories/>
    </PageTemplate>
  )
}
