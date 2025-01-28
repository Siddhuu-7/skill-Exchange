import React, { use } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Book, 
  Users, 
  Globe, 
  Star, 
  LogIn,
  Target,
  TrendingUp,
  Network 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const SkillExchangeLanding = () => {
  const navigate=useNavigate()
  return (
    <div className="container-fluid p-0">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <p className="navbar-brand fw-bold text-primary" >Skill Exchange</p>
          <div className="ms-auto">
            <button className="btn btn-primary d-flex align-items-center" 
            onClick={()=>{
navigate('/login')
}}> 
              <LogIn className="me-2" size={20} />
              Login
            </button>
          </div>
        </div>
      </nav>

      
      <header className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Unlock Your Potential, Share Your Expertise</h1>
          <p className="lead text-muted mb-4 mx-auto" style={{maxWidth: '800px'}}>
            SkillExchage Hub is a revolutionary platform that connects learners and experts worldwide, enabling seamless skill exchange through intelligent matching, verified interactions, and a gamified learning experience.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg"
            onClick={()=>{
              navigate('/login')
            }}
            >Get Started</button>
            <button className="btn btn-outline-primary btn-lg" 
            onClick={()=>navigate('/learnmore' )}>Learn More</button>
          </div>
        </div>
      </header>

      
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="h2 mb-4">The Learning Transformation</h2>
              <div className="mb-4">
                <div className="d-flex mb-3">
                  <Target className="text-danger me-3" size={40} />
                  <div>
                    <h3 className="h5">The Challenge</h3>
                    <p className="text-muted">Traditional learning platforms limit personal growth, lack real-world skill exchange, and create isolated learning experiences.</p>
                  </div>
                </div>
                <div className="d-flex">
                  <TrendingUp className="text-success me-3" size={40} />
                  <div>
                    <h3 className="h5">Our Solution</h3>
                    <p className="text-muted">A collaborative ecosystem that democratizes learning, connects global talents, and transforms skill acquisition through peer-to-peer exchanges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Network className="img-fluid text-primary" size={400} />
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">How SkillShare Hub Works</h2>
          <p className="lead text-muted mb-5 mx-auto" style={{maxWidth: '700px'}}>
 We empower learners through a dynamic platform that connects passionate individuals, validates expertise, and turns learning into an engaging, collaborative journey.          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <Book className="text-primary mb-3" size={50} />
                  <h3 className="card-title">Skill Exchange</h3>
                  <p className="card-text text-muted">
                  Connect with peers who share your passion, explore diverse learning opportunities, and expand your knowledge through meaningful exchanges.                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <Users className="text-success mb-3" size={50} />
                  <h3 className="card-title">Trust Network</h3>
                  <p className="card-text text-muted">
                    Verified profiles, comprehensive reviews, and transparent feedback ensure high-quality skill exchanges.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <Globe className="text-info mb-3" size={50} />
                  <h3 className="card-title">Campus Community</h3>
                  <p className="card-text text-muted">
                  Connect with fellow students across departments, share skills, and create learning opportunities within your college ecosystem.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">What Our Users Say</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <blockquote className="blockquote">
                <p className="mb-4">
                  "With SkillExchage Hub, knowledge knows no boundaries. Every interaction is a quest, every conversation an opportunity to grow beyond limits!"
                </p>
                <footer className="blockquote-footer">
                  <Star className="text-warning me-2" size={20} />
                  Global Learner
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default SkillExchangeLanding;