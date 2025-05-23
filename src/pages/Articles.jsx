import { useMemo, useCallback } from 'react';
import useDataFetch from '../hooks/useDataFetch';
import { getArticles } from '../axiosRoutes';
import { Header } from '../components';
import { SearchBar } from '../components';
import { ArticlesDisplay } from '../components';
import { useSearchParams } from 'react-router-dom';

export default function Articles({ topics }) {

  const [searchParams, setSearchParams] = useSearchParams();

  const queryOptions = useMemo(() => ({
    sort_by: searchParams.get('sort_by') || 'created_at',
    order: searchParams.get('order') || 'desc',
    topic: searchParams.get('topic') || undefined,
  }), [searchParams]);

  const fetchArticlesCallback = useCallback(() => {
    return getArticles(queryOptions);
  }, [queryOptions]);

  const { data, loading, error } = useDataFetch(fetchArticlesCallback);

  const articles = data?.data?.articles ?? [];

  const renderContent = () => {
    if (loading) {
      return <p className="mt-4 text-gray-500">Loading articles...</p>;
    }
    if (error) {
      return <p className="mt-4 text-red-500">Error: {error.message}</p>;
    }
    if (articles.length === 0) {
      return <p className="mt-4 text-gray-500">No articles found.</p>;
    }
    return <ArticlesDisplay articles={articles} />;
  };

  return (
    <div className="flex m-auto flex-col items-center w-full max-w-4xl px-4">
      <Header text="Articles" />
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        topics={topics}
      />
      <div className="w-full mt-4">
        {renderContent()}
      </div>
    </div>
  );
}