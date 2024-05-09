import React, { useState, useEffect } from 'react';
import BlogCard from '../../Components/Blog-Card/BlogCard'; // Import your BlogCard component

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://shaqeel.wordifysites.com/wp-json/wp/v2/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        const formattedPosts = await Promise.all(data.map(async post => {
          // Fetch the image URL based on the featured_media ID
          const mediaResponse = await fetch(`https://shaqeel.wordifysites.com/wp-json/wp/v2/media/${post.featured_media}`);
          if (!mediaResponse.ok) {
            throw new Error('Failed to fetch media');
          }
          const mediaData = await mediaResponse.json();
          const imageUrl = mediaData.media_details.sizes.thumbnail.source_url; // Adjust the size as needed
          return {
            id: post.id,
            title: post.title.rendered,
            content: post.excerpt.rendered,
            link: post.link,
            categories: post.categories.map(category => category.name),
            thumbnail: imageUrl, // Use the fetched image URL
            pubDate: post.date,
          };
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 class="heading-primary aos-init aos-animate">What the Media Says</h1>
      <div className="blog-cards-container">
        {posts.map(post => (
          <BlogCard
            key={post.id}
            blog={post} // Pass the entire post object as the 'blog' prop
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
