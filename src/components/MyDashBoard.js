import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Connections from './Connections';
import Progress from './Progress';
import Request from './Request';
import { Home ,User2Icon} from 'lucide-react';
import axios from 'axios';
export default function MyDashBoard() {
  const [activeSection, setActiveSection] = useState('request'); 
const [requseData,setRequestData]=useState([])

  const sectionIndex = ['request', 'connections', 'progress'].indexOf(activeSection);
const d= {
        name: "Karthik",
        goalComplete: true,
        completedTasks: 4,
        assignedTasks: 5
    }
   
      const FetchRequest = async () => {
        const id = localStorage.getItem('Id'); 
        try {
          const res = await axios.get(`http://localhost:5000/get-all-requests/${id}`);
          setRequestData(res.data)
        } catch (error) {
          console.log('no request');
        }
      };
    
      useEffect(() => {
        FetchRequest(); 
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
            className={`nav-link ${activeSection === 'request' ? 'fw-bold' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveSection('request')}
          >
            Request
          </p>
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
            Progress
          </p>
        </div>
        <div
          className="position-absolute "
          style={{
            height: '3px',
            backgroundColor:"#FAEBD7",
            width: '33.33%',
            transition: 'transform 0.3s ease',
            bottom: '0',
            left: '0', 
            transform: `translateX(${sectionIndex * 100}%)`, 
          }}
        ></div>
      </div>

      
      <div className="container mt-4">
        {activeSection === 'request' && requseData.map((d,i)=><Request key={i} data={d}/>)
          }
        {activeSection === 'connections' && <p><Connections data={d}/></p>}
        {activeSection === 'progress' && <Progress/>}
      </div>
      
    </div>
  );
}
