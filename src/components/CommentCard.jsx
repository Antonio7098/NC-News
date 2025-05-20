import { ThumbsUp, MessageCircle } from 'lucide-react';

export default function CommentCard( {comment: {comment_id, article_id, body, votes, author, created_at}} ) {
    return (
    <div className="border rounded-md flex flex-col overflow-hidden shadow-md">

            {/* Title */}
            <div className="bg-black text-white text-sm font-semibold px-2 py-1">
                <h1>{author}</h1>
            </div>

            {/* Contents */}
            <p className="flex-grow" > {body} </p>

            <div className="flex flex-grow ">

                {/* Votes */}
                <div className="flex flex-col justify-center items-center flex-grow">
                    <div>
                        < ThumbsUp />
                    </div>
                    <div>
                        {votes}
                    </div>
                </div>

            </div>  
            
        </div>
    )
}