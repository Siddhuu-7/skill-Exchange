"use client"

import React from "react"
import { Button, Container, Row } from "react-bootstrap"
import FeatureCard from "./FeatureCard"
import "bootstrap/dist/css/bootstrap.min.css"

export default function SkillSwapBlogPost() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Container className="my-5">
      <h1 className="display-4 mb-4">Swap Skills, Make Friends: Our Awesome Learning Platform</h1>

      <section className="mb-5">
        <p className="lead">
          Hey there, skill enthusiasts! 👋 Ever wished you could learn to code while teaching someone else how to cook?
          Or maybe pick up a new language while showing off your killer dance moves? Well, we've got an idea that might
          just blow your mind: a platform where you can swap skills with cool people from all over!
        </p>
        <Button variant="outline-primary" onClick={scrollToFeatures}>
          Check out the cool stuff we're planning! 👇
        </Button>
      </section>

      <section id="features" className="mb-5">
        <h2 className="display-5 mb-4">What's in the Mix?</h2>
        <Row className="g-4">
          <FeatureCard
            icon="🤝"
            title="Buddy System"
            description="We'll match you with your perfect skill-swap buddy. It's like a dating app, but for learning!"
          />
          <FeatureCard
            icon="🔒"
            title="Safe Space"
            description="Chat, video call, and share resources without worrying about the creepy stuff. We've got your back!"
          />
          <FeatureCard
            icon="🏆"
            title="Level Up"
            description="Earn badges, climb leaderboards, and show off your progress. Learning's more fun when it's a game!"
          />
          <FeatureCard
            icon="✅"
            title="Skill Cred"
            description="Get your skills verified and show the world what you're made of. No more empty brags!"
          />
          <FeatureCard
            icon="📅"
            title="Easy Scheduling"
            description="Finding time to meet is a breeze with our built-in calendar. No more timezone headaches!"
          />
          <FeatureCard
            icon="💬"
            title="Honest Feedback"
            description="Give and get feedback to keep the learning vibes positive and productive. Constructive criticism FTW!"
          />
        </Row>
      </section>

      <section className="mb-5">
        <h2 className="display-5 mb-4">The Techy Stuff (for the Nerds Out There)</h2>
        <ul className="list-group">
          <li className="list-group-item">Smart Learning using some cool AI magic 🧠</li>
          <li className="list-group-item">Fort Knox-level security for your chats and calls 🔐</li>
          <li className="list-group-item">Flexible architecture so we can keep adding awesome features 🏗️</li>
          <li className="list-group-item">Smooth interaction so you can learn face-to-face 📹</li>
          <li className="list-group-item">where there is will there is way (because why not?) 🔗</li>
          <li className="list-group-item">Gamification that'll make learning addictive (in a good way!) 🎮</li>
        </ul>
      </section>

      <section>
        <h2 className="display-5 mb-4">Wanna Join the Fun?</h2>
        <p className="lead mb-4">
          We're super stoked about this skill-swapping adventure, and we'd love to hear what you think! Got ideas?
          Suggestions? Just want to say hi? Hit us up!
        </p>
        <Button variant="primary" href="mailto:SkillExcahnge2025@gmail.com">
          Shoot Us a Message! 📬
        </Button>
      </section>
    </Container>
  )
}

