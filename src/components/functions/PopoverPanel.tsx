// REACT IMPORTS
import { Fragment } from 'react';
import { useState } from 'react';

// Dependencies
import { Popover, Transition } from '@headlessui/react';
import { Cross as Hamburger } from 'hamburger-react';

// ATELIER® DESIGN SYSTEM
import { Link } from '@/system/link';
import { Text } from '@/system/text';
import { Box } from '@/system/box';
import { lime } from '@radix-ui/colors';

// Stitches
import { styled } from '@stitches/react';

// Navigation ( Map )...
const navigation = [
  {
    name: 'Home',
    description: '',
    href: '/',
    // icon: IconOne,
  },
  {
    name: 'Cover',
    description: '',
    href: '/cover',
    // icon: IconTwo,
  },
  {
    name: 'GitHub',
    description: '',
    href: 'https://github.com/chvndler',
    // icon: IconThree,
  },
];

// SubMenu ( Map )...
const submenu = [
  {
    name: 'Showcase →',
    href: '/showcase',
    // icon: IconThree,
  },
  {
    name: 'Learn More →',
    href: 'https://github.com/chvndler',
    // icon: IconThree,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/chv_ndler',
    // icon: IconOne,
  },
  {
    name: 'Are.na',
    href: 'https://www.are.na/chvndler-ch',
    // icon: IconThree,
  },
];

// DROPDOWN MENU STYLE
const Dropdown = styled('div', {
  zIndex: '9999',
  position: 'absolute',
  top: '10',
  right: '0',
  left: '0',
  backgroundColor: '$gray12',
  backdropFilter: 'blur(18px)',
  saturate: '180%',
  boxShadow: '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px',

  minHeight: '60vh',
  height: 'auto',
  width: 'auto',
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingBottom: '30vh',
  paddingTop: '35px',
  marginTop: '15px',
  marginRight: '10px',
  marginLeft: '10px',

  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
});

// MENU LINK PLACEMENT
const MenuBox = styled('div', {
  width: '100%',
  position: 'relative',
  marginTop: '5px',
  marginBottom: '5px',
});

// MENU LINK STYLING
const MenuLink = styled('div', {
  fontSize: '26px',
  fontFamily: '$inter',
  fontWeight: '900',
  color: '$slate1',
  lineHeight: '1',
  letterSpacing: '-0.03rem',
  marginTop: '5px',
  marginBottom: '5px',
  '&:hover': {
    color: '$gray10',
  },
});

// MENU LINK PLACEMENT
const SubMenuContainer = styled('div', {
  width: '100%',
  height: 'auto',
  position: 'relative',
  marginTop: '35px',
  marginLeft: '0px',
  marginRight: '0px',
  marginBottom: '25px',
  paddingTop: '10px',
  // backgroundColor: '$blue5',

  // border: '2px solid $slate4',
  borderTopWidth: '0px',
  borderBottomWidth: '0px',
  borderLeftWidth: '0px',
  borderRightWidth: '0px',
});

// MENU LINK PLACEMENT
const SubMenuBox = styled('div', {
  width: '100%',
  position: 'relative',
  marginTop: '12px',
  marginBottom: '12px',
});

// MENU LINK STYLING
const SubMenuLink = styled('div', {
  fontSize: '12px',
  fontFamily: '$inter',
  fontWeight: '600',
  color: '$gray9',
  lineHeight: '0.8',
  letterSpacing: '0.03rem',
  margin: 'auto',
  // textTransform: 'uppercase',

  '&:hover': {
    color: '$gray10',
  },
});

// PopOver Component...
export const PopoverPanel = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button as="a">
              <Box
                css={{
                  display: 'none',
                  '@sm': {
                    display: 'block',
                  },
                }}
              >
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  size={20}
                  direction="right"
                  duration={0.4}
                  distance="sm"
                  color="gray"
                  hideOutline={true}
                />
              </Box>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-800"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              {/* <!-- Begin Panel --> */}
              <Popover.Panel as="div">
                <Dropdown>
                  {/* <!-- Main Navigation --> */}
                  <div>
                    <div>
                      {navigation.map(item => (
                        <a key={item.name} href={item.href}>
                          <MenuBox>
                            <MenuLink>{item.name}</MenuLink>
                            <p>{item.description}</p>
                          </MenuBox>
                        </a>
                      ))}
                    </div>
                    {/* <!-- END Main Navigation --> */}

                    {/* <!-- SubMenu Navigation --> */}
                    <SubMenuContainer>
                      {submenu.map(item => (
                        <a key={item.name} href={item.href}>
                          <SubMenuBox>
                            <SubMenuLink>{item.name}</SubMenuLink>
                          </SubMenuBox>
                        </a>
                      ))}
                    </SubMenuContainer>
                    {/* <!-- END!! SubMenu Navigation --> */}

                    {/* <!-- Menu Footer --> */}
                    <Box css={{ position: 'absolute', bottom: '0', paddingBottom: '30px' }}>
                      <Text size="1" css={{ fontFamily: '$neuewide', fontWeight: '800', color: '$slate1' }}>
                        <span>ATELIER®</span>
                      </Text>

                      <Text
                        css={{
                          fontFamily: '$inter',
                          fontSize: '10px',
                          fontWeight: '500',
                          letterSpacing: '-0.03rem',
                          color: '$slate1',

                          paddingTop: '4px',
                        }}
                      >
                        <span>© 2022 All Rights Reserved.</span>
                      </Text>
                    </Box>
                    {/* <!-- End Menu Footer --> */}
                  </div>
                </Dropdown>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

/*
// We can add Icons here to use in ( Map )...
// ICON ONE
function IconOne() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#FB923C" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

// ICON TWO
function IconTwo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

// ICON THREE
function IconThree() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

*/
