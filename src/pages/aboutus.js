import { Link } from "react-router-dom";

import bg1 from "../assets/images/hero/bg.jpg"

import Navbar from "../componants/navbarBora"
import About from "../componants/aboutUs"
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import {  teamData } from "../data/data";
import { FiFacebook, FiInstagram, FiTwitter } from "../assets/icons/vander"

export default function AboutUs() {
    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true} />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: 'top' }}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">About Us</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Jobnova</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">About us</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section">
                <About containerClass="container" />

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center mb-4 pb-2">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Missão, visão e valores</h4>
                                <p className="text-muted para-desc mx-auto mb-0">O que está por trás da BORA EVENTOS</p>
                            </div>
                        </div>
                    </div>

<div className="row justify-content-center">

                        <div className="col-lg-6 col-md-2 col-sm-2 col-2 mt-3 pt-2" key={1}>
                            <div className="position-relative features text-center p-4 rounded shadow bg-white">


                                <div className="mt-4">
                                    <Link to="" className="title h5 text-dark">Missão</Link>
                                    <p className="text-muted mt-3 mb-0">Somos mais do que uma plataforma digital, somos o elo que une a energia e espontaneidade dos freelancers ao dinamismo e profissionalismo das empresas.
                                        Acreditamos que cada evento é único e para isso, simplificamos a jornada de recrutamento, solidificando a relação de confiança entre empresa e trabalhador, sem perder o foco na seleção de profissionais qualificados. Ao mesmo tempo, facilitamos e impulsionamos a carreira dos freelancers com segurança e reconhecimento.
                                    </p>
                                    <div className="mt-3">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-3 col-sm-3 col-3 mt-3 pt-2" key={1}>
                            <div className="position-relative features text-center p-4 rounded shadow bg-white">


                                <div className="mt-4">
                                    <Link to="" className="title h5 text-dark">Visão</Link>
                                    <p className="text-muted mt-3 mb-0">Ser uma plataforma digital de referência, que revolucione o modelo tradicional do processo de recrutamento de freelancers em eventos.
                                    </p>
                                    <div className="mt-3">

                                    </div>
                                </div>
                            </div>
                                                        <div className="position-relative features text-center p-4 rounded shadow bg-white">


                                <div className="mt-4">
                                    <Link to="" className="title h5 text-dark">Valores</Link>
                                    <p className="text-muted mt-3 mb-0">• Confiança<br></br>
• Praticidade<br></br>
• Qualidade & Excelência<br></br>
• Inovação<br></br>

                                    </p>
                                    <div className="mt-3">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">A nossa equipa</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center g-3 mt-0">
                        {teamData.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-12" key={index}>
                                    <div className="card team team-primary text-center">
                                        <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                                            <img src={item.image} className="img-fluid" alt="" />
                                            <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                                            <ul className="list-unstyled team-social mb-0">
                                                <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="icons fea-social" /></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="icons fea-social" /></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="icons fea-social" /></Link></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link to="#" className="text-dark h5 mb-0 title">{item.name}</Link>
                                            <h6 className="text-muted mb-0 fw-normal">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col">

                        </div>
                    </div>


                    <div className="row mt-md-5 pt-md-3 mt-4 pt-2 justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <h4 className="title mb-4">Alguma questão? BORA, entre em contacto!</h4>
                                <Link to="/contactus" className="btn btn-primary mt-3"><i className="uil uil-phone"></i> Contacte-nos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <ScrollTop />
        </>

    )
}