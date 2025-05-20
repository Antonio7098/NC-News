import { useState } from 'react';

export default function SearchBar({ handleSearch, setSearchParams, topics }) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortOptions = [
    { value: 'created_at', label: 'Date' },
    { value: 'title', label: 'Title' },
    { value: 'votes', label: 'Votes' },
    { value: 'comment_count', label: 'Comments' }
  ];

  const applyFilters = () => {
    setSearchParams((oldParams) => ({
      ...oldParams,
      topic: selectedTopic || undefined,
      sort_by: sortBy,
      order: sortOrder,
    }));
    handleSearch();
  };

  return (
    <div className="flex flex-col items-center w-full gap-2">
      {/* Search Input */}
      <div className="flex flex-row w-full border ">
        <input
          className="flex-grow p-2 outline-none"
          placeholder="Search articles..."
          onChange={(event) =>
            setSearchParams((oldParams) => ({
              ...oldParams,
              search: event.target.value,
            }))
          }
        />
        <button onClick={applyFilters} className="px-4 border">
          Search
        </button>
      </div>

      {/* Checkbox Filters & Sort Options */}
      <div className="flex flex-row w-full border justify-between p-2 gap-4">
        {/* Filter Topics as Checkboxes */}
        <div className="flex flex-col flex-grow min-w-[150px]">
          <label className="block text-sm font-medium mb-1">Filter by Topic</label>
          {topics.map((topicObj) => {
            const slug = topicObj.slug;

            return (
              <label key={slug} className="inline-flex items-center gap-2 ">
                <input
                  type="checkbox"
                  checked={selectedTopic === slug}
                  onChange={() => {
                    setSelectedTopic(slug);
                    setSearchParams((oldParams) => ({ ...oldParams, topic: slug }));
                  }}
                  className="rounded text-blue-600"
                />
                <span>
                  {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </span>
              </label>
            );
          })}
          <label className="inline-flex items-center gap-2 mt-1 curs">
            <input
              type="checkbox"
              checked={!selectedTopic}
              onChange={() => {
                setSelectedTopic('');
                setSearchParams((oldParams) => {
                  const { topic, ...rest } = oldParams;
                  return rest;
                });
              }}
              className="rounded text-blue-600"
            />
            <span>All Topics</span>
          </label>
        </div>

        {/* Sort By Checkbox Section */}
        <div className="flex flex-col flex-grow min-w-[150px]">
          <label className="block text-sm font-medium mb-1">Sort By</label>

          {/* Sort Column Selection */}
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setSearchParams((oldParams) => ({ ...oldParams, sort_by: e.target.value }));
            }}
            className="p-1 border rounded mb-2"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Sort Order Checkboxes */}
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sortOrder"
              value="asc"
              checked={sortOrder === 'asc'}
              onChange={() => {
                setSortOrder('asc');
                setSearchParams((oldParams) => ({ ...oldParams, order: 'asc' }));
              }}
              className="text-blue-600"
            />
            <span>Ascending</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sortOrder"
              value="desc"
              checked={sortOrder === 'desc'}
              onChange={() => {
                setSortOrder('desc');
                setSearchParams((oldParams) => ({ ...oldParams, order: 'desc' }));
              }}
              className="text-blue-600"
            />
            <span>Descending</span>
          </label>
        </div>
      </div>
    </div>
  );
}