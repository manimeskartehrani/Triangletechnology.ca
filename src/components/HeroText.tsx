import React from 'react'
import Button from './Button'

const HeroText = () => {
  return (
    <div className="container relative mt-16 md:mt-44">
      <h1 className="text-gradient hero-heading">Triangle</h1>
      <p className="hero-subheading">
        Elevate your site's visibility effortlessly with AI, where smart
        technology meets user‑friendly SEO tools.
      </p>
      <div className="flex justify-center mt-6 md:mt-36">
        <Button
          text="Join waitlist"
          className="w-40 flex items-center justify-center text-center"
          href="/"
        />
      </div>
    </div>
  )
}

export default HeroText