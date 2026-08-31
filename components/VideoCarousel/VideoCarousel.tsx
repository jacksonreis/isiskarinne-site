"use client";

import { useRef, useState } from "react";
import styles from "./VideoCarousel.module.css";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/igdhxud9/video/upload/v1787703392/reel1.mp4",
    poster: "/imagens/cap1.png",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/igdhxud9/video/upload/v1787703377/reel2.mp4",
    poster: "/imagens/cap2.png",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/igdhxud9/video/upload/v1787703374/reel3.mp4",
    poster: "/imagens/cap3.png",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/igdhxud9/video/upload/v1787703378/reel4.mp4",
    poster: "/imagens/cap4.png",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/igdhxud9/video/upload/v1787703381/reel5.mp4",
    poster: "/imagens/cap5.png",
  },
];

export default function VideoCarousel() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const duplicatedVideos = [...videos, ...videos];

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    /*
     * Se este vídeo já está tocando:
     * pausa o vídeo e libera o carrossel.
     */
    if (playingIndex === index && !video.paused) {
      video.pause();
      setPlayingIndex(null);

      return;
    }

    /*
     * Para qualquer outro vídeo do NOVO CARROSSEL.
     */
    videoRefs.current.forEach((otherVideo, otherIndex) => {
      if (otherVideo && otherIndex !== index) {
        otherVideo.pause();
      }
    });

    /*
     * Define este vídeo como ativo.
     */
    setPlayingIndex(index);

    /*
     * Reproduz o vídeo clicado.
     */
    video.play().catch(() => {});
  };

  const handleVideoEnded = (index: number) => {
    /*
     * Só libera o carrossel se o vídeo que terminou
     * for realmente o vídeo que estava ativo.
     */
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  return (
    <section className={styles.carousel}>
      <div
        className={`${styles.track} ${
          playingIndex !== null ? styles.paused : ""
        }`}
      >
        {duplicatedVideos.map((video, index) => (
          <div
            className={styles.videoCard}
            key={`${video.id}-${index}`}
          >
            <video
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              src={video.src}
              poster={video.poster}
              playsInline
              controls={false}
              preload="metadata"
              onClick={() => handleVideoClick(index)}
              onEnded={() => handleVideoEnded(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}