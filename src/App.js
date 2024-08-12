import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Scanner from './components/Scanner';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <AppContainer>
          <Sidebar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/scanner" element={<Scanner />} />
            </Routes>
          </ContentContainer>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
