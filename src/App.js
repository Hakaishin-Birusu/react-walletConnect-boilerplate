import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Dash from './components/dash';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Dash />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
