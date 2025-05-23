import {Header} from "../components" 
import { getArticles } from "../axiosRoutes"
import {ArticlesDisplay} from "../components"
import { useCallback } from "react"
import useDataFetch from "../hooks/useDataFetch"

export default function Homepage() {

    const fetchHomepageArticles = useCallback(() => getArticles(), [])

    const {data, loading, error} = useDataFetch(fetchHomepageArticles)
    const articles = data?.data?.articles ?? []

    if (loading) return <p>Loading latest articles...</p>
    if (error) return <p>Error loading articles: {error.msg}</p>

    return (
        <div className="flex h-screen m-auto flex-col items-center">
            <Header text="Home" />
            <div className="ml-5 mr-5 w-full">< ArticlesDisplay title="All Articles" articles={articles}/></div>
        </div>
    )

}