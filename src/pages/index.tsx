import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@/system/box';
import nextStartLogo from '@/public/NEXT.start-dark.svg';
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
    <Box css={{ minWidth: '100vw' }}>
      <Navbar />
      <Container>
        <Box>
          <Link href="/next">
            <a>
              <Image src={nextStartLogo} alt="NEXT.start" width="200" height="40" />
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
