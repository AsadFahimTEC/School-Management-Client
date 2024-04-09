import { useState } from "react";
import { toast } from 'react-hot-toast';
import NavBar from "../Navber/Navber";
import "./Attendance.css"; // Import CSS file for styling


const Attendance = () => {
    // State to store the list of attendance
    const [attendanceList, setAttendanceList] = useState([]);

    // Function to handle marking attendance
    const handleMarkAttendance = (status) => {
        // Get the current date and time
        const currentDate = new Date().toLocaleString();

        // Update the attendance list based on the status (Present/Absent)
        const updatedList = [...attendanceList, { date: currentDate, status }];
        setAttendanceList(updatedList);

        // Show toast notification based on status
        if (status === 'Present') {
            toast.success('Marked as Present');
        } else {
            toast.error('Marked as Absent');
        }
    };

    return (
        <div className="attendance-container mt-52 rounded-lg shadow-lg p-4">
            <NavBar />
            <div className="attendance-content">
                <h2 className="attendance-heading text-2xl font-bold ">Student Attendance</h2>
                <div className="attendance-buttons mt-4">
                    {/* Button to mark present */}
                    <button className="present-button" onClick={() => handleMarkAttendance('Present')}>
                        Present
                    </button>
                    {/* Button to mark absent */}
                    <button className="absent-button" onClick={() => handleMarkAttendance('Absent')}>
                        Absent
                    </button>
                </div>
                {/* Display the attendance list */}
                <div className="attendance-list mt-2">
                    <h3>Attendance List</h3>
                    <ul>
                        {attendanceList.map((record, index) => (
                            <li key={index}>
                                <strong>Date:</strong> {record.date}, <strong>Status:</strong> {record.status}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
