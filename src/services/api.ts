import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-receitas-sabores-compartilhados.onrender.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
      },
})