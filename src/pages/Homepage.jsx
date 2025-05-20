import {Header} from "../components" 
import { getArticles } from "../axiosRoutes"
import {ArticlesDisplay} from "../components"

export default function Homepage({articles}) {

    return (
        <div className="border flex h-screen m-auto flex-col items-center">
            <Header text="Home" />
            <div className="ml-5 mr-5 w-full">< ArticlesDisplay title="All Articles" articles={articles}/></div>
            
        </div>
    )

}