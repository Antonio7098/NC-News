export default function ArticleCard() {
    return (
        <div className="w-60 h-40 border rounded-md flex flex-col overflow-hidden shadow-md">

            {/* Title */}
            <div className="bg-black text-white text-sm font-semibold px-2 py-1">
                <h1>Joe Biden: what we know about prostate cancer diagnosis</h1>
            </div>

            <div className="flex flex-grow overflow-hidden">

                {/* Content */}
                <div className="flex-grow p-2 text-xs overflow-hidden overflow-ellipsis line-clamp-3">
                    Prostate cancer affects tissue of the prostate gland, the part of the male reproductive system that helps make semen. It is located between the penis and the bladder.
                </div>

                {/* Image */}
                <div className="w-24 flex-shrink-0 h-full">
                    <img 
                        className="w-full h-full object-cover" 
                        src="https://images.ctfassets.net/pjshm78m9jt4/4kvsqtvFVqMm1gmaEvVEUf/e8c7900a5a935efdca72a84a1a67055e/AP25138794418315.jpg?fm=avif&fit=fill&w=400&h=225&q=80" 
                        alt="Prostate cancer news" 
                    />
                </div>

            </div>  
            
        </div>
    )
}