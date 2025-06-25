import { useEffect, useState } from "react";
import axiosInstance from '../../api/axios';

const Index = () => {
    const [teachers, setTeachers] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axiosInstance.get('teachers')
            .then(response => setTeachers(response.data))
            .catch(error => console.error(error)
        )
        axiosInstance.get('courses')
            .then(response => setCourses(response.data))
            .catch(error => console.error(error)
        )
    }, [])
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div
                                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                                style={{ padding: '30px' }}
                            >
                                <i
                                    className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"
                                ></i>
                                <div className="pl-4">
                                    <h4>Play Ground</h4>
                                    <p className="m-0">
                                        Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                                        lorem amet elitr vero...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div
                                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                                style={{ padding: '30px' }}
                            >
                                <i
                                    className="flaticon-022-drum h1 font-weight-normal text-primary mb-3"
                                ></i>
                                <div className="pl-4">
                                    <h4>Music and Dance</h4>
                                    <p className="m-0">
                                        Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                                        lorem amet elitr vero...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div
                                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                                style={{ padding: '30px' }}
                            >
                                <i
                                    className="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"
                                ></i>
                                <div className="pl-4">
                                    <h4>Arts and Crafts</h4>
                                    <p className="m-0">
                                        Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                                        lorem amet elitr vero...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div
                                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                                style={{ padding: '30px' }}
                            >
                                <i
                                    className="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"
                                ></i>
                                <div className="pl-4">
                                    <h4>Safe Transportation</h4>
                                    <p className="m-0">
                                        Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                                        lorem amet elitr vero...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div
                                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                                style={{ padding: '30px' }}
                            >
                                <i
                                    className="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"
                                ></i>
                                <div className="pl-4">
                                    <h4>Healthy food</h4>
                                    <p className="m-0">
                                        Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                                        lorem amet elitr vero...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pb-1">
                            <div
                                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                                style={{ padding: '30px' }}
                            >
                                <i
                                    className="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"
                                ></i>
                                <div className="pl-4">
                                    <h4>Educational Tour</h4>
                                    <p className="m-0">
                                        Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                                        lorem amet elitr vero...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Popular Classes</span>
                        </p>
                        <h1 className="mb-4">Classes for Your Kids</h1>
                    </div>
                    <div className="row">
                        {courses.map(item => (
                            <div className="col-lg-4 mb-5" key={item.id}>
                                <div className="card border-0 bg-light shadow-sm pb-2 h-100">
                                    <img className="card-img-top mb-2" src={item.thumbnail} alt="" />
                                    <div className="card-body text-center">
                                        <h4 className="card-title">{item.title}</h4>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                    <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Our Teachers</span>
                        </p>
                        <h1 className="mb-4">Meet Our Teachers</h1>
                    </div>
                    <div className="row">
                        {teachers.map(item => (
                            <div className="col-md-6 col-lg-3 text-center team mb-5" key={item.id}>
                                <div
                                    className="position-relative overflow-hidden mb-4"
                                    style={{borderRadius: '100%'}}
                                >
                                    <img className="img-fluid w-100" src="https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150368552.jpg?t=st=1750502552~exp=1750506152~hmac=649d364cc425964dadb869c3aa5c515f26871e5b02060757d9a085be2df0af83" alt="" />
                                    <div
                                        className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
                                    >
                                        <a
                                            className="btn btn-outline-light text-center mr-2 px-0"
                                            style={{width: '38px', height: '38px'}}
                                            href="#"
                                        ><i className="fab fa-twitter"></i></a>
                                        <a
                                            className="btn btn-outline-light text-center mr-2 px-0"
                                            style={{width: '38px', height: '38px'}}
                                            href="#"
                                        ><i className="fab fa-facebook-f"></i></a>
                                        <a
                                            className="btn btn-outline-light text-center px-0"
                                            style={{width: '38px', height: '38px'}}
                                            href="#"
                                        ><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <h4>{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;