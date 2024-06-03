'use client';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { TrustedList, WatchDemoBtn } from '@/components';
import {
  Center,
  FlexContainer,
  ColumnContainer,
  SectionContainer,
} from '@/style';

const Modal = dynamic(() => import('@/reuseable-components/modal'));

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.font_family.primary};
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-weight: 400;
  line-height: 110%;
  letter-spacing: -1.92px;
  @media (max-width: 600px) {
    letter-spacing: -1.12px;
  }
`;

const HeroSubTitle = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.font_family.primary};
  font-size: clamp(1.1rem, 3vw, 1.875rem);
  font-weight: 200;
  line-height: 133%;
  opacity: 0.8;
  margin-top: 40px;

  @media (max-width: 600px) {
    line-height: 155%;
  }
`;

const DemoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 300px;
`;

const Hero = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <SectionContainer>
        <ColumnContainer>
          <FlexContainer gap={40}>
            <HeroTitle>Deeper</HeroTitle>
            <WatchDemoBtn onClick={() => setOpen(true)} />
          </FlexContainer>
          <HeroTitle>Observability </HeroTitle>
          <HeroSubTitle>
            Resolve incidents faster with deeper distributed tracing for all
            your backend architecture without any code changes.
          </HeroSubTitle>
          <TrustedList />
        </ColumnContainer>
        <div>
          <Image
            width={600}
            height={600}
            src="/images/hero/hero.svg"
            alt="overview"
          />
        </div>
      </SectionContainer>
      {open && (
        <Modal
          title="We are Odigos!"
          description=""
          onClose={() => setOpen(false)}
        >
          <DemoIframe
            className="rounded-lg demo-view"
            src={`https://www.youtube.com/embed/nynyV7FC4VI`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Modal>
      )}
    </>
  );
};

export default Hero;
