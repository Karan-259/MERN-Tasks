import { useState } from 'react'

function BlogCard({ blog }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className={`blog-card${blog.featured ? ' blog-card-featured' : ''}`}>
      <div className={`card-art card-art-${blog.tone}`} aria-hidden="true">
        <span className="card-art-label">{blog.category}</span>
        <span className="art-shape art-shape-one" />
        <span className="art-shape art-shape-two" />
        <span className="art-shape art-shape-three" />
        <span className="card-art-mark">✳</span>
        <span className="card-art-caption">THE SUNDAY EDIT</span>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>{blog.date}</span>
          <span className="meta-dot">·</span>
          <span>{blog.readTime}</span>
        </div>
        <h3>{blog.title}</h3>
        <p className="card-excerpt">{blog.excerpt}</p>
        {isExpanded && <p className="card-body">{blog.body}</p>}
        <div className="card-footer">
          <div className="author">
            <span className="avatar" aria-hidden="true">{blog.initials}</span>
            <span>{blog.author}</span>
          </div>
          <button
            className="read-link"
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            {isExpanded ? 'Close story' : 'Read story'}
            <span aria-hidden="true">{isExpanded ? '↗' : '→'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
