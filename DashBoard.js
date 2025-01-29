import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import PostsCard from './PostsCrad';
import FooterNavbar from './Fotter';
import axios from 'axios';
import ChatbotApp from './ChatAI';
export default function DashBoard() {
  const [PostData, setPostData] = useState([]);
  const [accepted,setaccepted]=useState([])
const my_id=localStorage.getItem('Id')
  const handleFetchAllData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user/get-all-data');
      const mergedData = response.data;
      setPostData(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
const handelAccpetedRequests=async(requester)=>{
  const recipient=my_id
try {
  const res=await axios.post('http://localhost:5000/get-accepted-request',{
        recipient,
        requester
        
});

setaccepted(res.data)
} catch (error) {
  console.log(error)
}  
}
  useEffect(() => {
    handleFetchAllData();
    handelAccpetedRequests("6798cb01e06b53a7354f5258");
  }, []);

  return (
    <div>
      <div className="fixed-top" style={{ zIndex: 1030 }}>
        <Navbar />
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
       {PostData.map((data, index) => (
  data._id !== my_id && <PostsCard key={index} PostData={data} />
))}

      </div>
<ChatbotApp/>
      <FooterNavbar />
    </div>
  );
}
