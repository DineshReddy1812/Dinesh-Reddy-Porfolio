
import React from 'react'
import Logo from '../../assets/logo.png'

const Home = () => {
  return (
    <div className="bg-orange-100 flex " style={{ minHeight: 'calc(100vh - 82px)' , backgroundColor: 'rgba(255, 138, 0, 0.1)' }}>
        {/* Left side of home screen */}
      <div className="w-1/2 flex flex-col justify-center p-8 ml-33">
        <h6 className="text-2xl font-semibold mb-2 text-gray-400 opacity-70">Hello I'm</h6>
        <h1 className="text-4xl font-bold mb-4 gap-4">Dinesh Reddy</h1>
        <p className="text-gray-700 leading-relaxed ">
          I’m an aspiring Product Manager with a solid background in technology, entrepreneurship, and leadership.
          My internships at Bluestock Fintech and Tiny Data Tech helped me bridge user needs with business goals through technical execution.
          As Finance Head of Eager Club and a student entrepreneur, I’ve developed a strategic mindset, led cross-functional teams,
          and made data-driven decisions. I’m passionate about building impactful products, creating meaningful user experiences,
          and driving innovation that solves real-world problems.
          I aim to become a product leader who doesn’t just envision the future—but builds it.
        </p>
      </div>

      {/* Right side of home screen */}
      <div className="w-1/2 flex items-center justify-center p-7 mt-15">
        <img src={Logo} alt="logo" className="max-w-full h-200%" />
      </div>
    </div>
  )
}

export default Home
