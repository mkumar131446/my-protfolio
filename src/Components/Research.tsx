import { useEffect, useState } from 'react'

interface MediumPost {
  title: string
  link: string
  pubDate: string
  description: string
}

const Research = () => {
  const [posts, setPosts] = useState<MediumPost[]>([])

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mkumar131446'
    )
      .then((res) => res.json())
      .then((data) => {
        const topPosts = data.items.slice(0, 3)
        setPosts(topPosts)
      })
      .catch((err) => console.error('Failed to load Medium posts', err))
  }, [])

  return (
    <section id="research" className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Research & Articles</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
        I occasionally publish journals and technical insights, including research-based writing and UI engineering breakdowns on Medium.
      </p>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="bg-stone-50 shadow-md p-4 rounded-lg text-left hover:shadow-xl transition duration-300 ease-in-out border border-gray-200"
            >
              <h3 className="font-semibold text-lg text-blue-700 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{new Date(post.pubDate).toLocaleDateString()}</p>
              <p
                className="text-gray-700 text-sm"
                dangerouslySetInnerHTML={{
                  __html: post.description.slice(0, 150) + '...'
                }}
              ></p>

              {/* I will add/update this part later once I have any comments or likes in Medium.com */}
              <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
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
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition mt-4"
        >
          Visit My Medium Blog
        </a>
      )}
    </section>
  )
}

export default Research