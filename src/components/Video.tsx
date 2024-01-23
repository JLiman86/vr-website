import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
          <h3
            data-aos="fade-right"
            className="text-2xl font-semibold mb-8 lg:mb-2"
          >
            Awesome experiences with virtual reality world
          </h3>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="ZRSNy8DcIDk"
            onClose={() => setIsOpen(false)}
          />
          <div
            
            data-aos="fade-left"
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              <BsPlayCircleFill className="text-4xl text-white/70 hover:text-white cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
