'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramReelEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const processEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    if (window.instgrm) {
      processEmbed();
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = processEmbed;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DbwQMr_Pq8W/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: 1,
          
          minWidth: 326,
          padding: 0,
          width: '99.375%',
        }}
      >
        <div style={{ padding: 16 }}>
          
           <a  href="https://www.instagram.com/reel/DbwQMr_Pq8W/?utm_source=ig_embed&utm_campaign=loading"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver essa foto no Instagram
          </a>
        </div>
      </blockquote>
    </div>
  );
}