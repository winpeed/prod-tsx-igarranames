import React, { useRef, useState } from "react";
import Article from "./article";
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

const ArticleComp = ({ data, shareURL }) => {
  const { name, meaning, modified, sound, card } = data.fields;

  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <Article>
      <Article.Wrapper>
        <Article.Heading>{name}</Article.Heading>

        <Article.Wrapper>
          <Article.MinHeading>Meaning</Article.MinHeading>
          <Article.Text>
            {meaning.slice(0, 1).toUpperCase()}
            {meaning.slice(1)}
          </Article.Text>
        </Article.Wrapper>

        <Article.MinHeading>share</Article.MinHeading>
        <Article.Wrapper>
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
        </Article.Wrapper>

        <Article.Span>
          Last Updated on {new Date(modified).toLocaleDateString()}
        </Article.Span>
      </Article.Wrapper>

      {sound ? (
        <Article.Wrapper style={{ fontSize: "3rem", cursor: "pointer" }}>
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
        </Article.Wrapper>
      ) : null}
    </Article>
  );
};

export default ArticleComp;
