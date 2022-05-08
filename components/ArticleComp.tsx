import React, { useRef, useState } from "react";
import Article from "./article";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
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
import Body from "./body";
import { ImCancelCircle } from "react-icons/im";

const ArticleComp = ({ data, shareURL }) => {
  const { name, meaning, modified, sound, card } = data.fields;
  const [isPlaying, setIsPlaying] = useState(true);
  const [isShowFeedback, setIsShowFeedback] = useState(false);

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <>
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

          <Article.Button onClick={() => setIsShowFeedback(true)}>
            Improve this entry <BiPencil />
          </Article.Button>
        </Article.Wrapper>

        {sound ? (
          <Article.Wrapper icon>
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
      {isShowFeedback ? (
        <Body.BannerWrapper>
          <ImCancelCircle
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              right: -15,
              top: -15,
              fill: "var(--black)",
              cursor: "pointer",
            }}
            onClick={() => setIsShowFeedback(false)}
          />
          <Body.Banner direction="column">
            <Body.Heading color="white">Help us improve {name}</Body.Heading>
            <Body.Text color="white">
              Do you have a story to share about this name? Do you think we
              missed something? Kindly share with us make improvements.
            </Body.Text>
            <Body.Form>
              <Body.TextArea required></Body.TextArea>
              <Body.LetterWrapper justify="center">
                <Body.Button media="submit">Submit Feedback</Body.Button>
                <Body.Button
                  media="cancel"
                  onClick={() => setIsShowFeedback(false)}
                >
                  Cancel
                </Body.Button>
              </Body.LetterWrapper>
            </Body.Form>
          </Body.Banner>
        </Body.BannerWrapper>
      ) : null}
    </>
  );
};

export default ArticleComp;
