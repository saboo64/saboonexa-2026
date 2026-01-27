import { useEffect, useRef } from "react";

const Video = ({ src, poster }) => {
  const videoRef = useRef(null);

  // Ensure video plays automatically when component is mounted
  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay failed, trying to play after user interaction", error);
      }
    };

    playVideo();
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="object-cover w-full duration-1000 h-[700px]  sm:block 2xl:h-[869px] md:h-[720px] lg:h-[665px] xl:h-[850px]  "
        preload="metadata"
        poster={poster}
        loop
        autoPlay
        playsInline
        disableRemotePlayback
        disablePictureInPicture
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
};

export default Video;
