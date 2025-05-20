import { Header, ArticlesDisplay} from "../components" 
import { useParams } from "react-router-dom"

export default function Topic({articles}) {
    const topic = useParams().slug
    const topicArticles = articles.filter((article) => article.topic === topic)

    return (
        <div className="flex flex-col items-center">
            <Header text={topic} />
            <ArticlesDisplay title="Top Articles" articles={topicArticles} />
        </div>
    )

}