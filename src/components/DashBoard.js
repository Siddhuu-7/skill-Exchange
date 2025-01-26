import React, { useState } from 'react';
import Searchbar from './searchbar';
import Navbar from './Navbar';
import PostsCard from './PostsCrad';
import PostData from '../setupTests';

export default function DashBoard() {
  const [showSearchbar, setShowSearchbar] = useState(false); 
  const [searchedcontent,setSearchContent]=useState('')

  const toggleSearchbar = () => {
    setShowSearchbar(prevState => !prevState);
  };
const hadlesearch= async(search)=>{
 await setSearchContent(search)
console.log("search",searchedcontent)
}
  return (
    <div>
      
      <div className='fixed-top pb-2'>
        <Navbar toggleSearchbar={toggleSearchbar} />
      </div>

      <div style={{ marginTop: '60px' }}>
        
        
        {showSearchbar && (
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '9999',
            }}
            onClick={() => setShowSearchbar(false)} 
          >
            <div
              className="card p-3 shadow-lg text-center bg-info"
              style={{
                maxWidth: '1200px',
                borderRadius: '12px',
                backgroundColor: '#90CAF9',
                padding: '20px',
                zIndex: '10000', 
                width:"80%"
              }}
              onClick={(e) => e.stopPropagation()} 
            >
              <Searchbar hadlesearch={hadlesearch} />
            </div>
          </div>
        )}

        <div
          className="d-flex flex-wrap justify-content-center mt-4"
          style={{
            overflowY: 'auto',
            padding: '10px',
            width: '100%',
            borderRadius: '12px',
            border: '1px solid #ccc',
          }}
        >
          {PostData.map((data, index) => (
            <PostsCard key={index} PostData={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
