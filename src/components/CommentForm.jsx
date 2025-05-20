import React, { useState } from 'react';
import { postComment } from '../axiosRoutes';

export default function CommentForm({ articleId, username }) {
  const [commentBody, setCommentBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentBody.trim()) {
      return;
    }

    const newComment = {
      article_id: articleId,
      body: commentBody,
      author: username
    };

    postComment(newComment)

    setCommentBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>

        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Comment
        </label>
        <textarea
          id="comment"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          rows={4}
          className="w-full "
          placeholder="Enter your comment"
        />

      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-4 py-2 border"
      >
        Submit Comment
      </button>

    </form>
  );
};