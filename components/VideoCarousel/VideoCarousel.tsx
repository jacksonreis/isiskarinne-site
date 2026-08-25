"use client";

import { useState } from "react";
import styles from "./VideoCarousel.module.css";

const videos = [
  {
    id: 1,
    src: "/videos/video-iris.mp4",
  },
  {
    id: 2,
    src: "/videos/video-iris.mp4",
  },
  {
    id: 3,
    src: "/videos/video-iris.mp4",
  },
  {
    id: 4,
    src: "/videos/video-iris.mp4",
  },
  {
    id: 5,
    src: "/videos/video-iris.mp4",
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
              muted={false}
              playsInline
              poster="/imagens/video-capa.jpg"
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