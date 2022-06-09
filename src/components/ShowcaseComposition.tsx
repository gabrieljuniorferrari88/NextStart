import { Box } from '@/system/box';
import { Container } from '@/system/container';
import { Grid } from '@/system/grid';
import { Text } from '@/system/text';
import { Heading } from '@/system/heading';
import { Button } from '@/system/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';

export const ShowcaseComp = ({ children }) => {
  return (
    <Box css={{ bc: '$translucent' }}>
      <Container size="3" css={{ px: '0px', py: '20px', bc: '$translucent', position: 'relative' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '$2',
            bc: '$translucent',
            br: '26px',
            px: '0px',
            border: '3px solid',
            borderColor: '$slate6',
            zIndex: '20',
            position: 'relative',
          }}
        >
          <Box
            css={{
              backgroundColor: '$translucent',
              height: '400px',
              width: '100%',
              position: 'relative',
              padding: '0',
              margin: '0',
              zIndex: '100',
              saturate: '200%',
            }}
          >
            {children}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
