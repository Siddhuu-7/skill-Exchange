import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data, Link } from 'react-router-dom';
import Seekers from './seekers';
import Seeking from './seeking'
import Progress from './Progress';
import Request from './Request';
import { Home ,User2Icon} from 'lucide-react';
import Connections from './Connections';
import axios from 'axios';
export default function MyDashBoard() {
  const [activeSection, setActiveSection] = useState('seeking'); 
const [requseData,setRequestData]=useState([])

  const sectionIndex = ['connections', 'progress', 'seeking', 'seekers', 'request'].indexOf(activeSection);
  const [connection, setConnection] = useState([]);
  const [seeking,setSeeking]=useState([])
  const [seekers,setSeekers]=useState([])

  const retriveConnections = async () => {
    try {
        const recipient = localStorage.getItem('Id');

        if (!recipient) {
            console.error("⚠️ No recipient found in localStorage!");
            return;
        }

        const res = await axios.get(`https://backend-diwr.onrender.com/get-accepted-request/${recipient}`);

        if (res.data.length > 0) {
            setConnection(res.data);
        } else {
            setConnection([]);
            console.warn("⚠️ No connections found!");
        }
    } catch (error) {
        console.error("❌ Error fetching connections:", error);
        if (error.response) {
            console.error("🛑 Server Response:", error.response.data);
        }
    }
};

const FetchSeeking=async()=>{
  try {
    const id = localStorage.getItem('Id'); 
    const res=await axios.get('https://backend-diwr.onrender.com/seekAndSeeking/handelSeeking/'+id)
    if (res.data.length > 0) {
      setSeeking(res.data);
      
  } else {
      setSeeking([]);
      console.warn("⚠️ No connections found!");
  }
  } catch (error) {
    console.log(error)
  }
}
   
      const FetchRequest = async () => {
        const id = localStorage.getItem('Id'); 
        try {
          const res = await axios.get(`https://backend-diwr.onrender.com/get-all-requests/${id}`);
          setRequestData(res.data)
        } catch (error) {
          console.log('no request');
        }
      };
const FetchSeeker=async()=>{
  try {
    const id = localStorage.getItem('Id'); 
    const res=await axios.get('https://backend-diwr.onrender.com/seekAndSeeking/handelSeeker/'+id)
    if (res.data.length > 0) {
      setSeekers(res.data);
  } else {
      setSeekers([]);
      console.warn("⚠️ No connections found!");
  }
  } catch (error) {
    console.log(error)
  }
}
      useEffect(() => {
        FetchRequest(); 
        retriveConnections();
        FetchSeeking();
        FetchSeeker();
      }, []);
      return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <p className="navbar-brand" >MyDashboard</p>
          <div className="d-flex ms-auto">
            <Link to={'/'} replace={true}>
              <p className="nav-link me-3"><Home/></p>
            </Link>
            <Link to={'/profile'} replace={true}>
              <p className="nav-link"><User2Icon/></p>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="bg-light py-3 position-relative">
        <div className="d-flex justify-content-around ">
          
          <p
            className={`nav-link ${activeSection === 'connections' ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSection('connections')}
          >
            Connections
          </p>
          <p
            className={`nav-link ${activeSection === 'progress' ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSection('progress')}
          >
            My Goals
          </p>
          <p
            className={`nav-link ${activeSection === 'seeking' ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSection('seeking')}
          >
            seeking
          </p>
          <p
            className={`nav-link ${activeSection === 'seekers' ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSection('seekers')}
          >
            seekers
          </p>
          <p
            className={`nav-link ${activeSection === 'request' ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSection('request')}
          >
            Request
          </p>
        </div>
        <div
          className="position-absolute"
          style={{
            height: '3px',
            backgroundColor: "#FAEBD7",
            width: '20%',
            transition: 'all 0.3s ease',
            bottom: '0',
            left: '0',
            transform: `translateX(${sectionIndex * 20}vw)`,
            borderRadius: '2px'
          }}
        ></div>
      </div>

      
      <div className="container mt-4">
        {activeSection === 'request' && requseData.map((d,i)=><Request key={i} data={d}/>)}
        {activeSection === 'connections' && connection.map(conn=> <Connections connection={conn}/>)}
        {activeSection === 'progress' && <Progress/>}
        {activeSection === 'seeking' && seeking.map(data=> <Seeking data={data}/>)}
        {activeSection === 'seekers' && seekers.map(data=><Seekers data={data}/>)}

      </div>  
    </div>
  );
}
