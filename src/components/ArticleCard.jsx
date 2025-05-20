import { ThumbsUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleCard({article: {title, body, article_img_url: img, votes, comment_count, article_id}}) {
    return (
        <Link to={`/articles/${article_id}`}>
            <div className="border rounded-md flex flex-col overflow-hidden shadow-md">

                {/* Title */}
                <div className="bg-black text-white text-sm font-semibold px-2 py-1">
                    <h1>{title}</h1>
                </div>

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

                    {/* Comments */}
                    <div className="flex flex-col justify-center items-center flex-grow">
                        <div>
                            < MessageCircle />
                        </div>
                        <div>
                            {comment_count}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-24 flex-shrink-0 h-full overflow-hidden">
                        <img 
                            className="w-full h-full object-cover" 
                            src={img}
                        />
                    </div>

                </div>  
                
            </div>
        </Link>
    )
}