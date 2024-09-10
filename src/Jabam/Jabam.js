import React, { useState } from 'react';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../Firebase/firebase';  // Import the Firestore instance
import '../News_feeds/news_feed.css';
import { Link } from 'react-router-dom';

const SubmitJabam = () => {
  const [formData, setFormData] = useState({
    image_link: '',
    title: '',
    time: '',
    music_Link: '',
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
      const voiceCollection = collection(db, "jabam");  // Reference to your Firestore collection
      await addDoc(voiceCollection, formData);  // Add the document to Firestore

      alert('new jabam submitted successfully!');
      setFormData({
        image_link: '',
        title: '',
        time: '',
        music_Link: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the voice.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Jabam Details</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="image_link" style={styles.label}>Image Link:</label>
          <input
            type="text"
            id="image_link"
            name="image_link"
            value={formData.image_link}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="time" style={styles.label}>Time (in minutes):</label>
          <input
            type="number"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="music_Link" style={styles.label}>Music Link:</label>
          <input
            type="text"
            id="music_Link"
            name="music_Link"
            value={formData.music_Link}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <Link to='/managejabam'><button style={styles.link}>View All Records</button></Link>
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

export default SubmitJabam;
