import {Header} from "../components" 
import {useState, useEffect, use} from "react"
import {MenuIcon} from "./"
import { getTopics } from "../axiosRoutes"
import { Link } from "react-router-dom"

export default function Menu() {
    const [open, setOpen] = useState(false)
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics(setTopics)
    }, [])

    return (
        <div className="relative flex flex-col w-full">

            <div className="relative flex items-center border w-full h-16">   

                <div className="flex-grow flex justify-start pl-4">
                    <button onClick={() => setOpen(old => !old)}>
                        <MenuIcon />
                    </button>
                </div>

                <Header
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    text="NC News"
                />

                <div className="flex-grow"></div>

            </div>

            {open && (
                <div className="border flex flex-col items-start fixed top-16 left-0 w-2/3 h-screen bg-white shadow-lg z-50">

                    <h1 className="text-[1.3rem] margin-top-5 self-center">Menu</h1>

                    <ul>
                        <Link to="/home" onClick={() => setOpen(false)}>
                            <li>Home</li>
                        </Link>

                    </ul>

                    <div></div>

                    <ul>
                        { topics.map((topic) => <Link to={`/topic/${topic.slug}`} onClick={() => setOpen(false)}> <li>{ topic.slug} </li> </Link> )}
                    </ul>
                </div>
            )}

        </div>
    )
}