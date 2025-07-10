import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";

const MyLearning = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
    console.log(courses);
    
  useEffect(() => {
        axiosInstance.get("my-learning")
        .then(res => setCourses(res.data.data))
        .catch(err => console.error(err)
    );
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Learning</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="border rounded p-4 shadow">
            <img src={course.thumbnail} alt={course.title} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="font-semibold text-lg">{course.title}</h3>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => navigate(`/my-learning-details/${course.slug}`)}
            >
              Go to Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLearning;