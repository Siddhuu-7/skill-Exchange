import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaEdit, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const id = localStorage.getItem('Id');
      if (!id) {
        setError("User ID not found in local storage.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/user/profileData/${id}`);
        setProfileData(response.data);
        console.log(response.data)
      } catch (err) {
        setError("Failed to fetch profile data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading profile...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h3>Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="container py-5 text-center">
        <h3>No Profile Data</h3>
        <p>Please update your profile information.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <div className="d-flex align-items-center">
                <img
                  src={"https://m.economictimes.com/thumb/msid-117556047,width-1200,height-900,resizemode-4,imgsize-1289830/republic-day.jpg"}
                  alt="Profile"
                  className="rounded-circle me-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div>
                  <h2 className="mb-0">{profileData.userName || 'No Name Provided'}</h2>
                  <p className="mb-0">{profileData.professionalCategory || 'No Category Provided'}</p>
                </div>
              </div>
            </div>
            <div className="card-body">
              {/* Contact Information */}
              <div className="row mb-4">
                <div className="col-md-4">
                  <strong><FaMapMarkerAlt /> Location:</strong> {profileData.location || 'No Location Provided'}
                </div>
                <div className="col-md-4">
                  <strong><FaEnvelope /> Email:</strong> {profileData.email || 'No Email Provided'}
                </div>
                
              </div>

              {/* Professional Summary */}
              <div className="mb-4">
                <h4>Professional Summary</h4>
                <p>{profileData.summary || 'No Summary Available'}</p>
              </div>

              {/* Work Experience */}
              <div className="mb-4">
                <h4>Work Experience</h4>
                {profileData.experience && profileData.experience.length > 0 ? (
                  profileData.experience.map((job, index) => (
                    <div key={index} className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title">{job.title} at {job.company}</h5>
                        <p className="card-text">
                          {job.startDate} - {job.currentlyWorking ? 'Present' : job.endDate}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No work experience provided.</p>
                )}
              </div>

              {/* Education */}
              <div className="mb-4">
                <h4>Education</h4>
                {profileData.education && profileData.education.length > 0 ? (
                  profileData.education.map((edu, index) => (
                    <div key={index} className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title">{edu.degree}</h5>
                        <p className="card-text">
                          {edu.school} | {edu.startYear} - {edu.endYear}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No education details provided.</p>
                )}
              </div>

              {/* Skills */}
              <div>
                <h4>Skills</h4>
                <div>
                  {profileData.skills && profileData.skills.length > 0 ? (
                    profileData.skills.map((skill, index) => (
                      <span key={index} className="badge bg-secondary me-2 mb-2">
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p>No skills provided.</p>
                  )}
                </div>
              </div>

              {/* Edit Profile Button */}
              <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-outline-primary" onClick={() => navigate('/profileupdate')}>
                  <FaEdit /> Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
