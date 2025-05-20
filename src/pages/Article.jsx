import { Header, CommentCard, CommentForm} from "../components" 
import { useParams } from "react-router-dom";
import { getArticle, getComments, vote } from "../axiosRoutes";
import { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle } from 'lucide-react';

export default function Article({username}) {
    const articleId = useParams().article_id
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState(false)

    useEffect(()=> {
        getArticle(articleId, setArticle)
        getComments(articleId, setComments)

    }, [])

    console.log(article)

    function handleVote() {
        setArticle(oldArticle => ({ ...oldArticle, votes: oldArticle.votes + 1 }))
        return vote(articleId, setArticle).catch(() => setArticle(oldArticle => ({ ...oldArticle, votes: oldArticle.votes - 1 })))
    }

    function addComment() {
        setNewComment(true)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5 border" >

            < Header text={article.title} />

            <div className="flex w-full border flex-grow">

                {/* Votes */}
                <div role="button"  tabIndex="0" onClick={handleVote} className="flex flex-col justify-center border items-center flex-grow">
                    <div>
                        < ThumbsUp />
                    </div>
                    <div>
                        {article.votes}
                    </div>
                </div>

                {/* Comments */}
                <div className="flex flex-col justify-center items-center border flex-grow">
                    <div>
                        < MessageCircle />
                    </div>
                    <div>
                        {article.comment_count}
                    </div>
                </div>

            </div> 

            < img src={article.article_img_url} />
            
            <p>{article.body}</p>

            <div className="flex flex-row w-full border justify-between" >
                <p className="text-[1.5rem]">Comments</p>
                <button onClick={addComment} > Add comment </button>
            </div>
            
                {
                    newComment 
                ?
                    <CommentForm articleId={articleId} username={username} />
                :
                    null
                }


            {comments.map((comment) => < CommentCard comment={comment}/>)}
        </div>
    )
}