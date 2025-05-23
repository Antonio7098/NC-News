import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Article, Search, Topic , Articles} from './pages';
import { Menu } from './components';
import { getArticles, getTopics } from './axiosRoutes';

function App() {
  const [user, setUser] = useState("")
  const [topics, setTopics] = useState([])
  const [username, setUsername] = useState("tickle122")

  useEffect(() => {
    getTopics(setTopics)
  }, [])
  
  return (

      <div className = "flex flex-col w-full h-screen gap-y-5" >

        < Menu topics={topics} />

        <div >
        <Routes>

          <Route path="/home" element={< Homepage />}></Route>

          <Route path="/articles/:article_id" element={< Article username={username} />}></Route>

          <Route path="/search" element={< Search />}></Route>

          <Route path="/topics/:slug" element={< Topic />}></Route>

          <Route path="/articles" element={< Articles topics={topics} />}></Route>
          
        </Routes>
        </div>

      </div>
  )
}

export default App
