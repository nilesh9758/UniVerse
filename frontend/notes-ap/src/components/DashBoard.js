import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-4 px-6 text-center text-2xl font-bold">
        A One Stop Solution For All Your Academic Needs
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Dashboard</h2>
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            <Link
              to="/announcements"
              className="daisy-btn daisy-btn-primary w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              View Announcements
            </Link>
            <Link
              to="/notes"
              className="daisy-btn daisy-btn-primary w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Notes
            </Link>
            <Link
              to="/results"
              className="daisy-btn daisy-btn-primary w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Results
            </Link>
            <Link
              to="/edit-profile"
              className="daisy-btn daisy-btn-primary w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
