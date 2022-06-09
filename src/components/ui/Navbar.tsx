import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';
import { NewLink } from '@/system/newlink';

// FUNCTIONS
import { ThemeSwitch } from '@/functions/ThemeSwitch';
import { PopoverPanel } from '@/functions/PopoverPanel';

export const Navbar = () => {
  return (
    <>
      <Flex
        as="header"
        css={{
          py: '0px',
          px: '5px',
          height: '48px',
          jc: 'space-between',
          position: 'fixed',
          margin: '0',
          backgroundColor: '$light100',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          saturate: '300%',
          zIndex: '9999',
        }}
      >
        {/* <!-- LOGO SECTION --> */}
        <Link href="/" passHref>
          <Box
            as="a"
            css={{
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}
          >
            <Text
              css={{
                zIndex: '999',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700',
                fontSize: '18px',
                color: '$gray12',
                lineHeight: '48px',
                letterSpacing: '-0.03rem',
              }}
            >
              NEXT.Start
            </Text>
          </Box>
        </Link>

        {/* NAVIGATION SECTION */}
        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            '@sm': {
              display: 'none',
            },
          }}
        >
          <Link href="/next" passHref>
            <NewLink variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              NextPage
            </NewLink>
          </Link>

          <Link href="/showcase" passHref>
            <NewLink variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Showcase
            </NewLink>
          </Link>

          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
              }}
            >
              Cover
            </NewLink>
          </Link>
        </Flex>
        {/* <!-- JSX ELEMENT --> */}

        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
          {/* <!-- THEME SWITCH --> */}
          <ThemeSwitch />

          {/* <!-- JSX ELEMENT --> */}
          <Link href="/" passHref>
            <NewLink
              variant="subtle"
              css={{
                fontSize: '13px',
                color: '$gray12',
                border: '0px solid $crimson9',
                borderRadius: '6px',
                paddingTop: '6px',
                paddingBottom: '6px',
                paddingLeft: '10px',
                paddingRight: '10px',
                mr: '$3',
                '@sm': { display: 'none', mr: '$3' },
                '&:hover': { cursor: 'pointer' },
              }}
            >
              Login
            </NewLink>
          </Link>
          {/* <!-- -->*/}

          <PopoverPanel />
        </Flex>
      </Flex>
    </>
  );
};
