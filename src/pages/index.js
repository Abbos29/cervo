import Header from '@/components/layout/Header/Header'
import Hero from '@/components/layout/Hero/Hero'
import Numbers from '@/components/layout/Numbers/Numbers'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeadSeo title={"Главная страница"} description={"Описание"} />
      <Hero />
      <Numbers />
    </>
  )
}

export default Home