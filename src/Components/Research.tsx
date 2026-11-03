import { useEffect, useState } from 'react'
import styles from './Research.module.css'
import { publications, ORCID_ID } from '../Data/Constants'

interface MediumPost {
  title: string
  link: string
  pubDate: string
  description: string
}

const MEDIUM_URL = 'https://medium.com/@mkumar131446'

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

const Research = () => {
  const [posts, setPosts] = useState<MediumPost[]>([])

  useEffect(() => {
    fetch('/api/rss')
      .then((res) => {
        // /api/rss only exists on Vercel (or `vercel dev`). Under plain `vite dev`
        // the dev server answers with source code / HTML instead of JSON.
        if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) {
          throw new Error('Medium API unavailable')
        }
        return res.json()
      })
      .then((data) => setPosts(Array.isArray(data?.posts) ? data.posts : []))
      .catch((err) => console.warn('Medium posts not loaded:', err.message))
  }, [])

  const sortedPublications = [...publications].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="research" className={styles.section}>
      <h2 className={styles.heading}>Research & Articles</h2>
      <p className={styles.intro}>
        Peer-reviewed research on front-end architecture, web performance, and developer productivity — plus technical writing on Medium.
      </p>

      <div className={styles.pubHeader}>
        <h3 className={styles.subheading}>
          Publications <span className={styles.count}>{sortedPublications.length}</span>
        </h3>
        <div className={styles.profileLinks}>
          {ORCID_ID && (
            <a
              href={`https://orcid.org/${ORCID_ID}`}
              target="_blank"
              rel="noreferrer"
              className={styles.profileLink}
            >
              <span className={styles.orcidBadge} aria-hidden="true">iD</span>
              View on ORCID
            </a>
          )}
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.profileLink}
          >
            <span className={styles.mediumBadge} aria-hidden="true">M</span>
            Medium Blog
          </a>
        </div>
      </div>

      <ol className={styles.pubList}>
        {sortedPublications.map((pub) => {
          const href = pub.doi ? `https://doi.org/${pub.doi}` : pub.link
          return (
            <li key={pub.title} className={styles.pubCard}>
              <h4 className={styles.pubTitle}>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer">{pub.title}</a>
                ) : (
                  pub.title
                )}
              </h4>
              <p className={styles.pubJournal}>{pub.journal}</p>
              <p className={styles.pubMeta}>
                <time dateTime={pub.date}>{formatDate(pub.date)}</time>
                <span className={styles.dot} aria-hidden="true">•</span>
                <span>{pub.type}</span>
              </p>
              <ul className={styles.chips}>
                {pub.contributions.map((c) => (
                  <li key={c} className={styles.chip}>{c}</li>
                ))}
              </ul>
              <div className={styles.pubFooter}>
                <span className={styles.contributors}>
                  <span className={styles.label}>Contributors:</span> {pub.contributors.join(', ')}
                </span>
                {pub.doi ? (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.doi}
                  >
                    DOI: {pub.doi} ↗
                  </a>
                ) : pub.link ? (
                  <a href={pub.link} target="_blank" rel="noreferrer" className={styles.doi}>
                    View paper ↗
                  </a>
                ) : null}
              </div>
            </li>
          )
        })}
      </ol>

      {posts.length > 0 && (
        <>
        <h3 className={`${styles.subheading} ${styles.mediumHeading}`}>Writing on Medium</h3>
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
                  __html: (post.description ?? '').length > 200
                    ? `${post.description.slice(0, 150)}... <span class="${styles.readMore}">Read more</span>`
                    : (post.description ?? '')
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
        </>
      )}
    </section>
  )
}

export default Research
