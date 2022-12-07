import NextImage from 'next/image' // builtin image optimizer that do a lot of compression

import NextLink from 'next/link'

import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/layout"

import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from 'react-icons/md'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const Sidebar = () => {
  return (
    <Box 
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          {/* we style it like this (curly braces) because it's not ChakraUI related stuff */}
          <NextImage src="/logo.svg" height={60} width={120} alt={''}/> 
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {/* TODO - rethink components in this project and made them atomic design */}
            {/* map with explicit invoke (so we dont need to use return keyword) */}
            {navMenu.map(menu => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar