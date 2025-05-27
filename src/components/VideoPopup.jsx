import React, { useState } from "react";
import ReactModal from "react-modal";
import { FaPlay, FaTimes } from "react-icons/fa";

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <div className="d-flex align-items-center hov justify-content-between">
      <button
        onClick={openVideo}
        className="d-flex gap-4 align-items-center text-decoration-none text-white bg-transparent border-0"
      >
        <div className="video-icon">
          <FaPlay className="play" size={20} />
        </div>
        <span className="text-white">View Video</span>
      </button>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeVideo}
        className="video-modal animate-modal bg-dark border-0 position-relative p-0 rounded-4"
        overlayClassName="video-overlay"
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <div className="video-wrapper rounded-4 overflow-hidden">
          <iframe
            className="rounded-4"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_1_H2iIQ9dY"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </ReactModal>

      {isOpen && (
        <button
          onClick={closeVideo}
          className="btn-close-custom"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>
      )}

      <style>{`
        .video-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
        }

        .video-modal {
          width: 90%;
          max-width: 800px;
          aspect-ratio: 16/9;
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.4s ease;
        }

        .ReactModal__Content--after-open.video-modal {
          opacity: 1;
          transform: scale(1);
        }

        .ReactModal__Content--before-close.video-modal {
          opacity: 0;
          transform: scale(0.5);
        }

        .video-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .btn-close-custom {
          position: fixed;
          top: 20px;
          right: 30px;
          background: white;
          color: black;
          font-size: 1.25rem;
          padding: 0.5rem;
          border-radius: 50%;
          border: none;
          z-index: 1100;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          transition: transform 0.2s ease;
        }

        .btn-close-custom:hover {
          transform: scale(1.15);
        }
      `}</style>
    </div>
  );
};

export default VideoPopup;
