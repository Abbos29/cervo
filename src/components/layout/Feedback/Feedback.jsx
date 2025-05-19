import React from 'react'
import s from './Feedback.module.scss'
import Container from '@/components/ui/Container/Container'
import Button from '@/components/ui/Button/Button'

const Feedback = () => {
    return (
        <section className={s.feedback}>
            <Container>
                <div className={s.wrapper}>
                    <p>
                        Leave your <span>feedback or suggestion</span> — we are always here to help!
                    </p>

                    <form className={s.form} action="">
                        <div>
                            <input type="text" placeholder="Feedback or suggestion" />

                            <Button>Send</Button>
                        </div>

                        <label className={s.checkboxLabel}>
                            <input type="checkbox" />
                            <span>
                                I accept <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a> for the use of my data.
                            </span>
                        </label>

                    </form>
                </div>
            </Container>
        </section>
    )
}

export default Feedback
