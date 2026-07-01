import { useEffect, useState } from 'react'
import styles from './Research.module.css'

interface MediumPost {
  title: string
  link: string
  pubDate: string
  description: string
}

const Research = () => {
  const [posts, setPosts] = useState<MediumPost[]>([])

  useEffect(() => {
    fetch('/api/rss')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((err) => console.error('Failed to load Medium posts', err))
  }, [])

  return (
    <section id="research" className={styles.section}>
      <h2 className={styles.heading}>Research & Articles</h2>
      <p className={styles.intro}>
        I occasionally publish journals and technical insights, including research-based writing and UI engineering breakdowns on Medium.
      </p>

      {posts.length > 0 ? (
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className={styles.postCard}
            >
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postDate}>
                {new Date(post.pubDate).toLocaleDateString()}
              </p>
              <p
                className={styles.postDescription}
                dangerouslySetInnerHTML={{
                  __html: post.description.length > 200
                    ? `${post.description.slice(0, 150)}... <span class="${styles.readMore}">Read more</span>`
                    : post.description
                }}
              ></p>

              {/* I will add/update this part later once I have any comments or likes in Medium.com */}
              <div className={styles.postFooter}>
                <span>👍 15</span>
                <span>💬 3</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <a
          href="https://medium.com/@mkumar131446"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          Visit My Medium Blog
        </a>
      )}
    </section>
  )
}

export default Research
