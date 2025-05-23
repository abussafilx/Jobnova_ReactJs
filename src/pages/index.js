import React from 'react';
// import { Link } from "react-router-dom";

import bg1 from "../assets/images/bg2.png"
import hero1 from '../assets/images/herobora2.png'
import company1 from '../assets/images/company/1.png'
import company2 from '../assets/images/company/2.png'
import company3 from '../assets/images/company/3.png'
import company4 from '../assets/images/company/4.png'
import company5 from '../assets/images/company/5.png'
import company6 from '../assets/images/company/6.png'
import company7 from '../assets/images/company/7.png'
import company8 from '../assets/images/company/8.png'


import AboutUs from "../componants/aboutUs";
import Categories from "../componants/categories";
import Blog from '../componants/blog';
import Footer from '../componants/footer';
import Companies from '../componants/companies';

import ScrollTop from '../componants/scrollTop';

// import { jobData } from "../data/data";


import NavbarBora from '../componants/navbarBora';

export default function Index() {
    return (
        <>
            <NavbarBora navClass="defaultscroll sticky" />
            <section className="bg-half-170 d-table pt-5 w-100 bg-primary" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                            <div className="title-heading">
                                <h1 className="heading text-white fw-bold">O seu evento começa aqui</h1>
                                <p className="para-desc text-white-50 mb-0">Nós fazemos o match. BORA mostrar o teu talento?</p>
                                <button type="submit" className="btn btn-secondary btn-pills" style={{ marginTop: '25px' }}>Registrar-se</button>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="position-relative ms-lg-5">
                                <img src={hero1} className="img-fluid p-5" alt="" />

                                <div className="spinner">
                                    <div className="position-absolute top-0 start-0 mt-lg-5 mt-4 ms-lg-5 ms-4">
                                        <img src={company1} className="avatar avatar-md-md rounded shadow p-2" alt="" />
                                    </div>
                                    <div className="position-absolute top-0 start-50 translate-middle-x">
                                        <img src={company2} className="avatar avatar-medium rounded shadow p-2 " alt="" />
                                    </div>
                                    <div className="position-absolute top-0 end-0 mt-lg-5 mt-4 me-lg-5 me-4">
                                        <img src={company3} className="avatar avatar-medium rounded shadow p-2 " alt="" />
                                    </div>
                                    <div className="position-absolute top-50 start-0 translate-middle-y">
                                        <img src={company4} className="avatar avatar-medium rounded shadow p-2 " alt="" />
                                    </div>
                                    <div className="position-absolute top-50 end-0 translate-middle-y">
                                        <img src={company5} className="avatar avatar-md-md rounded shadow p-2" alt="" />
                                    </div>
                                    <div className="position-absolute bottom-0 start-0 mb-lg-5 mb-4 ms-lg-5 ms-4">
                                        <img src={company6} className="avatar avatar-md-md rounded shadow p-2" alt="" />
                                    </div>
                                    <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                        <img src={company7} className="avatar avatar-md-md rounded shadow p-2" alt="" />
                                    </div>
                                    <div className="position-absolute bottom-0 end-0 mb-lg-5 mb-4 me-lg-5 me-4">
                                        <img src={company8} className="avatar avatar-md-md rounded shadow p-2" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <AboutUs containerClass="container" />
                <Categories />

                {/* <div className="container mt-100 mt-60">
                <div className="row align-items-end mb-4 pb-2">
                    <div className="col-lg-6 col-md-9">
                        <div className="section-title text-md-start text-center">
                            <h4 className="title mb-3">Explore Jobs</h4>
                            <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-3 d-none d-md-block">
                        <div className="text-md-end">
                            <Link to="/job-grid-one" className="btn btn-link primary text-muted">See More Jobs <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-0">
                    {jobData.slice(0,6).map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="job-post rounded shadow p-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} className="avatar avatar-small rounded shadow p-3 bg-white" alt=""/>
            
                                            <div className="ms-3">
                                                <Link to="/employer-profile" className="h5 company text-dark">{item.name}</Link>
                                                <span className="text-muted d-flex align-items-center small mt-2"><FiClock  className="fea icon-sm me-1"/> {item.posted} days ago</span>
                                            </div>
                                        </div>

                                        <span className="badge bg-soft-primary">{item.jobTime}</span>
                                    </div>

                                    <div className="mt-4">
                                        <Link to={`/job-detail-one/${item.id}`} className="text-dark title h5">{item.title}</Link>

                                        <span className="text-muted d-flex align-items-center mt-2"><FiMapPin className="fea icon-sm me-1"/>{item.country}</span>

                                        <div className="progress-box mt-3">
                                            <div className="progress mb-2">
                                                <div className="progress-bar position-relative bg-primary" style={{width:'50%'}}></div>
                                            </div>

                                            <span className="text-dark">{item.applied} applied of <span className="text-muted">{item.vacancy} vacancy</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className="col-12 d-md-none d-block">
                        <div className="text-center">
                            <Link to="/job-grid-one" className="btn btn-link primary text-muted">See More Jobs <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div> */}

                {/* <AboutTwo/> */}

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">A forma mais rápida de ser contratado para eventos.</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Liga-te aos eventos certos, no momento certo. <br></br>BORA destacar as tuas skills e impulsiona o teu perfil.</p>
                                <button type="submit" className="btn btn-secondary btn-pills" style={{ marginTop: '25px' }}>sUBSCREVE O PREMIUM</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <Companies />
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Do nosso Blog</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Conheça o mercado e saiba como se preparar para as oportunidades!</p>
                            </div>
                        </div>
                    </div>

                    <Blog />
                </div>
            </section>
            <Footer />
            <ScrollTop />
        </>
    )
}