import React, { useRef, useState } from "react";
import Article from "./article";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Body from "./body";
import { ImCancelCircle } from "react-icons/im";

const ArticleComp = ({ data, shareURL }) => {
  const { name, meaning, modified, sound, card } = data.fields;

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isShowFeedback, setIsShowFeedback] = useState<boolean>(false);
  const [formDetail, setFormDetail] = useState<{ Feedback: string }>({
    Feedback: "",
  });

  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormDetail((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const addNewName = async () => {
    const headers = {
      "Content-type": "application/json",
    };

    try {
      const response = await fetch("/api/v1/feedback", {
        method: "post",
        headers,
        body: JSON.stringify({
          Name: name,
          Feedback: formDetail.Feedback,
        }),
      });
      const data = await response.json();
      setFormDetail({ Feedback: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await addNewName();
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
        <Body.BannerWrapper color="black">
          <ImCancelCircle
            style={{
              fontSize: "2.5rem",
              position: "absolute",
              right: 3,
              top: 3,
              fill: "var(--white)",
              cursor: "pointer",
            }}
            onClick={() => setIsShowFeedback(false)}
          />
          <Body.Banner direction="column">
            <Body.Heading color="white">Help us improve '{name}'</Body.Heading>
            <Body.Text color="white">
              Do you have a story to share about this name? Do you think we
              missed something? Kindly share with us make improvements.
            </Body.Text>
            <Body.Form onSubmit={handleFormSubmit}>
              <Body.TextArea
                required
                onChange={handleChange}
                value={formDetail.Feedback}
                name="Feedback"
              ></Body.TextArea>
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
