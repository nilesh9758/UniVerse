import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true
const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    body: '',
    date: new Date().toISOString().split('T')[0] // Initialize date with today's date
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
      setShowAddDialog(false);
      setNewAnnouncement({
        title: '',
        body: '',
        date: new Date().toISOString().split('T')[0] // Reset date to today's date
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
                  <p className="text-gray-600">{announcement.body}</p>
                  <p className="text-gray-500">Date: {new Date(announcement.date).toLocaleDateString()}</p>
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
                <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
                <textarea
                  id="body"
                  name="body"
                  value={newAnnouncement.body}
                  onChange={handleInputChange}
                  className="daisy-textarea w-full"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={newAnnouncement.date}
                  onChange={handleInputChange}
                  className="daisy-input w-full"
                  required
                />
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
