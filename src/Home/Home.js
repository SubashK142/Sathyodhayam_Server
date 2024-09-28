import React from 'react';
import { Link } from 'react-router-dom';

const ThreeColumnLayout = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Data Management</h1>
      </header>
      <div style={styles.columnContainer}>
        {renderColumn("Tables", ["Users", "News_feeds", "Voice", "Meditation", "Slideshow", "Jabam", "Dhyanam"], styles.buttonLink)}
        {renderColumn("New Data", [
          { name: "Add New Data in Users", link: "/users" },
          { name: "Add New Data in News_feeds", link: "/newsfeed" },
          { name: "Add New Data in Voice", link: "/voice" },
          { name: "Add New Data in Meditation", link: "/meditation" },
          { name: "Add New Data in Slideshow", link: "/slideshow" },
          { name: "Add New Data in Jabam", link: "/jabam" },
          { name: "Add New Data in Dhyanam", link: "/dhyanam" },
        ], styles.button)}
        {renderColumn("Manage Data", [
          { name: "Manage Data in Users List", link: "/manageusers" },
          { name: "Manage Data in News_feeds List", link: "/managenewsfeed" },
          { name: "Manage Data in Voice List", link: "/managevoice" },
          { name: "Manage Data in Meditation List", link: "/managemeditation" },
          { name: "Manage Data in Slideshow List", link: "/manageslideshow" },
          { name: "Manage Data in Jabam List", link: "/managejabam" },
          { name: "Manage Data in Dhyanam List", link: "/managedhyanam" },
        ], styles.button)}
      </div>
    </div>
  );
};

const renderColumn = (title, items, buttonStyle) => (
  <div style={styles.column}>
    <h2 style={styles.heading}>{title}</h2>
    {items.map((item, index) => (
      typeof item === 'string' ? (
        <button key={index} style={buttonStyle}>{item}</button>
      ) : (
        <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>{item.name}</button>
        </Link>
      )
    ))}
  </div>
);

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e9ecef',
    padding: '20px',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  headerTitle: {
    color: 'black',
    fontSize: '32px',
    margin: 0,
    fontWeight: 'bold',
  },
  columnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1',
    margin: '10px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  heading: {
    textAlign: 'center',
    color: '#343a40',
    marginBottom: '15px',
    fontSize: '24px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
      backgroundColor: '#218838',
      transform: 'scale(1.02)',
    },
  },
  buttonLink: {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
      backgroundColor: '#0056b3',
      transform: 'scale(1.02)',
    },
  },
};

export default ThreeColumnLayout;
