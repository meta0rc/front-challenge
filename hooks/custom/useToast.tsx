import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const customUseToast = () => ({
    success: (msg?: string, close?: number) => toast.success(msg ? msg : 'Login efetuado, estamos te redirecionando', {
        position: "top-right",
        autoClose: close ? close : 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }),

    error: (msg?: string) => toast.error('Erro! Email ou senha inválidos', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }),
    loading: (msg?: string) => toast.loading("Please wait...")
})