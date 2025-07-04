import axiosInstance from '../../api/axios';
import { useEffect, useState } from "react";
import Header from "../../components/client/Header";
import CardTeachers from '../../components/client/CardTeachers';
import CardCourses from '../../components/client/CardCourses';
const Home = () => {
    const [courses, setCourses] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axiosInstance.get('limit-courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error(error)
            )
        axiosInstance.get('limit-teachers')
            .then(response => setTeachers(response.data))
            .catch(error => console.error(error)
            )
    }, [])
    return (
        <main>
            <section className="bg-gray-100 pt-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Our Popular Courses</h2>
                    <CardCourses courses={courses} />
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Our Teachers</h2>
                    <CardTeachers teachers={teachers}/>
                </div>
            </section>
        </main>
    )
}

export default Home;