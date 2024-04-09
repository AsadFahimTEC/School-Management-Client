import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using Axios for fetching data
import NavBar from "../Navber/Navber";
import './Exam.css'; 
import Footer from '../Footer/Footer';

const Exam = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/Exam.json');
            setExams(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="mt-4">
            <NavBar />
            <h6 className="mt-44 text-center text-2xl font-bold">Exams</h6>
            <div className="exam-container mr-20 ml-20 mb-20 mt-4 text-black">
                {exams.map(exam => (
                    <div key={exam.id} className="exam-card hover:bg-yellow-400">
                        <div className="exam-content">
                            <h3 className='font-bold'>{exam.name}</h3>
                            <p>Exam Date: {exam.examDate}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Exam;
