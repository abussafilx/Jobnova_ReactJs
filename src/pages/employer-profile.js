import React from "react";
import { Link, useParams } from "react-router-dom";

import bg1 from "../assets/images/hero/bg4.jpg"
import logo1 from "../assets/images/company/2.png"
import image1 from "../assets/images/company/1.jpg"
import image2 from "../assets/images/company/2.jpg"
import image3 from "../assets/images/company/3.jpg"

import Navbar from "../componants/navbarBora";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { jobDataBoost } from "../data/data";

import { FiMapPin, FiClock, FiDollarSign, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, } from "../assets/icons/vander"

export default function EmployerProfile() {
    let params = useParams()
    let id = params.id
    let data = jobDataBoost.find((job) => job.id === parseInt(id))
    return (
        <>
            <Navbar navClass="defaultscroll sticky" navLight={true} />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: 'center' }}>
                <div className="bg-overlay bg-gradient-overlay-2"></div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 mt-4">
                            <div className="features-absolute">
                                <div className="d-md-flex justify-content-between align-items-center bg-white shadow rounded p-4">
                                    <div className="d-flex align-items-center">
                                        <img src={data?.image ? data.image : logo1} className="avatar avatar-md-md rounded shadow p-3 bg-white" alt="" />

                                        <div className="ms-3">
                                            <h5>{data?.name ? data.name : 'Boost Portugal'}</h5>
                                            <span className="text-muted d-flex align-items-center"><FiMapPin className="fea icon-sm me-1" />{data?.city ? data.city : 'Lisboa'}, Portugal</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 mt-md-0">
                                        <Link to="" className="btn btn-sm btn-primary me-1">Seguir</Link>
                                        <Link to="/job-grid-one" className="btn btn-sm btn-soft-primary">Ver vagas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8 col-md-7 col-12">
                            <h4 className="mb-4">A empresa:</h4>

                            <p className="text-muted">A Boost Portugal é a empresa líder em Portugal em organização de eventos, team buildings, animação turística e ativações de marca, estando presente no mercado há mais de dez anos.
                                <br></br><br></br>Desde 2008 temos vindo a construir várias marcas de sucesso em áreas tão diversas como catering e experiências gastronómicas, animação turística e meios de transporte alternativos.
                            </p>
                            <p className="text-muted">Ao longo destes anos lançámos atividades com segways, bicicletas elétricas, scooters, buggies, tecnologia interativa para tablets, team building inovadores, tuk tuks elétricos, passeios gastronómicos, live escape games entre muitos outros projetos.
                                <br></br><br></br>Atualmente detemos 15 marcas de animação turística a nível global e chegamos anualmente a mais de 600.000 pessoas em todo o mundo.
                            </p>

                            <div className="row g-4">
                                <div className="col-12"><img src={image1} className="rounded shadow img-fluid" alt="" /></div>
                                <div className="col-6"><img src={image2} className="rounded shadow img-fluid" alt="" /></div>
                                <div className="col-6"><img src={image3} className="rounded shadow img-fluid" alt="" /></div>
                            </div>

                            <h4 className="my-4">Vagas Disponíveis:</h4>

                            <div className="row g-4">
                                {jobDataBoost.slice(0, 2).map((item, index) => {
                                    return (
                                        <div className="col-lg-6 col-12" key={index}>
                                            <div className="job-post rounded shadow bg-white">
                                                <div className="p-4">
                                                    <Link to={`/job-detail-one/${item.id}`} className="text-dark title h5">{item.title}</Link>

                                                    <p className="text-muted d-flex align-items-center small mt-3"><FiClock className="fea icon-sm text-primary me-1" />Públicado há {item.posted} {item.posted > 1 ? 'Dias' : 'Dia' }</p>

                                                    <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 mt-3">
                                                        <li className="list-inline-item"><span className="badge bg-soft-primary">{item.jobTime}</span></li>
                                                        <li className="list-inline-item"><span className="text-muted d-flex align-items-center small"><FiDollarSign className="fea icon-sm text-primary me-1" />{item.salary}/mo</span></li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center p-4 border-top">
                                                    <img src={item.image} className="avatar avatar-small rounded shadow p-3 bg-white" alt="" />

                                                    <div className="ms-3">
                                                        <h6>{item.name}</h6>
                                                        <span className="text-muted d-flex align-items-center"><FiMapPin className="fea icon-sm me-1" />{item.country}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-5 col-12">
                            <div className="card bg-white p-4 rounded shadow sticky-bar">
                                <div className="map map-400px border-0">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="rounded" style={{ border: '0' }} title="jobnova" allowFullScreen></iframe>
                                </div>

                                <div className="mt-3">
                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="text-muted fw-medium">Desde:</span>
                                        <span>1984</span>
                                    </div>

      

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="text-muted fw-medium">Sede:</span>
                                        <span>Lisboa</span>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="text-muted fw-medium">Tamanho da Equipa:</span>
                                        <span>+ 50</span>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="text-muted fw-medium">Website:</span>
                                        <span>www.boost.pt</span>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="text-muted fw-medium">Social:</span>

                                        <ul className="list-unstyled social-icon text-sm-end mb-0">
                                            <li className="list-inline-item"><Link to="https://dribbble.com/shreethemes" target="_blank" className="rounded"><FiDribbble className="fea icon-sm align-middle" /></Link></li>
                                            <li className="list-inline-item"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><FiLinkedin className="fea icon-sm align-middle" /></Link></li>
                                            <li className="list-inline-item"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><FiFacebook className="fea icon-sm align-middle" /></Link></li>
                                            <li className="list-inline-item"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><FiInstagram className="fea icon-sm align-middle" /></Link></li>
                                            <li className="list-inline-item"><Link to="https://twitter.com/shreethemes" target="_blank" className="rounded"><FiTwitter className="fea icon-sm align-middle" /></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-top">
                                    <h5>Entre em contacto</h5>
                                    <form className="mt-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label fw-semibold">Nome <span className="text-danger">*</span></label>
                                                    <input name="name" id="name" type="text" className="form-control" placeholder="Nome :" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label fw-semibold">Email <span className="text-danger">*</span></label>
                                                    <input name="email" id="email" type="email" className="form-control" placeholder="Email :" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label fw-semibold">Assunto</label>
                                                    <input name="subject" id="subject" className="form-control" placeholder="Assunto :" />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label fw-semibold">Comentários <span className="text-danger">*</span></label>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Menssagem :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button type="submit" id="submit" name="send" className="btn btn-primary">Enviar Mensagem</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center mb-4 pb-2">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h4 className="title mb-3">Outras empresas que podes fazer "match".</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {jobDataBoost.slice(4, 8).map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-5" key={index}>
                                    <div className="employer-card position-relative bg-white rounded shadow p-4 mt-3">
                                        <div className="employer-img d-flex justify-content-center align-items-center bg-white shadow-md rounded">
                                            <img src={item.image} className="avatar avatar-ex-small" alt="" />
                                        </div>

                                        <div className="content mt-3">
                                            <Link to={`/employer-profile/${item.id}`} className="title text-dark h5">{item.name}</Link>


                                        </div>

                                        <ul className="list-unstyled d-flex justify-content-between align-items-center border-top mt-3 pt-3 mb-0">
                                            <li className="text-muted d-inline-flex align-items-center"><FiMapPin className="fea icon-sm me-1 align-middle" />{item.country}</li>
                                            <li className="list-inline-item text-primary fw-medium">{item.vacancy} {item.vacancy > 1 ? 'Boras' : 'Bora'}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer top={false} />
            <ScrollTop />
        </>
    )
}