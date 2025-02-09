import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, MoreHorizontal, Send } from 'lucide-react';
import './App.css';

const InstagramPosts = ({ post }) => {
  const [liked, setLiked] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleLike = (postId) => {
    setLiked((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container my-4">
      <div key={post.id} className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={post.userAvatar}
              alt={post.username}
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <span className="fw-bold">{post.username}</span>
          </div>
          <button className="btn btn-link text-muted">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <img
          src={post.image}
          alt="Post content"
          className="card-img-top img-fluid"
          style={{
            maxWidth: '100%',
            height: '300px',
            objectFit: 'cover',
            padding: '10px',
          }}
          onClick={() => handleImageClick(post.image)}
        />

        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <div className="d-flex">
              <button
                onClick={() => toggleLike(post.id)}
                className={`btn btn-link ${liked[post.id] ? 'text-danger' : 'text-muted'}`}
              >
                <Heart size={24} fill={liked[post.id] ? 'currentColor' : 'none'} />
              </button>
              <button className="btn btn-link text-muted">
                <MessageCircle size={24} />
              </button>
              <button className="btn btn-link text-muted">
                <Send size={24} />
              </button>
            </div>
            <button className="btn btn-link text-muted">
              <Bookmark size={24} />
            </button>
          </div>

          <div className="fw-bold mb-2">
            {post.likes.toLocaleString()} likes
          </div>

          <div>
            <span className="fw-bold">{post.username}</span>
            <span> {post.caption}</span>
          </div>

          <button className="btn btn-link text-muted text-sm mt-1">
            View all {post.comments} comments
          </button>

          <div className="text-muted text-xs mt-1">
            {post.timeAgo}
          </div>
        </div>

        <div className="card-footer d-flex align-items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="form-control form-control-sm me-2"
          />
          <button className="btn btn-primary btn-sm">
            Post
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="modal d-block" style={{ display: 'block' }} onClick={closeModal}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  src={selectedImage}
                  alt="Full view"
                  className="img-fluid"
                  style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramPosts;
