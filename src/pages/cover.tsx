import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/system/heading';
import { Box } from '@/system/box';
import nextStartLogo from '@/public/NEXT.start-dark.svg';
import { Navbar } from '@/ui/Navbar';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  bc: '$translucent',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  zIndex: '20',
});

// APP BEGIN / HOMEPAGE
const Cover = () => {
  return (
    <Box css={{ minWidth: '100vw', minHeight: '100vh', zIndex: '0' }}>
      <Navbar />
      <Container>
        <Box css={{ zIndex: '25' }}>
          <Heading css={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700' }}>Cover Page</Heading>

          <Link href="/" passHref>
            <a>
              <Heading
                css={{
                  paddingTop: '10px',
                  textAlign: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                go back home
              </Heading>
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Cover;
