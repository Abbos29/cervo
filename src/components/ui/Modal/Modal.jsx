import React, { useEffect } from 'react';
import s from './Modal.module.scss';
import Button from '../Button/Button';
import { useModalStore } from '@/stores/useModalStore';
import { useTranslation } from 'react-i18next';
import { useIsClient } from 'usehooks-ts';

const Modal = () => {
    const { isOpen, closeModal } = useModalStore();
    const { t } = useTranslation();
    const isClient = useIsClient()

    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        closeModal();
    };

    return (
        <div className={s.overlay} onClick={handleOverlayClick}>
            {isClient && <div className={s.modal}>
                <button className={s.closeBtn} onClick={closeModal} type="button">×</button>

                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.top}>
                        <h2 className={s.title}>{t('modal.title')}</h2>
                        <img src="/img/logo.png" alt="logo" />
                    </div>

                    <div className={s.row}>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.lastName')}<span>*</span></label>
                            <input type="text" placeholder={t('modal.placeholders.lastName')} required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.firstName')}<span>*</span></label>
                            <input type="text" placeholder={t('modal.placeholders.firstName')} required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.middleName')}<span>*</span></label>
                            <input type="text" placeholder={t('modal.placeholders.middleName')} required />
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.city')}<span>*</span></label>
                            <input type="text" placeholder={t('modal.placeholders.city')} required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.state')}<span>*</span></label>
                            <input type="text" placeholder={t('modal.placeholders.state')} required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.address')}<span>*</span></label>
                            <input type="text" placeholder={t('modal.placeholders.address')} required />
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.company')}<span>*</span></label>
                            <input type="text" placeholder={t('modal.placeholders.company')} required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.phone')}<span>*</span></label>
                            <input type="tel" placeholder={t('modal.placeholders.phone')} required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>{t('modal.labels.email')}</label>
                            <input type="email" placeholder={t('modal.placeholders.email')} />
                        </div>
                    </div>

                    <div className={s.inputGroup}>
                        <label>{t('modal.labels.comments')}</label>
                        <textarea placeholder={t('modal.placeholders.comments')} rows={4}></textarea>
                    </div>

                    <div className={s.actions}>
                        <Button apply type="submit">{t('modal.submit')}</Button>
                    </div>
                </form>
            </div>}
        </div>
    );
};

export default Modal;
