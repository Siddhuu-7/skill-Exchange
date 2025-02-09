import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import unknown from '../assests/unknown.jpg'
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [privacy, setPrivacy] = useState('Public');
const navigate=useNavigate()
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImages([reader.result]); 
      };
    }
  };
  

  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const postData = {
      user: localStorage.getItem('name'), 
      content: postContent, 
      image: selectedImages.length > 0 ? selectedImages[0] : null, 
      privacy: privacy, 
      timestamp: new Date().toISOString(), 
    };
  
    console.log("Post Data:", postData); 
    await new Promise((resolve) => setTimeout(resolve, 1500));
  
    setPostContent('');
    setSelectedImages([]);
    setIsLoading(false);
  };
  


  return (
    <div className="container py-5">
     <div className="d-flex align-items-center mb-3">
             <p className="m-0 fs-3">
               <ArrowLeft size={24} onClick={()=>navigate(-1)} /> Home
             </p>
           </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Create Post</h5>
                <div className="dropdown">
                  <button 
                    className="btn btn-outline-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-globe me-2"></i>
                    {privacy}
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => setPrivacy('Public')}>Public</button></li>
                    <li><button className="dropdown-item" onClick={() => setPrivacy('Friends')}>Friends</button></li>
                    <li><button className="dropdown-item" onClick={() => setPrivacy('Only Me')}>Only Me</button></li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <img
                  src={unknown}
                  alt="User"
                  className="rounded-circle me-2"
                  height={"50px"}
                />
                <div>
                  <div className="fw-bold">{localStorage.getItem('name')}</div>
                  <small className="text-muted">{privacy}</small>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <textarea
                    className="form-control border-0"
                    rows="4"
                    placeholder="What's on your mind?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  ></textarea>
                </div>

                {selectedImages.length > 0 && (
                  <div className="row g-2 mb-3">
                    {selectedImages.map((url, index) => (
                      <div key={index} className="col-6">
                        <div className="position-relative">
                          <img
                            src={url}
                            alt={`Preview ${index + 1}`}
                            className="img-fluid rounded"
                            style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                          />
                          <button
                            type="button"
                            className="btn-close position-absolute top-0 end-0 m-2 bg-white"
                            onClick={() => removeImage(index)}
                          ></button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="card mb-3">
                  <div className="card-body">
                    <small className="fw-bold d-block mb-2">Add to your post</small>
                    <div className="btn-group">
                      <label className="btn btn-light" role="button">
                        <i className="bi bi-image text-success"></i>
                        <input
                          type="file"
                          hidden
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                      <button type="button" className="btn btn-light">
                        <i className="bi bi-camera-video text-primary"></i>
                      </button>
                      <button type="button" className="btn btn-light">
                        <i className="bi bi-emoji-smile text-warning"></i>
                      </button>
                      <button type="button" className="btn btn-light">
                        <i className="bi bi-geo-alt text-danger"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isLoading || (!postContent && selectedImages.length === 0)}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Posting...
                    </>
                  ) : (
                    'Post'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;