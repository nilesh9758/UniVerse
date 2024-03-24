// components/SemesterDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const SemesterDetails = () => {
  var { semesterId } = useParams();
  semesterId = semesterId.charAt(semesterId.length - 1);
 // const { semesterNumber } = useParams();
  const [semesterDetails, setSemesterDetails] = useState({
    "id": "semester1",
    "name": `Semester ${semesterId}`,
    "courses": [
      {
        "id": "course1",
        "name": "Course 1"
      },
      {
        "id": "course2",
        "name": "Course 2"
      },
      {
        "id": "course3",
        "name": "Course 3"
      }
    ]
  }
  );

  useEffect(() => {
    const fetchSemesterDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/semesters/${semesterId}`); // Replace URL with your backend endpoint
        setSemesterDetails(response.data);
      } catch (error) {
        console.error(`Error fetching details for semester ${semesterId}:`, error);
      }
    };

    fetchSemesterDetails();
  }, [semesterId]);


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{semesterDetails.name} Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {semesterDetails.courses.map(course => (
          <Link key={course.id} to={`/courses/${course.id}`} className="bg-white border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper velit eget erat pulvinar, vitae dapibus tortor fringilla.</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
};

export default SemesterDetails;
