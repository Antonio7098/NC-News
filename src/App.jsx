import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Article, Search, Topic } from './pages';
import { Menu } from './components';
import { getArticles } from './routes';
import articleList from './articles';

function App() {
  const [user, setUser] = useState("")
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(true)
  const [topics, setTopics] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(()=> {
    setArticles(articleList)
  }, [])


  return (
    <BrowserRouter>

      <div className = "flex flex-col w-full h-screen gap-y-5" >

        <Menu/>

        <div >
        <Routes>

          <Route path="/home" element={< Homepage articles={articles}/>}></Route>

          <Route path="/articles/:article_id" element={< Article />}></Route>

          <Route path="/search" element={< Search />}></Route>

          <Route path="/topic/:topic_id" element={< Topic />}></Route>
          
        </Routes>
        </div>

      </div>

    </BrowserRouter>
  )
}

export default App
