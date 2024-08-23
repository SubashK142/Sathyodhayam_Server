import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "@firebase/firestore";
import { db } from '../Firebase/firebase';
import '../News_feeds/manage_news.css';

const UserList = () => {
  const [feeds, setFeeds] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    userType: '',
    totalMeditation: '',
    performance: '',
    gender: '',
    mobile: '',
    address: '',
  });

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Users"));
      const feedsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeeds(feedsData);
    } catch (error) {
      console.error('Error fetching feeds:', error);
    }
  };

  const handleEdit = (feed) => {
    setFormData(feed);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this feed?')) {
      try {
        await deleteDoc(doc(db, "Users", id));
        fetchFeeds(); // Refresh feeds list
      } catch (error) {
        console.error('Error deleting feed:', error);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { id, name, email, userType, totalMeditation, performance, gender, mobile, address } = formData;

    try {
      const feedDoc = doc(db, "Users", id);
      await updateDoc(feedDoc, { name, email, userType, totalMeditation, performance, gender, mobile, address });
      fetchFeeds(); // Refresh feeds list
      setFormData({
        id: '',
        name: '',
        email: '',
        userType: '',
        totalMeditation: '',
        performance: '',
        gender: '',
        mobile: '',
        address: '',
      });
    } catch (error) {
      console.error('Error updating feed:', error);
    }
  };

  return (
    <div className="feeds-container">
      <h1>Users List</h1>
      <table className="feeds-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Total Meditation</th>
            <th>Performance</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feeds.map(feed => (
            <tr key={feed.id}>
              <td>{feed.id}</td>
              <td>{feed.name}</td>
              <td>{feed.email}</td>
              <td>{feed.userType}</td>
              <td>{feed.totalMeditation}</td>
              <td>{feed.performance}</td>
              <td>{feed.gender}</td>
              <td>{feed.mobile}</td>
              <td>{feed.address}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(feed)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(feed.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {formData.id && (
        <div className="popup-container">
          <div className="popup-form">
            <h2>Edit Feed</h2>
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="userType">User Type:</label>
                <input
                  type="text"
                  id="userType"
                  value={formData.userType}
                  onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalMeditation">Total Meditation:</label>
                <input
                  type="text"
                  id="totalMeditation"
                  value={formData.totalMeditation}
                  onChange={(e) => setFormData({ ...formData, totalMeditation: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="performance">Performance:</label>
                <input
                  type="text"
                  id="performance"
                  value={formData.performance}
                  onChange={(e) => setFormData({ ...formData, performance: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="update-btn">Update</button>
                <button type="button" className="cancel-btn" onClick={() => setFormData({
                  id: '',
                  name: '',
                  email: '',
                  userType: '',
                  totalMeditation: '',
                  performance: '',
                  gender: '',
                  mobile: '',
                  address: '',
                })}>Cancel</button>
              </div>
            </form>
          </div>
          <div className="dim-background" onClick={() => setFormData({
            id: '',
            name: '',
            email: '',
            userType: '',
            totalMeditation: '',
            performance: '',
            gender: '',
            mobile: '',
            address: '',
          })}></div>
        </div>
      )}
    </div>
  );
};

export default UserList;
