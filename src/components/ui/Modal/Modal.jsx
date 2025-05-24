import React, { useEffect } from 'react';
import s from './Modal.module.scss';
import Button from '../Button/Button';
import { useModalStore } from '@/stores/useModalStore';

const Modal = () => {
    const { isOpen, closeModal } = useModalStore();

    // Управляем overflow body при открытии/закрытии модалки
    useEffect(() => {
        if (isOpen) {
            // Запоминаем текущее значение overflow
            const originalOverflow = document.body.style.overflow;
            // Блокируем скролл
            document.body.style.overflow = 'hidden';

            // Очищаем при размонтировании или закрытии
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        } else {
            // Если модалка закрыта, возвращаем обычный скролл
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
            <div className={s.modal}>
                <button
                    className={s.closeBtn}
                    onClick={closeModal}
                    type="button"
                >
                    ×
                </button>

                <form className={s.form} onSubmit={handleSubmit}>
                    <div className={s.top}>
                        <h2 className={s.title}>Application</h2>
                        <img src="/img/logo.png" alt="logo" />
                    </div>

                    <div className={s.row}>
                        <div className={s.inputGroup}>
                            <label>Last Name<span>*</span></label>
                            <input type="text" placeholder="Enter last name" required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>First Name<span>*</span></label>
                            <input type="text" placeholder="Enter first name" required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>Middle Name<span>*</span></label>
                            <input type="text" placeholder="Enter middle name" required />
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.inputGroup}>
                            <label>City<span>*</span></label>
                            <input type="text" placeholder="Enter city" required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>State<span>*</span></label>
                            <input type="text" placeholder="Enter state" required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>Address<span>*</span></label>
                            <input type="text" placeholder="Enter address" required />
                        </div>
                    </div>

                    <div className={s.row}>
                        <div className={s.inputGroup}>
                            <label>Company<span>*</span></label>
                            <input type="text" placeholder="Enter company name" required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>Phone Number<span>*</span></label>
                            <input type="tel" placeholder="Enter your phone number" required />
                        </div>
                        <div className={s.inputGroup}>
                            <label>Email Address</label>
                            <input type="email" placeholder="pat@shuffle.dev" />
                        </div>
                    </div>

                    <div className={s.inputGroup}>
                        <label>Comments</label>
                        <textarea placeholder="Lorem ipsum dolor..." rows={4}></textarea>
                    </div>

                    <div className={s.actions}>
                        <Button apply type="submit">Apply</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;