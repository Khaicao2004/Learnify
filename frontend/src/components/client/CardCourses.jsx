import { UserGroupIcon } from "@heroicons/react/24/solid";

const CardCourses = ({ courses = [] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
                <div
                    className="bg-white rounded shadow overflow-hidden"
                    key={course.id}
                >
                    <div className="relative">
                        <img src={course.thumbnail} alt="" className="w-full h-58 md:h-80 object-cover" />
                        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs rounded px-2 py-1 font-semibold">{course.category.name}</span>
                        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs rounded px-2 py-1 font-semibold">${course.price}</span>
                    </div>
                    <div className="p-4">
                        <a href={`/course-details/${course.slug}`} className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">{course.title}</a>
                        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={course.teacher.avatar} alt={course.teacher.name} className="w-8 h-8 rounded-full object-cover" />
                                <span className="text-sm text-gray-700 font-semibold">{course.teacher.name}</span>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                <UserGroupIcon className="w-5" />
                                <span className="font-semibold">{course.enrolled_students_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardCourses;