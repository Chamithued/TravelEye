import React from 'react'
import './WaveDivider.css'

export default function WaveDivider() {
  return (
    <div className="wave-divider">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0,40 Q 360,80 720,40 T 1440,40 L 1440,120 L 0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
