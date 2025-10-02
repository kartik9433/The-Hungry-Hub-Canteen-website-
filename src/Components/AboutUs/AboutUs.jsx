import React from 'react'
import "./AboutUs.css"

function AboutUs() {
  return (
    <div className='about-container'>
      <div className="about-headings">
        <h1>Welcome to Canteen 🍴</h1>
        <h2>The Hungry Hub</h2>
      </div>

      <div className='about-mission'>
        <h1>🎯 Our Mission</h1>
        <p>To serve quality food quickly, keeping health and taste in balance.</p>
      </div>

      <div className="about-story">
        <h1>📖 Our Story</h1>
        <p>Since 20XX, we've been the go-to spot for friends to hang out, share meals, and create memories</p>
      </div>

      <div className="about-reason">
        <h1>Why Choose Us?</h1>
        <ul>
          <li>✔ Hygienic & tasty food</li>
          <li>✔ Affordable meals</li>
          <li>✔ Quick service</li>
          <li>✔ Friendly environment</li>
        </ul>
      </div>

      <div className="about-timing">
        <h1>🕘 Timings</h1>
        <ul>
          <li>Mon-Sat: 9 AM - 8 PM</li>
          <li>Sun: Closed</li>
        </ul>
      </div>

      <div className="about-location">
        <h1>📍 Location</h1>
        <p>Inside ABES Engineering College, Ghaziabad</p>
      </div>

      <div className="about-closing">
        <h1>💬 Closing</h1>
        <p>More than just a canteen, we're a part of your student life journey!</p>
      </div>
    </div>
  )
}

export default AboutUs
