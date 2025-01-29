import { Layout } from "@/ui/template/Homelayout"
import { Hero } from "@/ui/organisms/home/hero"
import { Features } from "@/ui/organisms/home/features"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  )
}

