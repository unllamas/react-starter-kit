import { NostrHooksContextProvider } from 'nostr-hooks';

import { ThemeProvider } from '@/components/theme';

import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App = () => {
  return (
    <NostrHooksContextProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </ThemeProvider>
    </NostrHooksContextProvider>
  );
};
