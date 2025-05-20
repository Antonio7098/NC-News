import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Article, Search, Topic , Articles} from './pages';
import { Menu } from './components';
import { getArticles, getTopics } from './axiosRoutes';
import articleList from './articles';
import useDataFetch from './hooks/useDataFetch';

function App() {
  const [user, setUser] = useState("")
  const [topics, setTopics] = useState([])
  const [username, setUsername] = useState("tickle122")

  useEffect(() => {
    getTopics(setTopics)
  }, [])

  const {data, loading, error} = useDataFetch(() => getArticles({}))

  if (loading) {
    return (
      <div className = "flex flex-col items-center w-full h-screen gap-y-5" >

        < Menu topics={topics} />
        <p>Loading articles...</p>

      </div>
    )
  }

  if(error) {
    return (
      <div className = "flex flex-col items-center w-full h-screen gap-y-5" >

        < Menu topics={topics} />
        <p>Error loading articles: {error.message}</p>

      </div>
    )
  }

  const articles = data.data.articles
  console.log(articles)
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
