import axios from 'axios'

const baseURL = process.env['NEXT_PUBLIC_GITHUB_API'];

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    }
});

export default api;