import React from 'react'

const styles = {
  base: {
    padding: "15px",
    borderRadius: "10px",
    margin: "10px 0",
    fontSize: "16px"
  },
  success: { background: "#d4edda", color: "#155724" },
  error: { background: "#f8d7da", color: "#721c24" }
};

const Alerts = ({ type, message }) => {
  return (

    <div className="alertstyle">
      <div style={{ ...styles.base, ...styles[type] }}>
        {message}
      </div>
    </div>

  );
};

export default Alerts