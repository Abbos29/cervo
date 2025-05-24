import React from 'react'
import s from './Card.module.scss'
import Link from 'next/link'

const Card = ({ image, name, sizes, id }) => {
    return (
        <Link href={`/product/${id}`} className={s.card}>
            <img src={image} alt={name} />
            <div className={s.card_body}>
                <p>{name}</p>
                <h6>{sizes && sizes?.map((size) => size)}</h6>
            </div>
        </Link>
    )
}

export default Card