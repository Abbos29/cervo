import React from 'react'
import s from './OtherWheels.module.scss'
import Container from '@/components/ui/Container/Container'
import Card from '@/components/ui/Card/Card'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

const OtherWheels = ({ wheels }) => {
  const { t } = useTranslation()
  const isClient = useIsClient()
  return (
    <>
      <Container>
        <div className={s.title}>
          {isClient && <h2>{t("our_wheels")}</h2>}
        </div>
        <div className={s.wrap}>
          {wheels?.map((el) => (
            <>
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
              <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
            </>
          ))}
        </div>
      </Container>
    </>
  )
}

export default OtherWheels