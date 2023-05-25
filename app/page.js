
import { ItemsMarquee } from './components/home/itemsMarquee'
import { PrincipalProducts } from './components/home/principalProducts'

export default function Home() {
  return (
    <main className="flex   min-h-screen flex-col items-center justify-between ">
      
      <PrincipalProducts />

      <ItemsMarquee />

    </main>
  )
}
