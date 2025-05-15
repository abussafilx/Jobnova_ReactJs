import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../assets/images/hero/bg.jpg'
import logo1 from '../assets/images/company/2.png'

import Navbar from "../componants/navbarBora";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

export default function JobApply(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <img src={logo1} className="avatar avatar-small rounded-pill p-2 bg-white" alt=""/>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-3">Monitor para Team Building</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Jobnova</Link></li>
                            <li className="breadcrumb-item"><Link to="/job-grid-one">Vagas</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Candidatura</li>
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

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-7">
                        <div className="card border-0">
                            <form className="rounded shadow p-4">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Seu nome:<span className="text-danger">*</span></label>
                                            <input name="name" id="name2" type="text" className="form-control" placeholder="Nome completo:"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Seu email:<span className="text-danger">*</span></label>
                                            <input name="email" id="email2" type="email" className="form-control" placeholder="Seu email:"/>
                                        </div> 
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Seu telefone:<span className="text-danger">*</span></label>
                                            <input name="number" id="number2" type="number" className="form-control" placeholder="Número de telefone:"/>
                                        </div> 
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Cargo pretendido:</label>
                                            <input name="subject" id="subject2" className="form-control" placeholder="Monitor para Team Building"/>
                                        </div>                                                                               
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Tipo de vaga:</label>
                                            <select className="form-control form-select" id="Sortbylist-Shop">
                                                <option>Todas</option>
                                                <option>Período Integral</option>
                                                <option>Meio Período</option>
                                                <option>Remoto</option>
                                                <option>Presencial</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Descrição:</label>
                                            <textarea name="comments" id="comments2" rows="4" className="form-control" placeholder="Conte um pouco sobre você ou deixe uma mensagem:"></textarea>
                                        </div>
                                    </div>                                    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label fw-semibold">Envie o seu CV:</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div>                                                                               
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Aceito os <Link to="#" className="text-primary">Termos e Condições</Link></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="submit" id="submit2" name="send" className="submitBnt btn btn-primary" value="Enviar candidatura"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        <Footer top={false}/>
        <ScrollTop/>
        </>
    )
}