import Axios from 'axios'

export const rootUrl = "http://localhost:8000";

export const http = Axios.create({
    baseUrl: rootUrl
})