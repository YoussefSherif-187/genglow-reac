import React from 'react';

const ConfirmModal = ({
  show,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel'
}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div
        style={{
          padding: "15px",
          borderRadius: "10px",
          fontSize: "16px",
          background: "#f8d7da",
          color: "#721c24"
        }}
      >
        <p style={{ marginBottom: "12px" }}>{message}</p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
          <button className="secondary-btn" onClick={onCancel}>
            {cancelText}
          </button>

          <button className="danger-btn" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
