import { useState, useEffect } from 'react';
import useDataFetch from '../hooks/useDataFetch';
import { getArticles } from '../axiosRoutes';
import { Header } from '../components';
import { SearchBar } from '../components';
import { ArticlesDisplay } from '../components';
import { useNavigate } from 'react-router-dom';

export default function Articles({ topics }) {
  const [searchParams, setSearchParams] = useState({})

  const { data, loading, error } = useDataFetch(() => getArticles(searchParams))

  const articles = data?.articles ?? []

  const navigate = useNavigate()

  useEffect(() => {
    const search = new URLSearchParams(searchParams).toString()
    navigate(`?${search}`, { replace: true })
  }, [searchParams])

  if (loading) return (
        <div className="border flex m-auto flex-col items-center">
            <Header text="Articles" />
            <SearchBar handleSearch={() => {}} setSearchParams={setSearchParams} topics={topics} />
            <p>Loading articles...</p>
        </div>
    )
  if (error) return (
        <div className="border flex m-auto flex-col items-center">
            <Header text="Articles" />
            <SearchBar handleSearch={() => {}} setSearchParams={setSearchParams} topics={topics} />
            <p>Error loading articles: {error.message}</p>
        </div>
    )

  return (
    <div className="border flex m-auto flex-col items-center">
      <Header text="Articles" />
      <SearchBar handleSearch={() => {}} setSearchParams={setSearchParams} topics={topics} />
      <div className="ml-5 mr-5 h-screen">
        <ArticlesDisplay articles={articles} />
      </div>
    </div>
  )
}