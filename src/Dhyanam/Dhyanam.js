import React, { useState } from 'react';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../Firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Firebase Storage imports
import { storage } from '../Firebase/firebase'; 
import '../News_feeds/news_feed.css';
import { Link } from 'react-router-dom';

const SubmitDhyanam = () => {
  const [formData, setFormData] = useState({
    title: '',
    time: '',
    music_File: null,
  });
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.name === 'music_File') {
      setFormData({
        ...formData,
        music_File: e.target.files[0],  // Capture the MP3 file
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.music_File) {
      try {
        const musicRef = ref(storage, `music/${formData.music_File.name}`);
        const uploadTask = uploadBytesResumable(musicRef, formData.music_File);
        
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error('Error uploading file:', error);
            alert('Error uploading MP3 file');
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            // Now submit the form data along with the MP3 file URL to Firestore
            const jabamCollection = collection(db, 'dhyanam');
            await addDoc(jabamCollection, {
              title: formData.title,
              time: formData.time,
              music_Link: downloadURL,  // Store the MP3 file URL in Firestore
            });

            alert('New Dhyanam submitted successfully!');
            setFormData({
              title: '',
              time: '',
              music_File: null,
            });
            setUploadProgress(0);
          }
        );
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the jabam.');
      }
    } else {
      alert('Please select an MP3 file');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dhyanam Details</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
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
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select Time</option>
            <option value="9">9 minutes</option>
            <option value="13">13 minutes</option>
            <option value="19">19 minutes</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="music_File" style={styles.label}>Upload MP3:</label>
          <input
            type="file"
            id="music_File"
            name="music_File"
            accept="audio/mp3"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        {uploadProgress > 0 && (
          <div style={styles.progress}>
            Upload Progress: {Math.round(uploadProgress)}%
          </div>
        )}
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <Link to='/managedhyanam'><button style={styles.link}>View All Records</button></Link>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    marginTop: '-40px',
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
  },
  progress: {
    marginBottom: '15px',
    color: '#28a745',
  },
};

export default SubmitDhyanam;
