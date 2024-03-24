import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { courseId } = useParams();
  const [courseName, setCourseName] = useState('');
  const [studyMaterials, setStudyMaterials] = useState([
    { id: 'material1', name: 'Study Material 1' },
    { id: 'material2', name: 'Study Material 2' },
    { id: 'material3', name: 'Study Material 3' }
  ]);
  const [videoLinks, setVideoLinks] = useState([
    { id: 'link1', name: 'Video Link 1' },
    { id: 'link2', name: 'Video Link 2' },
    { id: 'link3', name: 'Video Link 3' }
  ]);
  const [pyqs, setPyqs] = useState([
    { id: 'pyq1', name: 'PYQ 1' },
    { id: 'pyq2', name: 'PYQ 2' },
    { id: 'pyq3', name: 'PYQ 3' }
  ]);

  useEffect(() => {
    // Fetch course details from the backend
    const fetchCourseDetails = async () => {
      try {
        // Simulate fetching course details from the backend using courseId
        // const response = await axios.get(`http://localhost:5000/courses/${courseId}`);
        // setCourseName(response.data.courseName);

        // For demonstration purposes, set a dummy course name
        setCourseName(`Course ${courseId}`);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleDownload = (documentId, type) => {
    // Implement download logic here
    console.log(`Downloading ${type} with ID: ${documentId}`);
  };

  const handleView = (documentId, type) => {
    // Implement view logic here
    console.log(`Viewing ${type} with ID: ${documentId}`);
  };

  const handleGoToLink = (linkId) => {
    // Implement navigation logic to the video link here
    console.log(`Navigating to Video Link with ID: ${linkId}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">{courseName}</h1>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Study Materials</h2>
          <div>
            <details className="dropdown">
              <summary className="m-1 btn w-full bg-blue-500 text-white font-semibold rounded-md py-3 px-6 flex justify-between items-center">
                <span className="text-xl">Study Materials</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="p-4 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-full">
                {studyMaterials.map((material) => (
                  <li key={material.id}>
                    <div className="flex justify-between items-center">
                      <span className="text-xl">{material.name}</span>
                      <div>
                        <button className="btn btn-outline btn-sm mr-2" onClick={() => handleDownload(material.id, 'Study Material')}>Download</button>
                        <button className="btn btn-primary btn-sm" onClick={() => handleView(material.id, 'Study Material')}>View</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Video Links</h2>
          <div>
            <details className="dropdown">
              <summary className="m-1 btn w-full bg-blue-500 text-white font-semibold rounded-md py-3 px-6 flex justify-between items-center">
                <span className="text-xl">Video Links</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="p-4 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-full">
                {videoLinks.map((link) => (
                  <li key={link.id}>
                    <div className="flex justify-between items-center">
                      <span className="text-xl">{link.name}</span>
                      <button className="btn btn-primary btn-sm" onClick={() => handleGoToLink(link.id)}>Go to Link</button>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">PYQs</h2>
          <div>
            <details className="dropdown">
              <summary className="m-1 btn w-full bg-blue-500 text-white font-semibold rounded-md py-3 px-6 flex justify-between items-center">
                <span className="text-xl">PYQs</span>
                <svg xmlns="http://www          <w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="p-4 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-full">
                {pyqs.map((pyq) => (
                  <li key={pyq.id}>
                    <div className="flex justify-between items-center">
                      <span className="text-xl">{pyq.name}</span>
                      <div>
                        <button className="btn btn-outline btn-sm mr-2" onClick={() => handleDownload(pyq.id, 'PYQ')}>Download</button>
                        <button className="btn btn-primary btn-sm" onClick={() => handleView(pyq.id, 'PYQ')}>View</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;

