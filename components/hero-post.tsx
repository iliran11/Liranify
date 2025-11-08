import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section style={{ marginBottom: '60px' }}>
      <div style={{ marginBottom: '20px' }}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div>
        <h2
          style={{
            fontSize: '42px',
            fontWeight: 900,
            letterSpacing: '-1px',
            lineHeight: '1.1',
            marginBottom: '15px'
          }}
        >
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
          >
            {title}
          </Link>
        </h2>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#666666',
            marginBottom: '20px'
          }}
        >
          <DateFormatter dateString={date} />
        </div>
        <p style={{
          fontSize: '18px',
          lineHeight: '1.7',
          color: '#333333',
          marginBottom: '20px'
        }}>
          {excerpt}
        </p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </section>
  )
}

export default HeroPost
