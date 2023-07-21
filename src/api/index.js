import axios from 'axios'

export default {
  getMemes() {
    return axios.get('https://api.imgflip.com/get_memes')
  }
}
