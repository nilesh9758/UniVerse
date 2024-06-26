import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Announcements from '../components/Announcement';
import CourseContentPage from '../components/CourseContentPage';
import Dashboard from '../components/DashBoard';
import Layout from '../components/Layout';
import LinksPage from '../components/LinksPage';
import Login from '../components/Login';
import Notes from '../components/Notes';
import PYQS from '../components/Pyqs';
import Results from '../components/Results';
import SemesterDetails from '../components/SemesterDetails';
import SignUp from '../components/SignUp';
import StudyMaterials from '../components/StudyMaterials';
import EditProfile from '../components/edit_profile';

//app function starts
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or loading process
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds loading time
    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);

  return (
    <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/results" element={<Results />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/courses/:course_name" element={<CourseContentPage />} />
            <Route path="/notes/:semesterId" element={<SemesterDetails />} />
            <Route path="/courses/study_materials/:course_name" element={<StudyMaterials />} />
            <Route path="/courses/pyqs/:course_name" element={<PYQS />} />
            <Route path="/courses/video_links/:course_name" element={<LinksPage />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </Layout>
    
    </Router>
  );
};

export default App;
