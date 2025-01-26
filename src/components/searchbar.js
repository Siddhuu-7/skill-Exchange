import React, { useState } from 'react';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBar({hadlesearch}) {
  const [searchContent, setContent] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await hadlesearch(searchContent)
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <p
              className="h6 mb-4 font-st text-center"
              style={{ fontStyle: "italic" }}
            >
              Find the Right <strong>Peer</strong> for You
            </p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                autoFocus
                value={searchContent}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <span className="input-group-text">
                <Search size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
