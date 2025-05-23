import { useState } from 'react';
import { ChevronDown, ChevronsRight } from 'lucide-react';

export default function SearchBar({ searchParams, setSearchParams, topics }) {
  const [openMenu, setOpenMenu] = useState(null);

  const sortOptions = [
    { value: 'created_at', label: 'Date' },
    { value: 'title', label: 'Title' },
    { value: 'votes', label: 'Votes' },
    { value: 'comment_count', label: 'Comments' },
  ];

  const updateQuery = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value.trim() !== '') {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const currentTopic = searchParams.get('topic');
  const currentSortBy = searchParams.get('sort_by') || 'created_at';
  const currentOrder = searchParams.get('order') || 'desc';
  const currentSearchTerm = searchParams.get('search') || '';

  const getButtonClasses = (menuName) => {
    const base = "flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-semibold border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    if (openMenu === menuName) {
      return `${base} bg-slate-200 border-slate-400 text-slate-800 focus:ring-slate-500`;
    }
    return `${base} bg-white border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-indigo-500`;
  };

  return (
    <div className="w-full p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          className="w-full flex-grow p-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search articles..."
          value={currentSearchTerm}
          onChange={(event) => updateQuery('search', event.target.value)}
        />
        <div className="w-full sm:w-auto flex items-center gap-3">
          <button onClick={() => setOpenMenu(openMenu === 'filter' ? null : 'filter')} className={getButtonClasses('filter')}>
            Filter
            <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'filter' ? 'rotate-180' : ''}`} />
          </button>
          <button onClick={() => setOpenMenu(openMenu === 'sort' ? null : 'sort')} className={getButtonClasses('sort')}>
            Sort
            <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'sort' ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {openMenu && (
        <div className="w-full p-4 mt-3 border-t border-slate-200 bg-slate-50 rounded-b-lg shadow-inner">
          {openMenu === 'filter' && (
            <div>
              <h3 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-3">Filter by Topic</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <label className="inline-flex items-center gap-2 cursor-pointer p-2 hover:bg-white rounded-md">
                  <input type="radio" name="topic" checked={!currentTopic} onChange={() => updateQuery('topic', null)} className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                  <span>All Topics</span>
                </label>
                {topics.map((topicObj) => (
                  <label key={topicObj.slug} className="inline-flex items-center gap-2 cursor-pointer p-2 hover:bg-white rounded-md">
                    <input type="radio" name="topic" value={topicObj.slug} checked={currentTopic === topicObj.slug} onChange={(e) => updateQuery('topic', e.target.value)} className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                    <span className="capitalize">{topicObj.slug}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {openMenu === 'sort' && (
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="sort_by_select" className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Sort By</label>
                <select id="sort_by_select" value={currentSortBy} onChange={(e) => updateQuery('sort_by', e.target.value)} className="w-full p-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  {sortOptions.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Order</label>
                <div className="flex flex-col gap-1">
                  <label className="inline-flex items-center gap-2 cursor-pointer p-2 hover:bg-white rounded-md">
                    <input type="radio" name="sortOrder" value="asc" checked={currentOrder === 'asc'} onChange={(e) => updateQuery('order', e.target.value)} className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                    <span>Ascending</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer p-2 hover:bg-white rounded-md">
                    <input type="radio" name="sortOrder" value="desc" checked={currentOrder === 'desc'} onChange={(e) => updateQuery('order', e.target.value)} className="form-radio h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                    <span>Descending</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}