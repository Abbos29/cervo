import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useIsClient } from 'usehooks-ts';

const HeadSeo = ({ title, description }) => {
    const { t } = useTranslation()
    const router = useRouter();
    const isClient = useIsClient()
    const siteName = 'Cervo';
    const domain = 'https://cervo.uz';

    // Дефолтные значения, если пропсы не переданы
    const defaultTitle = 'Интернет';
    const defaultDescription = t("seo.desc");

    // Используем переданные значения или дефолтные
    const pageTitle = title || defaultTitle;
    const pageDescription = description || defaultDescription;

    // Формируем полный заголовок сайта
    const fullTitle = `${pageTitle} | ${siteName}`;

    // Формируем канонический URL
    const canonical = `${domain}${router.asPath}`;

    // Динамическая картинка для социальных сетей
    const ogImage = `${domain}/images/og-image.jpg`;

    return (
        <Head>
            {/* Основные мета-теги */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>{fullTitle}</title>
            <meta name="description" content={pageDescription} />
            {isClient && <meta name="keywords" content={t("seo.keyword")} />}

            {/* Канонический URL */}
            <link rel="canonical" href={canonical} />

            {/* Иконки */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            {/* <link rel="manifest" href="/site.webmanifest" /> */}

            {/* Open Graph теги */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="ru_RU" />

            {/* Twitter Card теги */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* Предотвращение индексации на определенных страницах */}
            {router.pathname.includes('/admin') || router.pathname.includes('/checkout') ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}
        </Head>
    );
};

export default HeadSeo;