import {Header} from "../components" 
import { getArticles } from "../routes"
import {ArticleCard} from "../components"

export default function Homepage() {

    return (
        <div>
            <Header text="Home" />
            <p> {getArticles()} </p>
            < ArticleCard />
        </div>
    )

}