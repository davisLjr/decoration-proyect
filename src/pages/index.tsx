import { Inter } from '@next/font/google'
import { PageTemplate } from '@/components/layout/Template/TemplatePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageTemplate>
      <h1>hola</h1>
    </PageTemplate>
  )
}
