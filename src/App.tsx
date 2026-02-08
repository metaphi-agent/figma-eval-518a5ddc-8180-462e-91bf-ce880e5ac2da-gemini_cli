import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login1 } from './pages/Login1';

// Lazy load other pages
const Signup1 = React.lazy(() => import('./pages/Signup1').then(module => ({ default: module.Signup1 })));
const Signup2 = React.lazy(() => import('./pages/Signup2').then(module => ({ default: module.Signup2 })));
const Signup3 = React.lazy(() => import('./pages/Signup3').then(module => ({ default: module.Signup3 })));
const Login2 = React.lazy(() => import('./pages/Login2').then(module => ({ default: module.Login2 })));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword').then(module => ({ default: module.ForgotPassword })));
const ForgotPasswordCode = React.lazy(() => import('./pages/ForgotPasswordCode').then(module => ({ default: module.ForgotPasswordCode })));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword').then(module => ({ default: module.ResetPassword })));
const PasswordChanged = React.lazy(() => import('./pages/PasswordChanged').then(module => ({ default: module.PasswordChanged })));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-1" element={<Login1 />} />
          <Route path="/signup-1" element={<Signup1 />} />
          <Route path="/signup-2" element={<Signup2 />} />
          <Route path="/signup-3" element={<Signup3 />} />
          <Route path="/login-2" element={<Login2 />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/password-changed" element={<PasswordChanged />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;