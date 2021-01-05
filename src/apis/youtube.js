import axios from 'axios'

const KEY='AIzaSyBmg4_1QQRBWXpmR_osG5rKbZR0KqYMkeo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBmg4_1QQRBWXpmR_osG5rKbZR0KqYMkeo',
    params:{
        part:'snippet',
        maxResults:'5',
        //key:KEY,
        //type:'video'
    }
})