import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '@/app/dashboard/page';
import Login from '@/app/login/page';

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
