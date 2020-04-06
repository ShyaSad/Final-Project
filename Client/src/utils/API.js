import axios from 'axios';

export default {

    getMeetings: ()=> axios.get('/meetings/allmeetings'),
    createMeeting: () => axios.post('/meeting/create', params),
    getDailyReflections: () => axios.get('/daily/inspirations'),
    login: (params)=> axios.post('/auth/login', params),
    signUp: (params)=> axios.post('/auth/signup', params)

}