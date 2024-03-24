import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    data: ''
  });

  useEffect(() => {
    fetchAnnouncements();
  }, []); // Fetch announcements on component mount

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/announcements');
      setAnnouncements(response.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewAnnouncement({ ...newAnnouncement, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/announcements', newAnnouncement);
      console.log(response.data);
      setShowAddDialog(false);
      setNewAnnouncement({
        title: '',
        data: ''
      });
      fetchAnnouncements(); // Refresh announcements after adding a new one
    } catch (error) {
      console.error('Error adding announcement:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Announcements</h2>
          </div>
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div key={index} className="bg-white shadow-sm rounded-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{announcement.title}</h3>
                  <p className="text-gray-600">{announcement.data}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowAddDialog(true)}
            className="daisy-btn daisy-btn-primary w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          >
            Add Announcement
          </button>
        </div>
      </div>
      {showAddDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Add Announcement</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newAnnouncement.title}
                  onChange={handleInputChange}
                  className="daisy-input w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="data" className="block text-sm font-medium text-gray-700">Data</label>
                <textarea
                  id="data"
                  name="data"
                  value={newAnnouncement.data}
                  onChange={handleInputChange}
                  className="daisy-textarea w-full"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="daisy-btn daisy-btn-primary">Submit</button>
                <button onClick={() => setShowAddDialog(false)} className="ml-2 daisy-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcements;
