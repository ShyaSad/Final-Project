import axios from 'axios';

export default {

    getMeetings: ()=> axios.get('/api/meetings/allmeetings'),
    createMeeting: (params) => axios.post('/api/meeting/create', params),
    getDailyReflections: () => axios.get('/api/daily/inspirations'),
    login: (params)=> axios.post('/api/auth/login', params),
    signUp: (params)=> axios.post('/api/auth/signup', params)

}