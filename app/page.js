import Image from 'next/image'
import { ItemsMarquee } from './components/home/itemsMarquee'

export default function Home() {
  return (
    <main className="flex   min-h-screen flex-col items-center justify-between ">
      <div className='w-full h-screen flex flex-row '>
        {/** 3 cuadros , uno grande 2 mediano */}
        <div className='bg-blue-600 h-full w-2/3 flex items-center justify-center'>
          grande
        </div>
        <div className='flex flex-col h-full  w-1/3'>
          <div className='bg-red-600 h-1/2 w-full flex items-center justify-center'>
            mediano
          </div>
          <div className='bg-yellow-600 h-1/2 w-full flex items-center justify-center '>
            mediano
          </div>
        </div>
      </div>

      <ItemsMarquee />

    </main>
  )
}
