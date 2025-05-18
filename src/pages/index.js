import Header from '@/components/layout/Header/Header'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeadSeo title={"Главная страница"} description={"Описание"} />
      <Header />
    </>
  )
}

export default Home