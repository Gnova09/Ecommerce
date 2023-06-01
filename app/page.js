
import { ItemsMarquee } from './components/home/Marquee'
import { PrincipalProducts } from './components/home/principalProducts'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  ">
      
      <PrincipalProducts />

      <ItemsMarquee />

    </main>
  )
}
