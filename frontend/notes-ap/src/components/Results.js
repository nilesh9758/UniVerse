import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = () => {
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [semesterResult, setSemesterResult] = useState('');
  const [courseResult, setCourseResult] = useState('');
  const [courses, setCourses] = useState([]);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [uploadType, setUploadType] = useState('');
  const [studentRoll, setStudentRoll] = useState('');
  const [studentSGPA, setStudentSGPA] = useState('');

  useEffect(() => {
    if (semester) {
      fetchCourses();
    }
  }, [semester]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/semester?semid=${semester}`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSemesterSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/result?semester=${semester}`);
      const gp = response.data.sgpa;
      setSemesterResult(gp);
    } catch (error) {
      setSemesterResult("Yet To Be Uploaded");
      console.error('Error fetching semester result:', error);
    }
  };

  const handleCourseResultSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/result/course?course=${course}`);
      console.log(response.data);
      setCourseResult(response.data.gpa);
    } catch (error) {
      setCourseResult("Yet To Be Uploaded");
      console.error('Error fetching course result:', error);
    }
  };

  const handleUploadDialogOpen = () => {
    setShowUploadDialog(true);
  };

  const handleUploadDialogClose = () => {
    setShowUploadDialog(false);
  };

  const handleUploadTypeSelect = (type) => {
    setUploadType(type);
  };

  const handleSubmit = async () => {
    if (uploadType === 'semester') {
      try {
        const response = await axios.post('http://localhost:5000/result', {
          rollNo: studentRoll,
          semester: semester,
          sgpa: studentSGPA
        });
        console.log('Semester result uploaded successfully:', response.data);
        // Refresh the page or update the UI accordingly
      } catch (error) {
        console.error('Error uploading semester result:', error);
      }
    } else if (uploadType === 'course') {
      try {
        const response = await axios.post('http://localhost:5000/result/course', {
          rollNo: studentRoll,
          semester: semester,
          course: course,
          gpa: studentSGPA
        });
        console.log('Course result uploaded successfully:', response.data);
        // Refresh the page or update the UI accordingly
      } catch (error) {
        console.error('Error uploading course result:', error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">View Your Result</h1>

      {/* Semester-wise Results */}
      <div className="flex space-x-4 mb-8">
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1"
        >
          <option value="">Select Semester</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
          <option value="5">Semester 5</option>
          <option value="6">Semester 6</option>
          <option value="7">Semester 7</option>
          <option value="8">Semester 8</option>
        </select>
        <button
          onClick={handleSemesterSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
      <div>
        {semesterResult && <p>{semesterResult}</p>}
      </div>

      {/* Course-wise Results */}
      <div className="flex space-x-4 mb-8">
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1"
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.title}>{course.title}</option>
          ))}
        </select>
        <button
          onClick={handleCourseResultSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </div>
      <div>
        {courseResult && <p>{courseResult}</p>}
      </div>

      {/* Upload Results */}
      <div className="flex justify-end">
        <button
          onClick={handleUploadDialogOpen}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Upload Results
        </button>
      </div>

      {/* Upload Dialog */}
      {showUploadDialog && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Select Result Type</h2>
            <button onClick={() => handleUploadTypeSelect('semester')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4">Semester Result</button>
            <button onClick={() => handleUploadTypeSelect('course')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Course Result</button>
            <div className="mt-4">
              {uploadType && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter Roll Number"
                    value={studentRoll}
                    onChange={(e) => setStudentRoll(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 mb-4"
                  />
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 mb-4"
                  >
                    <option value="">Select Semester</option>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                    <option value="4">Semester 4</option>
                    <option value="5">Semester 5</option>
                    <option value="6">Semester 6</option>
                    <option value="7">Semester 7</option>
                    <option value="8">Semester 8</option>
                  </select>

                  {uploadType === 'course' && (
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 mb-4"
                    >
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.title}>{course.title}</option>
                      ))}
                    </select>
                  )}

                  <input
                    type="number"
                    placeholder="Enter SGPA"
                    value={studentSGPA}
                    onChange={(e) => setStudentSGPA(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 mb-4"
                  />
                  <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4">Submit</button>
                  <button onClick={handleUploadDialogClose} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">Cancel</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
