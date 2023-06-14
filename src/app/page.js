import Image from 'next/image'
import Header from './components/header/Header'
import HeaderCategory from './components/header/HeaderCategory'
import styles from './page.module.css'

export default function Home({children}) {
  return (
    <main>
      <Header/>
      <HeaderCategory/>
      {children}
    </main>
  )
}
