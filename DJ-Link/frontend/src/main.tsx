import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles.css';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import DjBankHome from './screens/DjBankHome';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      {/* 실제 서비스로 오인되지 않도록 모든 화면에 표시하는 시연용 표시 */}
      <div style={{ position: 'fixed', left: 12, bottom: 12, zIndex: 9999, padding: '4px 10px', borderRadius: 12, background: 'rgba(17,17,17,0.72)', color: '#fff', fontSize: 12, pointerEvents: 'none' }}>
        DJ Link 프로토타입 · 시연용 (실제 WEHAGO 아님)
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Dashboard />} />
        <Route path="/djbank" element={<DjBankHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
