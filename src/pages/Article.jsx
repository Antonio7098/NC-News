import { Header, CommentCard, CommentForm } from "../components";
import { useParams } from "react-router-dom";
import { getArticle, getComments, vote } from "../axiosRoutes";
import { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, Calendar, User } from 'lucide-react';

export default function Article({ username }) {
  const { article_id: articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log(articleId)

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      getArticle(articleId),
      getComments(articleId)
    ])
    .then(([articleResponse, commentsResponse]) => {
      setArticle(articleResponse);
      setComments(commentsResponse);
      setIsLoading(false);
    })
    .catch(error => {
      setIsLoading(false);
    });
  }, [articleId]);


  const handleVote = () => {
    setArticle(oldArticle => ({ ...oldArticle, votes: oldArticle.votes + 1 }));
    vote(articleId, 1).catch(() => {
      setArticle(oldArticle => ({ ...oldArticle, votes: oldArticle.votes - 1 }))
    });
  };

  if (isLoading) {
    return <p className="text-center mt-12">Loading article...</p>;
  }

  if (!article) {
    return <p className="text-center mt-12">Article not found.</p>;
  }
  
  const formattedDate = new Date(article.created_at).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (

    <main className="max-w-4xl mx-auto p-4">

      <article>
        <Header text={article.title} />

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 mb-6">
          <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</div>
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {formattedDate}</div>
          <div role="button" tabIndex="0" onClick={handleVote} className="flex items-center gap-1.5 cursor-pointer hover:text-slate-800 transition-colors"><ThumbsUp className="w-4 h-4" /> {article.votes} votes</div>
          <div className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> {article.comment_count} comments</div>
        </div>

        <img src={article.article_img_url} alt={article.title} className="w-full rounded-lg shadow-lg mb-6" />
        
        <p className="text-lg text-slate-800 leading-relaxed">
          {article.body}
        </p>
      </article>

      <section className="w-full mt-16">

      <div className="border-b-2 border-slate-200 mb-8 flex justify-between items-end">
  
        <div className="inline-block bg-white pr-4 relative bottom-[-2px] flex items-center gap-3">
          
          <MessageCircle className="h-7 w-7 text-red-600" />
          
          <h2 className="font-bold text-3xl text-slate-900">
            Comments
          </h2>
      </div>

  <button 
    onClick={() => setShowCommentForm(!showCommentForm)} 
    className={`font-semibold px-4 py-2 rounded-lg border transition-colors relative bottom-2
                ${showCommentForm 
                  ? 'bg-slate-200 text-slate-800 border-slate-400' 
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
  >
        {showCommentForm ? 'Cancel' : 'Add Comment'}
      </button>
    </div>

        {showCommentForm && (
          <div className="mb-8">
            <CommentForm articleId={articleId} username={username} setComments={setComments} setShowCommentForm={setShowCommentForm}/>
          </div>
        )}


        <div className="flex flex-col gap-5">
          {comments.length > 0 ? (
            comments.map((comment) => <CommentCard key={comment.comment_id} comment={comment} />)
          ) : (
            <p className="text-center text-slate-500 py-8">Be the first to leave a comment.</p>
          )}
        </div>
      </section>
    </main>
  );
}