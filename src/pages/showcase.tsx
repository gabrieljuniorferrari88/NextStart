// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import repoShareImage from '@/public/img/next-start.jpg';

// system® DESIGN SYSTEM
// import { Image } from '@/system/image';
import { Navbar } from '@/ui/Navbar';
import { Box } from '@/system/box';
import { Container } from '@/system/container';
import { Section } from '@/system/section';
import { Heading } from '@/system/heading';
import { Text } from '@/system/text';

import { ShowcaseComp } from '@/components/ShowcaseComposition';

// STITCHES
import { styled } from 'stitches.config';

const HeadingBox = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '80%',
  height: '50%',
  margin: 'auto',
  padding: '20px',
  color: '$slate1',

  zIndex: '200',
});

const Showcase = () => {
  return (
    <Box>
      <Head>
        <title>Showcase.</title>
      </Head>
      <Navbar />
      <Box
        css={{
          bc: '$slate1',
          overflow: 'auto',
          height: '100vh',
          '@md': {
            // display: 'none',
          },
          '@sm': {
            // display: 'none',
          },
        }}
      >
        {/* <!-- MAIN HEADING SECTION --> */}
        <Section size="1">
          <Container
            size="3"
            css={{ ai: 'center', paddingTop: '120px', paddingBottom: '40px', margin: 'auto', textAlign: 'center' }}
          >
            <Heading size="4">Showcase</Heading>
            <Text
              as="p"
              css={{ fontWeight: '700', fontSize: '11px', lineHeight: '4', color: '$blue8', fontFamily: '$neuewide' }}
            >
              NEXT.start in use.
            </Text>
          </Container>
        </Section>

        {/* <!-- SHOWCASE ONE --> */}
        <Container size="3" css={{}}>
          <ShowcaseComp>
            <HeadingBox>
              <Heading
                css={{
                  fontSize: '26px',
                  fontWeight: '600',
                  color: '#FFF',

                  '@sm': {
                    fontSize: '22px',
                  },
                }}
              >
                <span>Showcase One</span>
              </Heading>
            </HeadingBox>

            <Box css={{ borderRadius: '26px', zIndex: '5', overflow: 'hidden' }}>
              {/* <!--
              <Image
                className="rep__image"
                src={repoShareImage}
                layout="fill"
                objectFit="cover"
                alt="image"
                objectPosition="absolute"
              />
              */}

              <Image
                className="repo__image"
                src={repoShareImage}
                objectFit="cover"
                layout="fill"
                objectPosition="absolute"
                alt="One"
              />
            </Box>
          </ShowcaseComp>
        </Container>
      </Box>
    </Box>
  );
};

export default Showcase;
