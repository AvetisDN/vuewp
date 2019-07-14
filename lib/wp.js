import axios from 'axios'

class WpApi {
    constructor (siteurl) {
        this.apiBase = `${siteurl}/wp-json`
    }

    posts () {
        return axios.get(`${this.apiBase}/wp/v2/posts`, {
            params: {
                page: 1,
                per_page: 5
            }
        })
            .then(json => {
                return { posts: json.data }
            })
            .catch(e => {
                return { error: e }
            })
    }
}

const wp = new WpApi('http://localhost/wp-api')

export default wp