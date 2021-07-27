import '../styles/globals.scss';

import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Layout from '../components/Layout/Layout';
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
};
const theme = extendTheme({ colors });


/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = ['/', '/sign-in/[[...index]]', '/sign-up/[[...index]]', '/practice', '/test'];

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    /**
   * If the current route is listed as public, render it directly.
   * Otherwise, use Clerk to require authentication.
   */
    return (
        <ClerkProvider
            frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
            navigate={(to) => router.push(to)}
        >
            <ChakraProvider theme={theme}>
                <Layout>
                    {publicPages.includes(router.pathname) ? (
                        <Component {...pageProps} />
                    ) : (
                        <>
                            <SignedIn>
                                <Component {...pageProps} />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    )}
                </Layout>
            </ChakraProvider>
        </ClerkProvider>
    );
};

export default MyApp;
