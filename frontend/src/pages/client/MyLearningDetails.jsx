import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon, TvIcon } from "@heroicons/react/20/solid";

const MyLearningDetails = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  console.log(selectedLesson);

  useEffect(() => {
    axiosInstance.get(`/my-learning-details/${slug}`).then(response => {
      setCourse(response.data);
      // Chọn lesson đầu tiên mặc định
      if (response.data.sections?.length > 0 && response.data.sections[0].lessons?.length > 0) {
        setSelectedLesson(response.data.sections[0].lessons[0]);
      }
    });
  }, [slug]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">{course.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="mx-auto w-full max-w-lg divide-y divide-black rounded-xl bg-black">
            {course?.sections.map((section, index) => (
              <Disclosure as="div" className="p-4" defaultOpen={false} key={section.id}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                    Section {index + 1}: {section.title}
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                  {section?.lessons.map((lesson, index) => (
                    <div className="flex items-center justify-between py-2 hover:bg-gray-700 rounded-md px-2 cursor-pointer" onClick={() => setSelectedLesson(lesson)} key={lesson.id}>
                      <div className="flex items-center gap-2">
                        <TvIcon className="w-4" />
                        <span>Lesson {index + 1}: {lesson.title}</span>
                      </div>
                      <span>{lesson.duration}min</span>
                    </div>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          {selectedLesson && (
            <div>
              <h3 className="text-xl font-semibold mb-4">{selectedLesson.title}</h3>
              <div>
                <iframe
                  src={selectedLesson.video_path}
                  controls
                  className="w-full h-full md:h-96 rounded"
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