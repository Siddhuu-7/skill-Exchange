import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaGraduationCap, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const PublicProfileView = () => {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
     
      try {
        const response = await fetch(`http://localhost:5000/user/profileData/${userId}`);
        if (!response.ok) {
          throw new Error('Profile not found');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError("This profile is not available or has been removed.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="alert-heading">Profile Not Found</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Profile Header Card */}
          <div className="card shadow mb-4">
            <div className="card-body text-center">
              <img
                src={profileData?.profileImage ||"https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"}
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h2 className="mb-0">{profileData?.userName || 'Anonymous User'}</h2>
              <p className="text-muted mb-3">{profileData?.professionalCategory || 'Professional'}</p>
              
              {/* Location and Contact */}
              <div className="d-flex justify-content-center gap-3 mb-3">
                {profileData?.location && (
                  <span className="text-muted">
                    <FaMapMarkerAlt className="me-1" />{profileData.location}
                  </span>
                )}
              </div>

              {/* Social Links */}
              <div className="d-flex justify-content-center gap-3">
                {profileData?.linkedinUrl && (
                  <a href={profileData.linkedinUrl} className="text-primary" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </a>
                )}
                {profileData?.githubUrl && (
                  <a href={profileData.githubUrl} className="text-dark" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="card shadow mb-4">
            <div className="card-body">
              <h4 className="card-title border-bottom pb-3">About</h4>
              <p className="card-text">{profileData?.summary || 'No summary provided.'}</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="card shadow mb-4">
            <div className="card-body">
              <h4 className="card-title border-bottom pb-3">
                <FaBriefcase className="me-2" />Experience
              </h4>
              {profileData?.experience && profileData.experience.length > 0 ? (
                profileData.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="mb-1">{exp.title}</h5>
                    <h6 className="text-muted">{exp.company}</h6>
                    <p className="text-muted small">
                      {exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate}
                    </p>
                    <p>{exp.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted">No experience listed</p>
              )}
            </div>
          </div>

          {/* Skills Section */}
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title border-bottom pb-3">Skills</h4>
              <div className="d-flex flex-wrap gap-2">
                {profileData?.skills && profileData.skills.length > 0 ? (
                  profileData.skills.map((skill, index) => (
                    <span key={index} className="badge bg-primary">
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-muted">No skills listed</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfileView;