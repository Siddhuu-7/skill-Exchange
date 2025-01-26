import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
export default function ProfileUpdate() {
  const [profile, setProfile] = useState({
    fullName: '',
    professionalCategory: '',
    location: '',
    email: '',
    phone: '',
    summary: '',
    experience: [],
    education: [],
    skills: []
  });

  const [newExperience, setNewExperience] = useState({
    company: '',
    title: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false
  });

  const [newSkill, setNewSkill] = useState('');

  const professionalCategories = [
    'Student',
    'Employee',
    'Teacher/Educator', 
    'Freelancer',
    'Entrepreneur',
    'Manager',
    'Professional Researcher',
    'Consultant',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addExperience = () => {
    if (newExperience.company && newExperience.title) {
      setProfile(prev => ({
        ...prev,
        experience: [...prev.experience, newExperience]
      }));
      setNewExperience({
        company: '',
        title: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false
      });
    }
  };

  const addSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
      setNewSkill('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Submitted:', profile);
  };


  const FetchData=()=>{
    const id=localStorage.getItem('Id')
    axios.get(`http://localhosy:5000/user/profileData/${id}`)
    .then(res)
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">Professional Profile</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Personal Info Section */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Professional Category</label>
                    <select 
                      className="form-select" 
                      name="professionalCategory"
                      value={profile.professionalCategory}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Professional Category</option>
                      {professionalCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact & Location */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Location</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="location"
                      value={profile.location}
                      onChange={handleChange}
                      placeholder="City, Country" 
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      placeholder="Professional email" 
                    />
                  </div>

                </div>

                {/* Professional Summary */}
                <div className="mb-3">
                  <label className="form-label">Professional Summary</label>
                  <textarea 
                    className="form-control" 
                    name="summary"
                    value={profile.summary}
                    onChange={handleChange}
                    placeholder="Write a brief professional summary"
                    rows="4" 
                  />
                </div>

                {/* Experience Section */}
                <div className="mb-3">
                  <h4>Work Experience</h4>
                  {profile.experience.map((exp, index) => (
                    <div key={index} className="card mb-2">
                      <div className="card-body">
                        <h5 className="card-title">{exp.title} at {exp.company}</h5>
                        <p className="card-text">{exp.startDate} - {exp.endDate}</p>
                      </div>
                    </div>
                  ))}
                  <div className="row">
                    <div className="col-md-4">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Company"
                        value={newExperience.company}
                        onChange={(e) => setNewExperience(prev => ({...prev, company: e.target.value}))}
                      />
                    </div>
                    <div className="col-md-4">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Job Title"
                        value={newExperience.title}
                        onChange={(e) => setNewExperience(prev => ({...prev, title: e.target.value}))}
                      />
                    </div>
                    <div className="col-md-4">
                      <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={addExperience}
                      >
                        Add Experience
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h4>Skills</h4>
                  <div className="row mb-3">
                    <div className="col-md-8">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Add a skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                      />
                    </div>
                    <div className="col-md-4">
                      <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={addSkill}
                      >
                        Add Skill
                      </button>
                    </div>
                  </div>
                  <div>
                    {profile.skills.map((skill, index) => (
                      <span key={index} className="badge bg-secondary me-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}