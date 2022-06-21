import React from "react";
import Body from "../components/body";
import Link from "next/link";

type Props = {};

const AboutContainer = (props: Props) => {
  return (
    <Body.PrivacyWrapper>
      <Body.ContactHeading>About Igarra Names</Body.ContactHeading>
      <Body.PrivacyText>
        <Link href="https://igarranames.com">Igarra Names</Link> is an online
        application repository for Igarra(Etuno) names.
      </Body.PrivacyText>
      <Body.PrivacyText>
        With major inspiration from the{" "}
        <Link href="https://yorubaname.com">Yoruba Name</Link>, the creator of
        this application, <Link href="https://winpeed.com">Praise Obende</Link>{" "}
        set out to replicate something similar for names from his town of origin
        - Igarra.
      </Body.PrivacyText>

      <Body.PrivacyText>
        Names were sourced from exiting materials (books), family relatives and
        friends.
      </Body.PrivacyText>

      <Body.PrivacyText>
        This application is built having in mind that the content on this site
        will be user-generated. It is believed that users of this application
        will contibute to the quality of names and meanings we have on the
        application as time goes on.
      </Body.PrivacyText>

      <Body.PrivacyText>
        The intention is to continuously improve the application with useful
        features. Your suggestions and feedback will be very much appreciated.
        You can leave a message <Link href="/contact">here.</Link>
      </Body.PrivacyText>
    </Body.PrivacyWrapper>
  );
};

export default AboutContainer;
