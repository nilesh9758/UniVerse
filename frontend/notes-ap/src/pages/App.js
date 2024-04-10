// src/pages/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Dashboard from '../components/DashBoard';
import Results from '../components/Results';
import Announcements from '../components/Announcement';
import 'tailwindcss/tailwind.css';
import Notes from '../components/Notes';
import SemesterDetails from '../components/SemesterDetails';
import Layout from '../components/Layout';
import CoursePage from '../components/CoursePage';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/results" element={<Results />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/notes/:semesterId" element={<SemesterDetails />} />
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
