import { create } from 'zustand'

export const useModalStore = create((set) => ({
    // Состояние модалки
    isOpen: false,
    modalType: null,
    modalData: null,

    // Действия
    openModal: (type = 'application', data = null) => set({
        isOpen: true,
        modalType: type,
        modalData: data
    }),

    closeModal: () => set({
        isOpen: false,
        modalType: null,
        modalData: null
    }),

    // Специфичная функция для открытия модалки заявки
    openApplicationModal: () => set({
        isOpen: true,
        modalType: 'application'
    }),
}))