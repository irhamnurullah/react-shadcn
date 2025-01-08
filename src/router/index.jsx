import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '@/app/dashboard/page';
import Login from '@/app/login/page';
import EntryPage from '@/app/entry/page';

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
