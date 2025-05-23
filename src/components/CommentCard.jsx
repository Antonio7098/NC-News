import { ThumbsUp } from 'lucide-react';

export default function CommentCard({ comment: { body, votes, author, created_at } }) {

  const formattedDate = new Date(created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (

    <div className="bg-white border border-slate-200 rounded-xl shadow-md p-4 flex flex-col gap-3">
      

      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
        <p className="font-bold text-slate-800">{author}</p>
        <p className="text-xs text-slate-500">{formattedDate}</p>
      </div>

      <p className="text-slate-700 leading-relaxed">
        {body}
      </p>

      <div className="flex justify-end items-center mt-2">
        <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
          <ThumbsUp className="w-4 h-4 text-slate-400" />
          <span>{votes}</span>
        </div>
      </div>
    </div>
  );
}