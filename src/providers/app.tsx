import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Button, Spinner } from '@/components/Elements';
import { queryClient } from '@/lib/react-query';
import { index } from '@/store';

const ErrorFallback = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={index}>
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            <Spinner size="xl" />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
              <Router>{children}</Router>
            </QueryClientProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </React.Suspense>
    </Provider>
  );
};
