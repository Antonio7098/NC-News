import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-q3ya.onrender.com/api"
})

export function getArticles(queries) {
  const params = queries || {};
  console.log(params)

  return ncNewsApi
    .get("/articles", { params })
}

export function getArticle(articleId, fn) {
  if (!fn) {
    fn = (article) => article
  }
  return ncNewsApi.get(`/articles/${articleId}`).then(({data:{article}})=>article)
}

export function getComments(articleId, fn) {
  if (!fn) {
    fn = (article) => article
  }
  return ncNewsApi.get(`/articles/${articleId}/comments`).then(({data:{comments}})=> comments )
}

export function vote(article_id, increment) {
  return ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: increment });
};

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