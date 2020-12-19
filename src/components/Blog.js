import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { FaComments } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'

const Blog = () => {

  const [blogData, updateBlogData] = useState([])

  useEffect(() => {
    axios.get(`https://dev.to/api/articles?username=lauracharvey`)
      .then(resp => {
        updateBlogData(resp.data)
      })
  }, [])

  return <section className="blog-section" id="blog">
    <h2>My Blog Posts</h2>
    <div className="blog-inner">

      {blogData.map((article, index) => {
        return <div key={index}>
          <div className="blog-post">
            <a target="_blank" rel="noopener noreferrer" href={article.url}><h3>{article.title}</h3></a>
            <h4>{article.readable_publish_date}</h4>

            <div className="reactions-container">
              <div>
                <FaComments />
                <p>{article.comments_count}</p>
              </div>
              <div>
                <FiHeart />
                <p>{article.positive_reactions_count}</p>
              </div>
            </div>

            <div className="tags-container">
              #{article.tag_list[0]}, 
              #{article.tag_list[1]}, 
              #{article.tag_list[2]},
              #{article.tag_list[3]} 
            </div>

          </div>
        </div>
      })}
      </div>
      </section>
}

export default Blog