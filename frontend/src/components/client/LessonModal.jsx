import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
const LessonModal = ({isOpen, setIsOpen, lesson}) => {
    return (
       <Dialog open={isOpen} as="div" className="relative z-100 focus:outline-none" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/5 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto md:p-4">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="w-full max-w-md bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
                <div className="flex justify-between items-center mb-4">
                    <DialogTitle as="span" className="font-medium text-gray-400 text-sm">
                        Preview Course
                    </DialogTitle>
                    <XMarkIcon onClick={() => setIsOpen(false)} className="w-6 text-white"/>
                </div>
                    <DialogTitle as="span" className="text-base font-medium text-white">
                        {lesson?.title}
                    </DialogTitle>
                <div className="mb-6">
                    <iframe
                      className="w-full h-64 md:h-96 rounded"
                      src={lesson?.preview_video_path}
                      title={lesson?.title}
                      allowFullScreen
                    ></iframe>
                </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
};

export default LessonModal;