const SectionTeachers = ({teachers = []}) => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Our Teachers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachers.map(teacher => (
                    <div className="bg-white shadow rounded" key={teacher.id}>
                        <img src={teacher.avatar} alt={teacher.name} className="w-full h-58 md:h-80 object-cover rounded" />
                        <div className="p-4">
                            <a className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">{teacher.name}</a>
                            <p className="text-gray-600 text-sm">{teacher.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default SectionTeachers;