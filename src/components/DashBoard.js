import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import PostsCard from './PostsCrad';
import FooterNavbar from './Fotter';
import axios from 'axios';
import SearchBar from './searchbar';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom'; 

export default function DashBoard() {
  const [PostData, setPostData] = useState([]);
  const [accepted, setAccepted] = useState([]);
  const [searchedData, setSearchedData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const my_id = localStorage.getItem('Id');
  const navigate = useNavigate();

  const handleFetchAllData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://backend-diwr.onrender.com/user/get-all-data');
      const mergedData = response.data;
      setPostData(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handelAcceptedRequests = async (requester) => {
    const recipient = my_id;
    try {
      const res = await axios.post('https://backend-diwr.onrender.com/get-accepted-request', {
        recipient,
        requester,
      });
      setAccepted(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handelSearch = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://backend-diwr.onrender.com/search-engine?query=${data}`);
      setSearchedData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching search data:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchAllData();
    handelAcceptedRequests('6798cb01e06b53a7354f5258');
  }, []);

  const dataToDisplay = searchedData || PostData;

  

  return (
    <div>
      <div className="fixed-top" style={{ zIndex: 1030 }}>
        <Navbar />
      </div>

      <div className="fixed-top" style={{ top: '70px', zIndex: 1020, padding: '10px 20px' }}>
        <SearchBar handelSearch={handelSearch} />
      </div>

      <div
        className="d-flex flex-wrap justify-content-center"
        style={{
          marginTop: '160px',
          padding: '20px',
          width: '100%',
          borderRadius: '12px',
          border: '1px solid #ccc',
        }}
      >
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} style={{ marginBottom: '20px', width: '300px' }}>
              <Skeleton height={200} />
              <Skeleton height={30} style={{ marginTop: '10px' }} />
              <Skeleton width="80%" height={20} style={{ marginTop: '10px' }} />
            </div>
          ))
        ) : dataToDisplay.length === 0 ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              width: '100%',
              textAlign: 'center',
              fontSize: '18px',
              color: '#555',
            }}
          >
            No data found
            
          </div>
        ) : (
          dataToDisplay.map((data, index) =>
            data._id !== my_id ? <PostsCard key={index} PostData={data} /> : null
          )
        )}
      </div>

      <FooterNavbar />
    </div>
  );
}
