
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { UserIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const MyLearning = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("my-learning")
      .then(res => setCourses(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">My Learning</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.length === 0 && (
          <div className="col-span-full text-center text-gray-400 text-lg">
            You haven't enrolled in any courses yet.
          </div>
        )}
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition p-5 flex flex-col"
          >
            <div className="relative mb-4">
              <img
                src={course.thumbnail || "https://placehold.co/600x400?text=No+Image"}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              {course.is_enrolled && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Enrolled
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2 line-clamp-2">{course.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <UserIcon className="w-4 h-4" />
              <span>{course.teacher?.name || "Unknown Teacher"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <BookOpenIcon className="w-4 h-4" />
              <span>{course.sections_count || 0} sections</span>
            </div>
            <button
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
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
