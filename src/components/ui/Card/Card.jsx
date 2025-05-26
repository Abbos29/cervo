import React from 'react'
import s from './Card.module.scss'
import Link from 'next/link'

const Card = ({ image, name, sizes, id }) => {
    return (
        <Link href={`/product/${id}`} className={s.card}>
            <img src={image} alt={name} />
            <div className={s.card_body}>
                <p>{name}</p>
                <span>
                    <h6>R17,</h6>
                    <h6>R18,</h6>
                    <h6>R19,</h6>
                    <h6>R20</h6>
                </span>
            </div>
        </Link>
    )
}

export default Card