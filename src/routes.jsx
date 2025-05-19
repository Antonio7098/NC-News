import axios from "axios"

const ncNewsApi = axios.create({
    BaseURL: "https://nc-news-q3ya.onrender.com/api"
})

export function getArticles() {
    ncNewsApi.get("/articles").then((articles)=> console.log(articles.data))
}