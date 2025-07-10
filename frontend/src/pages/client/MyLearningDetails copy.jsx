import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon, TvIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

const MyLearningDetails = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/my-learning-details/${slug}`).then(response => {
      setCourse(response.data);
      // Chọn lesson đầu tiên mặc định
      if (response.data.sections?.length > 0 && response.data.sections[0].lessons?.length > 0) {
        setSelectedLesson(response.data.sections[0].lessons[0]);
      }
    });
  }, [slug]);

  if (!course) return <div className="text-center py-20 text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
        </div>
        {course.teacher && (
          <div className="flex items-center gap-3">
            <img
              src={course.teacher.avatar || "https://randomuser.me/api/portraits/men/32.jpg"}
              alt="teacher"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <div className="font-semibold text-slate-700">{course.teacher.name}</div>
              <div className="text-xs text-gray-500">Instructor</div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar: Danh sách bài học */}
        <div className="md:col-span-1">
          <div className="w-full max-w-lg rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden">
            {course?.sections.map((section, sectionIdx) => (
              <Disclosure as="div" key={section.id} defaultOpen={sectionIdx === 0}>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 border-b border-gray-100 focus:outline-none">
                      <span className="font-medium text-slate-700">
                        Section {sectionIdx + 1}: {section.title}
                      </span>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="bg-white px-2 py-2">
                      {section?.lessons.map((lesson, lessonIdx) => {
                        const isActive = selectedLesson?.id === lesson.id;
                        return (
                          <div
                            key={lesson.id}
                            className={`flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer transition
                              ${isActive ? "bg-blue-100 border border-blue-400" : "hover:bg-slate-100"}
                            `}
                            onClick={() => setSelectedLesson(lesson)}
                          >
                            <div className="flex items-center gap-2">
                              <TvIcon className="w-4 text-blue-500" />
                              <span className={`text-sm ${isActive ? "font-semibold text-blue-700" : "text-slate-700"}`}>
                                Lesson {lessonIdx + 1}: {lesson.title}
                              </span>
                              {lesson.completed && (
                                <CheckCircleIcon className="w-4 text-green-500 ml-1" title="Completed" />
                              )}
                            </div>
                            <span className="text-xs text-gray-400">{lesson.duration} min</span>
                          </div>
                        );
                      })}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* Main: Video + nội dung bài học */}
        <div className="md:col-span-2">
          {selectedLesson && (
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">{selectedLesson.title}</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={selectedLesson.video_path}
                  controls
                  className="w-full h-72 md:h-96 rounded-lg border"
                  poster={selectedLesson.thumbnail}
                />
              </div>
              <p className="text-gray-700">{selectedLesson.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLearningDetails;