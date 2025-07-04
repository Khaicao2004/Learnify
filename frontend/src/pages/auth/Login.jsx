import { useRef } from "react";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const submit = (ev) =>{
        ev.preventDefault();
        const payload = {
            email: emailRef,
            password: passwordRef,
        }
    }
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-16 px-4 gap-8">
            <div className="flex justify-center items-center">
                <img src="https://www.workplacelanguages.com/wp-content/uploads/2020/08/Online-Courses.jpg" alt="" className="w-full object-cover h-auto rounded shadow" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Create Account</h2>
                <form className="space-y-5" onSubmit={submit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="text" ref={emailRef} name="email" id="email" placeholder="Enter email" className="w-full px-4 py-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input type="password" ref={passwordRef} name="password" id="password" placeholder="Enter password" className="w-full px-4 py-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600 transition">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;