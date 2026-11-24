import { useMemo, useState } from 'react'
import BlogCard from './BlogCard.jsx'

function BlogList({ blogs }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All stories')
  const categories = ['All stories', ...new Set(blogs.map((blog) => blog.category))]

  const filteredBlogs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === 'All stories' || blog.category === activeCategory
      const searchableText = `${blog.title} ${blog.excerpt} ${blog.category}`.toLowerCase()

      return matchesCategory && searchableText.includes(normalizedQuery)
    })
  }, [activeCategory, blogs, query])

  return (
    <section className="journal-section" id="journal">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span /> THE JOURNAL</p>
          <h2>Recent <em>stories</em></h2>
          <p className="section-intro">A few thoughts, gathered here for you.</p>
        </div>
        <label className="search-box">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <span className="visually-hidden">Search stories</span>
          <input
            type="search"
            placeholder="Search stories..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd>⌘ K</kbd>
        </label>
      </div>

      <div className="journal-toolbar">
        <div className="category-list" aria-label="Filter stories by category">
          {categories.map((category) => (
            <button
              className={`category-button${activeCategory === category ? ' is-active' : ''}`}
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="story-count">
          {filteredBlogs.length} {filteredBlogs.length === 1 ? 'STORY' : 'STORIES'}
        </span>
      </div>

      {filteredBlogs.length > 0 ? (
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state" role="status">
          <span aria-hidden="true">✳</span>
          <h3>No stories found just yet.</h3>
          <p>Try another search or choose a different category.</p>
          <button
            className="text-button"
            type="button"
            onClick={() => {
              setQuery('')
              setActiveCategory('All stories')
            }}
          >
            Clear filters <span aria-hidden="true">↗</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default BlogList
