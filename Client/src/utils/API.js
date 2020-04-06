import axios from 'axios';

export default {

    getMeetings: ()=> axios.get('/meetings/all'),
    login: (params)=> axios.post('/auth/login', params),
    signUp: (params)=> axios.post('/auth/signup', params)
}