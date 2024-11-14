import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LandingPage = () => {
  const [downloadLink, setDownloadLink] = useState('#');

  useEffect(() => {
    // Detect if the device is iOS or Android
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setDownloadLink('https://play.google.com/store/apps/details?id=com.buygram.freshstock&pcampaignid=web_share');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDownloadLink('https://apps.apple.com/in/app/freshstock-buyonegram/id6705126130');
    }
  }, []);

  return (
    <Container>
      <Content>
        <Title>Welcome to Our App!</Title>
        <Subtitle>Please click below to download the app.</Subtitle>
        <Button href={downloadLink} target="_blank" rel="noopener noreferrer">
          Download the App
        </Button>
      </Content>
    </Container>
  );
};

export default LandingPage;

// Styled components for styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #84fab0, #8fd3f4);
`;

const Content = styled.div`
  text-align: center;
  color: white;
  padding: 20px;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3em;
  margin: 0.2em 0;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin: 1em 0;
`;

const Button = styled.a`
  display: inline-block;
  padding: 1em 2em;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;
