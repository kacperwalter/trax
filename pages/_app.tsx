// course materials: https://tinted-gym-f99.notion.site/Fullstack-course-notes-Students-3202660c315b438aba6c1ae051963572

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import 'reset-css'
import PlayerLayout from '../components/playerLayout'
import type { AppProps } from 'next/app'

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121"
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none'
          }
        }
      }
    }
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  )
}

export default App