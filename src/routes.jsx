import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-q3ya.onrender.com/api"
})

export function getArticles() {
    ncNewsApi.get("/articles", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then((articles)=> console.log(articles.data)).catch(console.log)
}