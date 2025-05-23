import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { Link, NavLink } from "react-router-dom";

export default function Menu({ topics }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="relative flex items-center justify-between h-16 px-4 sm:px-6">

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 z-50">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
          
          <Link to="/home" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-extrabold tracking-tight">
              <span className="text-red-600">NC</span>
              <span className="text-slate-900">News</span>
            </h1>
          </Link>

          <div className="w-8"></div>

        </div>
      </header>
      
      <div 
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-xl z-50
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex flex-col gap-y-8">
          
          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-3">Navigation</h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <NavLink to="/home" onClick={() => setIsOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}>
                    Home
                </NavLink>
              </li>
              <li>
                <Link to="/articles" onClick={() => setIsOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}>
                  Search
                </Link>
              </li>
            </ul>
          </div>

          <hr/>

          <div>
            <h3 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-3">Topics</h3>
            <ul className="flex flex-col gap-y-1">
              {topics.map((topic) => (
                <li key={topic.slug}>
                  <Link to={`/topics/${topic.slug}`} onClick={() => setIsOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium capitalize transition-colors ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}>
                    {topic.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}