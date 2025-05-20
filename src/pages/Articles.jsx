import {Header} from "../components" 
import { getArticles } from "../axiosRoutes"
import { ArticlesDisplay, SearchBar} from "../components"
import { useScrollTrigger } from "@mui/material"
import { useEffect, useState } from "react"

export default function Articles({topics, articles}) {
    const [searchParams, setSearchParams] = useState({})
    const [searchResults, setSearchResults] = useState([])

    function handleSearch() {
        getArticles(searchParams, setSearchResults)
    }

    useEffect(() => setSearchResults([...articles]), [])


    return (
        <div className="border flex m-auto flex-col items-center">
            <Header text="Articles" />
            < SearchBar handleSearch={handleSearch} setSearchParams={setSearchParams} topics={topics}/>
            <div className="ml-5 mr-5">< ArticlesDisplay  articles={searchResults}/></div>
            
        </div>
    )

}