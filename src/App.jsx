import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Article, Search, Topic } from './pages';
import { Menu } from './components';


function App() {
  const [user, setUser] = useState("")
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(true)
  const [topics, setTopics] = useState([])


  return (
    <BrowserRouter>

      <div className = "flex flex-col justify-center items-center border w-full h-screen gap-y-5" >

        <Menu/>

        <div className="flex-grow">
        <Routes>

          <Route path="/home" element={< Homepage />}></Route>

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
