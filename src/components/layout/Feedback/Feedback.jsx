import React from 'react'
import s from './Feedback.module.scss'
import Container from '@/components/ui/Container/Container'
import Button from '@/components/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

const Feedback = () => {
    const { t } = useTranslation()
    const isClient = useIsClient()
    return (
        <section className={s.feedback}>
            {isClient && <Container>
                <div className={s.wrapper}>
                    <p>
                        {t("feedback.title1")} <span>{t("feedback.title2")}</span> — {t("feedback.title3")}
                    </p>

                    <form className={s.form} action="">
                        <div>
                            <input type="text" placeholder={t("feedback.placeholder")} />

                            <Button>{t("btn.send")}</Button>
                        </div>

                        <label className={s.checkboxLabel}>
                            <input type="checkbox" />
                            <span>
                                {t("feedback.accept")} <a href="/terms" target="_blank" rel="noopener noreferrer">{t("feedback.link")}</a> {t("feedback.accept1")}
                            </span>
                        </label>

                    </form>
                </div>
            </Container>}
        </section>
    )
}

export default Feedback
