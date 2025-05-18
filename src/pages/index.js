import Header from '@/components/layout/Header/Header'
import Hero from '@/components/layout/Hero/Hero'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeadSeo title={"Главная страница"} description={"Описание"} />
      <Hero />
    </>
  )
}

export default Home