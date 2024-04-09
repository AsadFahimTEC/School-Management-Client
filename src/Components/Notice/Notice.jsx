import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Navber/Navber";
import { toast } from "react-hot-toast";
import "./Notice.css";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingNoticeId, setEditingNoticeId] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/notice");
      setNotices(response.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const handleCreateNotice = async () => {
    try {
      const response = await axios.post("http://localhost:5000/notice", {
        title,
        description,
      });
      console.log("Notice created:", response.data);
      fetchNotices();
      setTitle("");
      setDescription("");
      toast.success("Notice created successfully");
    } catch (error) {
      console.error("Error creating notice:", error);
      toast.error("Failed to create notice");
    }
  };

  const handleUpdateNotice = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:5000/notice/${id}`, {
        title,
        description,
      });
      console.log("Notice updated:", response.data);
      fetchNotices();
      setTitle("");
      setDescription("");
      setEditingNoticeId(null);
      toast.success("Notice updated successfully");
    } catch (error) {
      console.error("Error updating notice:", error);
      toast.error("Failed to update notice");
    }
  };

  const handleDeleteNotice = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/notice/${id}`);
      console.log("Notice deleted:", response.data);
      fetchNotices();
      toast.success("Notice deleted successfully");
    } catch (error) {
      console.error("Error deleting notice:", error);
      toast.error("Failed to delete notice");
    }
  };

  const handleEditNotice = (notice) => {
    setTitle(notice.title);
    setDescription(notice.description);
    setEditingNoticeId(notice._id);
  };

  const renderNotices = () => {
    return notices.map((notice) => (
      <div key={notice._id} className="card">
        {editingNoticeId === notice._id ? (
          <div className="notice-form">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="edit-notice-button bg-green-600 rounded-lg p-2 text-white" onClick={() => handleUpdateNotice(notice._id)}>
              Save
            </button>
          </div>
        ) : (
          <>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <div className="button-group">
              <button className="edit-notice-button bg-green-600" onClick={() => handleEditNotice(notice)}>
                Edit
              </button>
              <button className="delete-notice-button bg-red-600" onClick={() => handleDeleteNotice(notice._id)}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <div className="mt-44">
      <NavBar />
      <div className="notice-container">
        <h2 className="text-center text-2xl font-bold">School Notices</h2>

        {/* Notice Form */}
        <div className="notice-form mt-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* Use a styled button for creating notices */}
          <button className="create-notice-button" onClick={handleCreateNotice}>
            Create Notice
          </button>
        </div>

        {/* Notice List */}
        <div className="notice-list">
          {notices.length > 0 ? (
            renderNotices()
          ) : (
            <p>No notices available. Create one using the form above.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notice;
