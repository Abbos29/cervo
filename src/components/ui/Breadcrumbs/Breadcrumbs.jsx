import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ lastTitle }) => {
    const router = useRouter()
    const pathParts = router.pathname.split('/').filter(Boolean)

    const breadcrumbs = pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/')
        const isLast = index === pathParts.length - 1

        const name = isLast && lastTitle
            ? lastTitle
            : decodeURIComponent(part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))

        return (
            <React.Fragment key={href}>
                <span className={s.separator}>/</span>
                {isLast && lastTitle ? (
                    <Link href={'#'} className={s.link}>{name}</Link>
                ) : (
                    <Link href={href} className={s.link}>
                        {name}
                    </Link>
                )}
            </React.Fragment>
        )
    })

    const pageTitle = lastTitle || (
        pathParts.length > 0
            ? decodeURIComponent(pathParts[pathParts.length - 1])
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase())
            : 'Home'
    )

    return (
        <nav className={s.breadcrumbs}>
            <h3>{pageTitle}</h3>
            <div>
                <Link href="/" className={s.link}>Home</Link>
                {breadcrumbs}
            </div>
        </nav>
    )
}

export default Breadcrumbs
