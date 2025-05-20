import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-q3ya.onrender.com/api"
})

export function getArticles(queries) {
  const params = queries || {};

  return ncNewsApi
    .get("/articles", { params })
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

export function vote(articleId, fn) {
  return ncNewsApi.patch(`/articles/${articleId}`, {inc_votes: 1})
    .then(({data: {article}}) => fn(article))
}

export function postComment({article_id: articleId, author: username, body}) {
  console.log('Posting comment with:', { articleId, username, body });
  return ncNewsApi.post(`articles/${articleId}/comments`, {
    "username": username,
    "body": body
  }).then(({data: {comment}}) => console.log(comment))
}

export function getTopics(fn) {
  if (!fn) {
    fn = (articles) => articles
  }
  ncNewsApi.get("/topics", {})
    .then(({data: {topics}}) => {return fn(topics)})
}