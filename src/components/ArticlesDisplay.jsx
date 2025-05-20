import {ArticleCard} from "./"

export default function ArticlesDisplay({title, articles}) {
    return (
        <div className=" rounded-md w-full border flex gap-2 flex-col overflow-hidden shadow-md">

            {/* Title */}
            {articles ? <div className="bg-black text-white text-sm font-semibold px-2 py-1">
                <h1>{title}</h1>
            </div> : null}

            <div className="grid flex-col gap-4 w-full overflow-hidden">

                {articles.map((article) => <ArticleCard key={article.article_id} article={article}/>)}

            </div>  
            
        </div>
    )
}