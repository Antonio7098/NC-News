import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Article, Search, Topic , Articles} from './pages';
import { Menu } from './components';
import { getArticles, getTopics } from './axiosRoutes';
import articleList from './articles';

function App() {
  const [user, setUser] = useState("")
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(true)
  const [topics, setTopics] = useState([])
  const [articles, setArticles] = useState([])
  const [username, setUsername] = useState("tickle122")

  useEffect(() => {
    getTopics(setTopics)
  }, [])

  useEffect(()=> {
    getArticles({}, setArticles)
  }, [])

  return (
    <BrowserRouter>

      <div className = "flex flex-col w-full h-screen gap-y-5" >

        < Menu topics={topics} />

        <div >
        <Routes>

          <Route path="/home" element={< Homepage articles={articles}/>}></Route>

          <Route path="/articles/:article_id" element={< Article username={username} />}></Route>

          <Route path="/search" element={< Search />}></Route>

          <Route path="/topic/:slug" element={< Topic articles={articles}/>}></Route>

          <Route path="/articles" element={< Articles articles={articles} topics={topics} />}></Route>
          
        </Routes>
        </div>

      </div>

    </BrowserRouter>
  )
}

export default App
