import axios from 'axios'

class WpApi {
    constructor (siteurl) {
        this.apiBase = `${siteurl}/wp/wp-json`
    }

    posts (page) {
        if(!page) page = 1
        return axios.get(`${this.apiBase}/wp/v2/posts`, {
            params: {
                page: page,
                per_page: 5
            }
        })
            .then(json => {
                return {
                    posts: json.data,
                    totalPages: json.headers['x-wp-totalpages'],
                    pageNum: page
                }
            })
            .catch(e => {
                return { error: e }
            })
    }
    post (id) {
        return axios.get(`${this.apiBase}/wp/v2/posts/${id}`, {
        })
            .then(json => {
                return { post: json.data }
            })
            .catch(e => {
                return { error: e }
            })
    }
    slug (slug) {
        return axios.get(`${this.apiBase}/wp/v2/posts?slug=${slug}`, {
        })
            .then(json => {
                return { post: json.data[0] }
            })
            .catch(e => {
                return { error: e }
            })
    }
}

const wp = new WpApi('http://avetisdn.ru/')

export default wp