import SectionCourses from "../../components/client/home/SectionCourses";
import axiosInstance from '../../api/axios';
import { useEffect, useState } from "react";
import SectionTeachers from "../../components/client/home/SectionTeachers";
const Home = () => {
    const [courses, setCourses] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axiosInstance.get('courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error(error)
        )
        axiosInstance.get('teachers')
            .then(response => setTeachers(response.data))
            .catch(error => console.error(error)
        )
    }, [])
    return (
        <>
          <main>
                <SectionCourses  courses={courses} />
                <SectionTeachers teachers={teachers} />
          </main>
        </>
    )
}

export default Home;