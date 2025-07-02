import { useEffect, useState } from "react";
import CardTeachers from "../../components/client/CardTeachers";
import axiosInstance from "../../api/axios";
import Pagination from "../../components/Pagination";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        axiosInstance.get(`teachers?page=${page}`)
            .then(response => {
                setTeachers(response.data.data)
                setPageCount(response.data.last_page)
            })
            .catch(error => console.error(error)
            )
    }, [page])
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <CardTeachers teachers={teachers}/>
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

export default Teachers;