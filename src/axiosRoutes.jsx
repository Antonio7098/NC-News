import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-q3ya.onrender.com/api"
})

export function getArticles(fn) {
  if (!fn) {
    fn = (articles) => articles
  }
  ncNewsApi.get("/articles", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(({data: {articles}}) => fn(articles))
}

export function getArticle(articleId, fn) {
  if (!fn) {
    fn = (article) => article
  }
  return ncNewsApi.get(`/articles/${articleId}`).then(({data:{article}})=>fn(article))
}

export function getComments(articleId, fn) {
  if (!fn) {
    fn = (article) => article
  }
  return ncNewsApi.get(`/articles/${articleId}/comments`).then(({data:{comments}})=> fn(comments) )
}