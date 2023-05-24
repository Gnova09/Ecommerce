import Image from 'next/image'
import { ItemsMarquee } from './components/home/itemsMarquee'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      {/** 3 cuadros , uno grande 2 mediano */}
     </div>
     
       <ItemsMarquee />
     

    </main>
  )
}
