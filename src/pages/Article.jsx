import { Header, CommentCard} from "../components" 
import { useParams } from "react-router-dom";
import { getArticle, getComments } from "../axiosRoutes";
import { useState, useEffect } from 'react'

export default function Article() {
    const articleId = useParams().article_id
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])

    useEffect(()=> {
        getArticle(articleId, setArticle)
        getComments(articleId, setComments)

    }, [])

    return (
        <div className="flex flex-col items-center justicy-center border">
            < Header text={article.title} />
            < img src={article.article_img_url} />
            <p>{article.body}</p>
            {comments.map((comment) => < CommentCard comment={comment}/>)}
        </div>
    )
}