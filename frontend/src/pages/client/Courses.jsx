import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import CardCourses from "../../components/client/CardCourses";
import Pagination from "../../components/Pagination";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        axiosInstance.get(`courses?page=${page}`)
            .then(response => {
                setCourses(response.data.data),
                setPageCount(response.data.last_page)
            })
            .catch(error => console.error(error)
            )
    }, [page])
    return (
         <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <CardCourses courses={courses} />
                {pageCount > 0 && (
                    <Pagination
                        onPageChange={({selected}) => setPage(selected + 1)} 
                        pageCount={pageCount}
                    />
                )}
            </div>
        </section>
    )
};

export default Courses;