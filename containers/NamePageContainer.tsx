import { Result } from "../interfaces/interface";
import React, { useState, useRef } from "react";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import SideBar from "../components/SideBar";

export default function NamePageContainer({ data, shareURL }) {
  const { name, meaning, modified, sound } = data.fields;

  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  console.log(data.fields);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "1100px",
        margin: "1em auto",
        justifyContent: "space-between",
        padding: "2em 1em",
      }}
    >
      <article
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid var(--gray-light)",
          padding: "1em 2em 2em 2em",
          flex: "0 0 55%",
          borderRadius: "4px",
          boxShadow: "0px 0px 0px 1px var(--gray-light)",
          justifyContent: "space-between",
          lineHeight: "1.7",
        }}
      >
        <div>
          <h3 style={{ fontSize: "3rem" }}> {name}</h3>
          <div style={{ padding: "0.1em 0em" }}>
            <h4 style={{ color: "#007fb1" }}>Meaning </h4>
            <p style={{ padding: "0.15em 0em" }}>
              {meaning.slice(0, 1).toUpperCase()}
              {meaning.slice(1)}
            </p>
          </div>

          <h5 style={{ padding: "0.4em 0em" }}>SHARE</h5>
          <div>
            {" "}
            <FacebookShareButton url={shareURL}>
              <FacebookIcon size={36}></FacebookIcon>{" "}
            </FacebookShareButton>{" "}
            <TwitterShareButton url={shareURL}>
              <TwitterIcon size={36}></TwitterIcon>
            </TwitterShareButton>{" "}
            <WhatsappShareButton url={shareURL}>
              <WhatsappIcon size={36}></WhatsappIcon>
            </WhatsappShareButton>{" "}
            <LinkedinShareButton url={shareURL}>
              {" "}
              <LinkedinIcon size={36}></LinkedinIcon>
            </LinkedinShareButton>{" "}
            <EmailShareButton url={shareURL}>
              <EmailIcon size={36}></EmailIcon>
            </EmailShareButton>
          </div>

          <span style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
            Last Updated @ {new Date(modified).toLocaleTimeString()} on{" "}
            {new Date(modified).toLocaleDateString()}
          </span>
        </div>

        {sound ? (
          <div style={{ fontSize: "3rem", cursor: "pointer" }}>
            {isPlaying ? (
              <BsPlayCircle onClick={handlePlay} />
            ) : (
              <BsPauseCircle onClick={handlePause} />
            )}
            <audio
              src={`${sound[0].url}`}
              ref={audioRef}
              onEnded={() => setIsPlaying(true)}
              onPlay={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(true)}
            ></audio>
          </div>
        ) : null}
      </article>
      <SideBar />
    </section>
  );
}
