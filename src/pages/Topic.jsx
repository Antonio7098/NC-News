import { Header, ArticlesDisplay } from "../components";
import { useParams } from "react-router-dom";
import useDataFetch from "../hooks/useDataFetch";
import { useCallback } from "react";
import { getArticles } from "../axiosRoutes";

export default function Topic() {
  const { slug: topic } = useParams();

  const fetchTopicArticles = useCallback(() => {
    return getArticles({ topic: topic });
  }, [topic]);

  const { data, loading, error } = useDataFetch(fetchTopicArticles);
  const topicArticles = data?.data?.articles ?? [];

  if (loading) return <p className="text-center mt-12">Loading articles for {topic}...</p>;
  if (error) return <p className="text-center mt-12 text-red-600">Error loading articles: {error.message}</p>;

  return (
    <div className="flex flex-col items-center">

        <Header text={topic} />

        <ArticlesDisplay articles={topicArticles} />

    </div>
  );
}