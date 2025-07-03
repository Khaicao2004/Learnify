import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon, TvIcon } from '@heroicons/react/20/solid';
import { COURSE_LEVEL_TEXT_MAP, COURSE_LEVEL_CLASS_MAP } from "../../constants";
import LessonModal from "../../components/client/LessonModal";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const CourseDetails = () => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axiosInstance.get(`courses/${slug}`)
            .then(response => setCourse(response.data))
            .catch(error => console.error(error))
    }, [slug])

    return (
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-x-6">
                <img src="https://oes.vn/wp-content/uploads/2024/07/Training-course-la-gi-Kham-pha-12-loai-chuong-trinh-dao-tao-nhan-vien-hieu-qua.png" alt="" className="w-full h-50 md:h-100 rounded" />
                <div>
                    <h2 className="text-xl font-semibold py-6">Description</h2>
                    <p className="text-gray-700">{course?.description}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold py-6">Requirements</h2>
                    <p className="text-gray-700">{course?.requirements}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold py-6">Course content</h2>
                    {course?.sections?.map((section) => (
                        <Disclosure as="div" key={section.id}>
                            {({ open: sectionOpen }) => (
                                <>
                                    <DisclosureButton className="flex w-full justify-between items-center border border-gray-300 bg-gray-100 px-4 py-3 text-left text-sm font-medium text-blue-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <div className="flex gap-4">
                                            <ChevronUpIcon
                                                className={`${sectionOpen ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-gray-500`}
                                            />
                                            <span className="font-bold text-gray-800 text-base">{section.title}</span>
                                        </div>
                                        <span className="text-gray-500 text-sm font-normal">{section.lessons_count} lectures . {section.duration}min</span>
                                    </DisclosureButton>
                                    <DisclosurePanel className="px-4 pb-2 pt-2 text-sm text-gray-700">
                                        <ul className="space-y-2">
                                            {section.lessons?.map((lesson) => (
                                                <li className="flex items-center justify-between" onClick={(() => setSelectedLesson(lesson))} key={lesson.id}>
                                                    <div className="flex items-center gap-4">
                                                        <TvIcon className="w-4" />
                                                        {lesson.is_preview ? (
                                                            <span className="text-sm hover:underline hover:text-blue-500" 
                                                                onClick={() => {
                                                                setSelectedLesson(lesson);
                                                                setIsModalOpen(true);
                                                            }}
                                                        >{lesson.title}</span>
                                                        ) : (
                                                            <span className="text-sm">{lesson.title}</span>
                                                        )
                                                    }
                                                    </div>
                                                    {!!lesson.is_preview && (
                                                        <button onClick={() => {
                                                            setSelectedLesson(lesson);
                                                            setIsModalOpen(true);
                                                        }}
                                                            className="text-blue-500 hover:text-blue-600 underline"
                                                        >
                                                            <div className="flex items-center">
                                                                <PlayCircleIcon className="w-4" />
                                                                <span className="text-sm">Preview</span>
                                                            </div>
                                                        </button>
                                                        )
                                                    }
                                                    <span className="text-xs text-gray-500">{lesson.duration} min</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </DisclosurePanel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                    {selectedLesson?.is_preview && (
                        <LessonModal
                            isOpen={isModalOpen}
                            setIsOpen={setIsModalOpen}
                            lesson={selectedLesson}
                        />
                    )}
                </div>
            </div>
            <div className="md:col-span-1 bg-white shadow rounded p-6 space-y-4">
                <ul className="space-y-4">
                    <li className="flex justify-between pb-2">
                        <p className="text-gray-600">Teacher Name</p>
                        <span className="font-semibold text-gray-800">{course?.teacher?.name}</span>
                    </li>
                    <li className="flex justify-between pb-2">
                        <p className="text-gray-600">Price</p>
                        <span className="text-gray-600">${course?.price}</span>
                    </li>
                    <li className="flex justify-between pb-2">
                        <p className="text-gray-600">Level</p>
                        <span className={`font-semibold px-2 py-1 rounded text-white ` + COURSE_LEVEL_CLASS_MAP[course?.level]}>{COURSE_LEVEL_TEXT_MAP[course?.level]}</span>
                    </li>
                    <li className="flex justify-between">
                        <p className="text-gray-600">Duration</p>
                        <span className="text-gray-600">{course?.duration}min</span>
                    </li>
                </ul>

                {/* Nút enroll */}
                <button className="w-full bg-slate-800 text-white py-3 uppercase font-semibold text-sm hover:bg-slate-900 transition">
                    Enroll the Course
                </button>

                {/* Reviews */}
                <div className="pt-6">
                    <h4 className="text-lg font-semibold mb-4 border-b">Reviews</h4>

                    <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Good job</span>
                                <div className="flex items-center space-x-1 text-yellow-400 text-lg">
                                        <span  className={'text-yellow-400'}>
                                            ★ ★ ★ ☆ ☆
                                        </span>
                                </div>
                                <span className="text-gray-500 text-xs">Outstanding</span>
                            </div>
                    </div>

                    {/* Feedback */}
                    <div className="mt-6">
                        <h6 className="mb-2 font-medium text-gray-800">Your Feedback</h6>
                        <textarea
                            className="w-full border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={5}
                            placeholder="Write your feedback..."
                        ></textarea>
                        <div className="mt-4 text-right">
                            <button className="bg-slate-800 text-white px-6 py-2 uppercase text-sm font-semibold hover:bg-slate-900">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Comment (1 mẫu) */}
                    <div className="mt-6 border-t pt-4">
                        <div className="flex space-x-4">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="avatar"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h5 className="font-semibold text-gray-800 flex items-center">
                                    Emilly Blunt
                                    <div className="ml-2 text-yellow-400 text-sm">
                                        ★ ★ ★ ☆ ☆
                                    </div>
                                </h5>
                                <p className="text-gray-600 text-sm mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CourseDetails;