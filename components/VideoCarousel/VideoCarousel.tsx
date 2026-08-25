"use client";

import { useState } from "react";
import styles from "./VideoCarousel.module.css";

const videos = [
  {
    id: 1,
    src: "/videos/reel1.mp4",
    poster: "/imagens/cap1.jpg",
  },
  {
    id: 2,
    src: "/videos/reel2.mp4",
    poster: "/imagens/cap2.jpg",
  },
  {
    id: 3,
    src: "/videos/reel3.mp4",
    poster: "/imagens/cap3.jpg",
  },
  {
    id: 4,
    src: "/videos/reel4.mp4",
    poster: "/imagens/cap4.jpg",
  },
  {
    id: 5,
    src: "/videos/reel5.mp4",
    poster: "/imagens/cap5.jpg",
  },
];

export default function VideoCarousel() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const duplicatedVideos = [...videos, ...videos];

  const handlePlay = (
    videoElement: HTMLVideoElement,
    id: number
  ) => {
    // Para qualquer outro vídeo
    document.querySelectorAll("video").forEach((video) => {
      if (video !== videoElement) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Para o movimento do carrossel
    setPlayingId(id);

    // Começa o vídeo
    videoElement.play();
  };

  const handleEnd = () => {
    // Quando o vídeo terminar,
    // libera novamente o movimento
    setPlayingId(null);
  };

  return (
    <section className={styles.carousel}>
      <div
        className={`${styles.track} ${
          playingId !== null ? styles.paused : ""
        }`}
      >
        {duplicatedVideos.map((video, index) => (
          <div
            className={styles.videoCard}
            key={`${video.id}-${index}`}
          >
            <video
              src={video.src}
              controls
              muted={false}
              playsInline
              preload="metadata"
              onClick={(event) =>
                handlePlay(event.currentTarget, video.id)
              }
              onEnded={handleEnd}
            />
          </div>
        ))}
      </div>
    </section>
  );
}