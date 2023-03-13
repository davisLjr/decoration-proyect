import { Inter } from '@next/font/google'
import { PageTemplate } from '@/components/layout/Template/TemplatePage'
import { Catalogue } from '@/components/catalogue/Catalogue'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageTemplate>
      <Catalogue/>
    </PageTemplate>
  )
}
