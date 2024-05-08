'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { PropsWithChildren, useState } from 'react';
//ReactQueryProvider design to provide instance of the QueryClient
//You Can Wrap the deep components that it can use of QueryClient
//In NEXT.JS 14 is better to use in main layout.tsx file
function ReactQueryProvider({ children }: PropsWithChildren) {
  // create instace of client
  const [client] = useState(new QueryClient());

  //return QueryClient Provider
  return (
    <QueryClientProvider client={client}>
      {children}

      {/* turn on ReactQueryDevtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
