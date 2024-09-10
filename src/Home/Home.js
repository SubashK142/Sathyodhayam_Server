import React from 'react';
import { Link } from 'react-router-dom';
import JabamList from './../Jabam/Manage_jabam';

const ThreeColumnLayout = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Data Management</h1>
      </header>
      <div style={styles.columnContainer}>
        <div style={styles.column}>
          <h2 style={styles.heading}>Tables</h2>
          <button style={styles.buttonLink}>Users</button>
          <button style={styles.buttonLink}>News_feeds</button>
          <button style={styles.buttonLink}>Voice</button>
          <button style={styles.buttonLink}>Mediation</button>
          <button style={styles.buttonLink}>Slideshow</button>
          <button style={styles.buttonLink}>Jabam</button>
        </div>

        <div style={styles.column}>
          <h2 style={styles.heading}>New Data</h2>
          <Link to='/users' style={{textDecoration:'none'}}>
            <button style={styles.button}>Add New Data in Users</button>
          </Link>
          <Link to='/newsfeed' style={{textDecoration:'none'}}>
            <button style={styles.button}>Add New Data in News_feeds</button>
          </Link>
          <Link to='/voice' style={{textDecoration:'none'}}>
          <button style={styles.button}>Add New Data in voice_masterji</button>
          </Link>

          <Link style={{textDecoration:'none'}} to='/meditation'>
          <button style={styles.button}  >Add New Data in Mediation</button>
          </Link>

          <Link style={{textDecoration:'none'}} to='/slideshow'>
          <button style={styles.button}  >Add New Data in slideshow</button>
          </Link>
          <Link style={{textDecoration:'none'}} to='/jabam'>
          <button style={styles.button}  >Add New Data in Jabam</button>
          </Link>
        </div>

        <div style={styles.column}>
          <h2 style={styles.heading}>Manage Data</h2>
          <Link to='/manageusers' style={{textDecoration:'none'}}>
            <button style={styles.button}>Manage data in Users</button>
          </Link>
          <Link to='/managenewsfeed' style={{textDecoration:'none'}}>
            <button style={styles.button}>Manage data in News_feeds</button>
          </Link>
          <Link to='/managevoice' style={{textDecoration:'none'}}>
          <button style={styles.button}>Manage data in voice_masterji</button>
          </Link>
          <Link to='/managemeditation' style={{textDecoration:'none'}}>
          <button  style={styles.button}>Manage Data in Mediation</button>
          </Link>

          <Link to='/manageslideshow' style={{textDecoration:'none'}}>
          <button  style={styles.button}>Manage Data in Slideshow</button>
          </Link>

          <Link to='/managejabam' style={{textDecoration:'none'}}>
          <button  style={styles.button}>Manage Data in JabamList</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  headerTitle: {
    color: '#333',
    fontSize: '24px',
    margin: 0,
  },
  columnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  column: {
    flex: '1',
    margin: '0 10px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '18px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    
  },
  buttonLink: {
   display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'orange',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
};

export default ThreeColumnLayout;