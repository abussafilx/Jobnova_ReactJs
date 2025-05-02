import React, { useState } from 'react';
import { Link } from "react-router-dom";

import bg1 from '../assets/images/hero/bg3.jpg';
import heroImg from "../assets/images/hero.jpg";

import Navbar from "../componants/navbar";
import Counter from '../componants/counter';
import AboutUs from '../componants/aboutUs';

import Blog from '../componants/blog';
import Footer from '../componants/footer';
import ScrollTop from '../componants/scrollTop';

import { FiSearch, FiClock, FiMapPin, FiDollarSign } from "../assets/icons/vander";

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

import { categoriesTwoData, jobData } from '../data/data';
import NavbarBora from '../componants/navbarBora';

export default function IndexThree() {
    let [isOpen, setOpen] = useState(false);
    return (
        <>
            <NavbarBora navClass="defaultscroll sticky" navLight={true} />
            <section className="bg-half-260 pb-lg-0 pb-md-4 bg-primary d-table w-100" style={{ backgroundImage: `url(${bg1})` }} id="home">
                <div className="bg-overlay bg-black" style={{ opacity: '0.8' }}></div>
                <div className="container">
                    <div className="row g-4 position-relative z-1">
                        <div className="col-lg-7 col-md-6 col-12 mt-lg-5">
                            <div className="title-heading">
                                <h1 className="heading text-white title-dark mb-4"> Menos tempo a recrutar.  <br /> Mais tempo a produzir.</h1>
                                <p className="para-desc text-white-50">A Bora conecta a sua empresa com freelancers altamente qualificados, prontos para contribuir com sua expertise quando você mais precisa.</p>

                                <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-2 mt-4">
                                    <form className="card-body text-start">
                                        <div className="registration-form text-dark text-start">
                                            <div className="row g-lg-0">
                                                <div className="col-lg-9 col-md-8 col-12">
                                                    <div className="mb-3 mb-sm-0">
                                                        <label className="form-label d-none fs-6">Buscar:</label>
                                                        <div className="filter-search-form position-relative filter-border">
                                                            <FiSearch className="fea icon-20 icons" />
                                                            <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Encontre os melhores freelancers" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-md-4 col-12">
                                                    <input type="submit" id="search" name="search" style={{ height: '60px' }} className="btn btn-primary searchbtn w-100" value="Buscar" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-2">
                                    <span className="text-white-50"><span className="text-white">Funções populares :</span> Designer, Desenvolvedor, Web, IOS, PHP Senior Engineer</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="bg-white rounded shadow p-2 position-relative">
                                <img src={heroImg} className="img-fluid rounded" alt="" />

                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <Link to="#!" onClick={() => setOpen(true)} className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                                        <i className="mdi mdi-play mdi-24px text-primary"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setOpen(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <Counter />

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center mb-4 pb-2">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Ofertas de Freelancers Populares</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Encontre rapidamente os profissionais que sua empresa precisa. Acesse posições abertas e comece a contratar hoje mesmo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mt-0">
                        {jobData.slice(0, 6).map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="job-post rounded shadow bg-white">
                                        <div className="p-4">
                                            <Link to={`/job-detail-two/${item.id}`} className="text-dark title h5">{item.title}</Link>

                                            <p className="text-muted d-flex align-items-center small mt-3"><FiClock className="fea icon-sm text-primary me-1" />Postado há {item.posted} dias</p>

                                            <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                                <li className="list-inline-item"><span className="badge bg-soft-primary">{item.jobTime}</span></li>
                                                <li className="list-inline-item"><span className="text-muted d-flex align-items-center small"><FiDollarSign className="fea icon-sm text-primary me-1" />{item.salary}/mês</span></li>
                                            </ul>
                                        </div>
                                        <div className="d-flex align-items-center p-4 border-top">
                                            <img src={item.image} className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />

                                            <div className="ms-3">
                                                <Link to="/employer-profile" className="h5 company text-dark">{item.name}</Link>
                                                <span className="text-muted d-flex align-items-center mt-1"><FiMapPin className="fea icon-sm me-1" />{item.country}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <AboutUs containerClass="container mt-100 mt-60" />

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center mb-4 pb-2">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Busque por Categorias</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Explore diferentes áreas e encontre os melhores freelancers para sua empresa em todas as categorias.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 mt-0">
                        {categoriesTwoData.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <div className="job-category job-category-two rounded shadow bg-light p-3">
                                        <h5 className="mb-1">{item.title}</h5>
                                        <p className="text-muted para mb-2">{item.job}</p>
                                        <Link to="" className="text-primary fw-medium link">Ver Ofertas <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="text-center">
                                <Link to="/job-categories" className="btn btn-link primary text-muted">Ver Mais Categorias <i className="mdi mdi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Últimos Posts e Notícias</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Fique por dentro das novidades do mercado de trabalho e das tendências em contratações para freelancers.</p>
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
