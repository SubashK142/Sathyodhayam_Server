import React, { useState } from 'react';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../Firebase/firebase';  // Import the Firestore instance
import '../News_feeds/news_feed.css';
import { Link } from 'react-router-dom';

const SubmitUsers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    totalMeditation: '',
    performance: '',
    gender: '',
    mobile: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usersCollection = collection(db, "Users");  // Reference to your Firestore collection
      await addDoc(usersCollection, formData);  // Add the document to Firestore

      alert('Details submitted successfully!');
      setFormData({
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
      console.error('Error:', error);
      alert('An error occurred while submitting the details.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Submit User Details</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="userType" style={styles.label}>User Type:</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select User Type</option>
            <option value="Instructor">Instructor</option>
            <option value="Trainer">Trainer</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="totalMeditation" style={styles.label}>Total Meditation (number):</label>
          <input
            type="number"
            id="totalMeditation"
            name="totalMeditation"
            value={formData.totalMeditation}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="performance" style={styles.label}>Performance:</label>
          <input
            type="number"
            id="performance"
            name="performance"
            value={formData.performance}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="gender" style={styles.label}>Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="mobile" style={styles.label}>Mobile:</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <Link to='/manageusers'><button style={styles.link}>View All Users</button></Link>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    marginTop:'-40px',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: 'calc(100% - 20px)',
    padding: '4px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
    resize: 'vertical',
    height: '100px',
  },
  button: {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    textAlign: 'center',
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  }
};

export default SubmitUsers;
