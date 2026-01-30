import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login1 } from './pages/Login1';

// Lazy load other pages when implemented
const Signup1 = React.lazy(() => import('./pages/Login1').then(module => ({ default: module.Login1 }))); // Placeholder

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-1" element={<Login1 />} />
          <Route path="/signup-1" element={<Signup1 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;