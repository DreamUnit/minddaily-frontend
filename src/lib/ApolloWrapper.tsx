'use client';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { setContext } from '@apollo/client/link/context';

const forwardCookieLink = setContext(async () => {
  return import('next/headers').then(({ cookies }) => {
    return {
      headers: {
        cookie: cookies()
          .getAll()
          .map(({ name, value }) => `${name}=${value}`)
          .join(';'),
      },
    };
  });
});

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.APP_SERVER_URL,
    fetchOptions: { cache: 'no-store' },
    credentials: 'include',
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            forwardCookieLink,
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
