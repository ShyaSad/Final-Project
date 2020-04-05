import axios from 'axios';

export default {

    getMeetings: ()=> axios.get('/meetings/all')
}