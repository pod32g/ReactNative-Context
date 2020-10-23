/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ThemeProvider } from './src/Context/Theme/ThemeProvider';
import { MainView } from './src/Views';

const App = () => {
  return (
    <ThemeProvider>
      <MainView />
    </ThemeProvider>
  );
};

export default App;
