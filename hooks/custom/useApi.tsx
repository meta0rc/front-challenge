import axios from 'axios'

const api = axios.create({
    baseURL : 'https://front.evob.dev.marcomapa.com/front_challenge/'
})

export const useApi = () => ({

    login: async (values: FormData) => {
        const response = await api.post('/login/', values)
        if(response) return response 
    },

    register: () => {},
    
    getContentFromLoginPage: async () => {
        const response = await api.get('/info/')
        if(response.data) return response.data
    },

    getArtist: async() => {
        const _secondEndPoint = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/users/'
        })
        const response = await _secondEndPoint.get('/')
        
        if(response.data) return response.data
    }

})