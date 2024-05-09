import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const { title, content, link, thumbnail, pubDate } = blog;

  function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - date.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? `${days} day ago` : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
    } else {
      return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`;
    }
  }

  function stripHtmlTags(html) {
    // Remove HTML tags
    let strippedText = html.replace(/<[^>]*>?/gm, '');
    // Remove special characters like &hellip;, >, and []
    strippedText = strippedText.replace(/&hellip;|>|[^\w\s]/g, '');
    return strippedText;
  }

  const strippedContent = stripHtmlTags(content);


  return (
    <div className="card">
      <a href={link} rel='noreferrer' target="_blank">
        <div className="card-header">
          <img src={thumbnail} alt="featured" />
        </div>
      </a>
      <div className="card-body">
        <a href={link} rel='noreferrer' target="_blank">
          <h1 className="card-header">
            {title}
          </h1>
        </a>
        <div className="tags">
          {strippedContent}
        </div>
        <div className="user">
          <img src="https://i.ibb.co/gRgypQL/1649421748390.jpg" alt="user" />
          <div className="user-info">
            <h5>{pubDate}</h5>
            <small>{getTimeAgo(pubDate)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
