import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
    const router = useRouter()
    const pathParts = router.pathname.split('/').filter(Boolean)

    const pageTitle = pathParts.length > 0
        ? decodeURIComponent(pathParts[pathParts.length - 1]).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        : 'Home'

    const breadcrumbs = pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/')
        const name = decodeURIComponent(part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))

        return (
            <React.Fragment key={href}>
                <span className={s.separator}>/</span>
                <Link href={href} className={s.link}>
                    {name}
                </Link>
            </React.Fragment>
        )
    })

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
