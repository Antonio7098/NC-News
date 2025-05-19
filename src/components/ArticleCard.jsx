export default function ArticleCard({article: {title, body, article_img_url: img}}) {
    return (
        <div className="border rounded-md flex flex-col overflow-hidden shadow-md">

            {/* Title */}
            <div className="bg-black text-white text-sm font-semibold px-2 py-1">
                <h1>{title}</h1>
            </div>

            <div className="flex flex-grow ">

                {/* Content */}
                <div className="flex-grow p-2 text-xs overflow-hidden text-ellipsis webkit-line-clamp-3">
                   {body}
                </div>

                {/* Image */}
                <div className="w-24 flex-shrink-0 h-full overflow-hidden">
                    <img 
                        className="w-full h-full object-cover" 
                        src={img}
                    />
                </div>

            </div>  
            
        </div>
    )
}