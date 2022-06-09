import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Navbar } from '@/ui/Navbar';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

// APP BEGIN / HOMEPAGE
const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box>
          <Link href="/" passHref>
            <a>
              <Heading css={{ fontSize: '24px', fontWeight: '700' }}>⬅︎ Back</Heading>
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
