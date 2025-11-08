import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2
        style={{
          fontSize: '42px',
          fontWeight: 900,
          letterSpacing: '-1px',
          lineHeight: '1.1',
          marginBottom: '40px',
          textTransform: 'uppercase'
        }}
      >
        MORE ARTICLES
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginBottom: '80px' }}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
