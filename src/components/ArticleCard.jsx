import { ThumbsUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article: { title, article_img_url: img, votes, comment_count, article_id } }) {
  return (

    <Link to={`/articles/${article_id}`} className="block w-full group">
      <div className="flex bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden 
                      transition-all duration-300 ease-in-out
                      hover:shadow-lg hover:-translate-y-1">
        
        {/* Left side: Image Area */}
        <div className="w-32 flex-shrink-0">
          <img 
            className="w-full h-full object-cover" 
            src={img}
            alt={`Cover image for ${title}`}
          />
        </div>

        {/* Right side: Content Area */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className="font-bold text-lg text-slate-800 line-clamp-2 leading-tight
                         transition-colors group-hover:text-indigo-600">
            {title}
          </h2>

          <div className="flex items-center gap-x-5 text-sm text-slate-500 mt-auto pt-2">
            <div className="flex items-center gap-1.5">
              <ThumbsUp className="w-4 h-4 text-slate-400" />
              <span className="font-medium">{votes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-slate-400" />
              <span className="font-medium">{comment_count}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}