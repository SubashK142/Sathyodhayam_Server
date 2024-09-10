import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "@firebase/firestore";
import { db } from '../Firebase/firebase';
import '../News_feeds/manage_news.css';

const JabamList = () => {
  const [feeds, setFeeds] = useState([]);
  const [editingFeed, setEditingFeed] = useState(null);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jabam"));
      const feedsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeeds(feedsData);
    } catch (error) {
      console.error('Error fetching jabam:', error);
    }
  };

  const handleEdit = (feed) => {
    setEditingFeed(feed);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this jabam?')) {
      try {
        await deleteDoc(doc(db, "jabam", id));
        fetchFeeds(); // Refresh feeds list
      } catch (error) {
        console.error('Error deleting jabam:', error);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { id, image_link, title, time, music_Link } = editingFeed;

    try {
      const feedDoc = doc(db, "jabam", id);
      await updateDoc(feedDoc, { image_link, title, time, music_Link });
      fetchFeeds(); // Refresh feeds list
      setEditingFeed(null);
    } catch (error) {
      console.error('Error updating jabam:', error);
    }
  };

  return (
    <div className="feeds-container">
      <h1>Jabam List</h1>
      <table className="feeds-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Time (min)</th>
            <th>Music</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feeds.map(feed => (
            <tr key={feed.id}>
              <td>{feed.id}</td>
              <td>{feed.title}</td>
              <td><img src={feed.image_link} alt={feed.title} width="100" /></td>
              <td>{feed.time}</td>
              <td><audio controls src={feed.music_Link}>Your browser does not support the audio element.</audio></td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(feed)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(feed.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingFeed && (
        <div className="popup-container">
          <div className="popup-form">
            <h2>Edit Feed</h2>
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  value={editingFeed.title}
                  onChange={(e) => setEditingFeed({ ...editingFeed, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image_link">Image Link:</label>
                <input
                  type="text"
                  id="image_link"
                  value={editingFeed.image_link}
                  onChange={(e) => setEditingFeed({ ...editingFeed, image_link: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time (in minutes):</label>
                <input
                  type="number"
                  id="time"
                  value={editingFeed.time}
                  onChange={(e) => setEditingFeed({ ...editingFeed, time: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="music_Link">Music Link:</label>
                <input
                  type="text"
                  id="music_Link"
                  value={editingFeed.music_Link}
                  onChange={(e) => setEditingFeed({ ...editingFeed, music_Link: e.target.value })}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="update-btn">Update</button>
                <button type="button" className="cancel-btn" onClick={() => setEditingFeed(null)}>Cancel</button>
              </div>
            </form>
          </div>
          <div className="dim-background" onClick={() => setEditingFeed(null)}></div>
        </div>
      )}
    </div>
  );
};

export default JabamList;
