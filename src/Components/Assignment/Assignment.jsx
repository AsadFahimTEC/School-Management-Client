import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../Navber/Navber";
import "./Assignment.css"; // Import CSS for styling
import Footer from "../Footer/Footer";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get("/Assignment.json"); // Assuming the API endpoint for fetching assignments is "/api/assignments"
      setAssignments(response.data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  return (
    <div className="mt-0">
      <NavBar />
      <div className="assignment-container">
        <h2 className="text-center mt-8 mb-4 text-xl font-bold">Assignments</h2>
        <div className="assignment-grid mt-32 mb-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="assignment-card hover:bg-green-400 text-black">
              <h3 className="assignment-title">{assignment.title}</h3>
              <p className="assignment-description">{assignment.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Assignment;
