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
  const duplicatedVideos = [...videos, ...videos];

  return (
    <section className={styles.carousel}>
      <div className={styles.track}>

        {duplicatedVideos.map((video, index) => (
          <div
            className={styles.videoCard}
            key={`${video.id}-${index}`}
          >
            <video
              src={video.src}
              controls
            playsInline
            controlsList="nofullscreen noremoteplayback"
            disablePictureInPicture
              preload="metadata"
            />
          </div>
        ))}

      </div>
    </section>
  );
}
