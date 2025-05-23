import { ArticleCard } from "./";

export default function ArticlesDisplay({ title, articles }) {
  if (!articles || articles.length === 0) {
    return <p className="text-center text-slate-500 mt-8">No articles to display.</p>;
  }

  return (
    <section className="w-full">

      {title && (
        <div className="border-b  w-11/12 mx-auto border-slate-300 mb-4">
            <h1 className="text-3xl text-slate-900">
              {title}
            </h1>
        </div>
      )}

      {/* --- 2. The Card Container --- */}
      <div className="flex flex-col gap-5 w-11/12 mx-auto">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>

    </section>
  );
}