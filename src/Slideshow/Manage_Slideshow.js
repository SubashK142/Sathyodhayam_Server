import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "@firebase/firestore";
import { db } from '../Firebase/firebase';
import '../News_feeds/manage_news.css';

const SlideshowList = () => {
  const [feeds, setFeeds] = useState([]);
  const [editingFeed, setEditingFeed] = useState(null);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "slideshow"));
      const feedsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeeds(feedsData);
    } catch (error) {
      console.error('Error fetching slideshow:', error);
    }
  };

  const handleEdit = (feed) => {
    setEditingFeed(feed);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this feed?')) {
      try {
        await deleteDoc(doc(db, "slideshow", id));
        fetchFeeds(); // Refresh feeds list
      } catch (error) {
        console.error('Error deleting slideshow:', error);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { id, thumbnail, Image_Link } = editingFeed;

    try {
      const feedDoc = doc(db, "slideshow", id);
      await updateDoc(feedDoc, { thumbnail, Image_Link });
      fetchFeeds(); // Refresh feeds list
      setEditingFeed(null);
    } catch (error) {
      console.error('Error updating slideshow:', error);
    }
  };

  return (
    <div className="feeds-container">
      <h1>Slideshow List</h1>
      <table className="feeds-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feeds.map(feed => (
            <tr key={feed.id}>
              <td>{feed.id}</td>
              <td><a href={feed.Image_Link} target="_blank" rel="noopener noreferrer">Watch Video</a></td>
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
                <label htmlFor="Image_link">Image Link:</label>
                <input
                  type="url"
                  id="Image_Link"
                  value={editingFeed.Image_Link}
                  onChange={(e) => setEditingFeed({ ...editingFeed, Image_Link: e.target.value })}
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

export default SlideshowList;
