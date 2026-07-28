"use client";
import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0f172a',
        padding: '1rem',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#000000'
        }}
      >
        <video
          src="/bannervideo.mp4"
          playsInline
          preload="metadata"
          muted
          autoPlay
          loop
          controls
          poster="/BannerSection.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            backgroundColor: '#000000'
          }}
        />
      </div>
    </section>
  );
};