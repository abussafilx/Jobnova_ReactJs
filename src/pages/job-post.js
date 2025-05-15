import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../assets/images/hero/bg.jpg'
import Navbar from "../componants/navbarBora";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

export default function JobPost(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" navLight={true}/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'top'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Criar Vaga</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Jobnova</Link></li>
                            <li className="breadcrumb-item"><Link to="/job-grid-one">Vagas</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Criar Vaga</li>
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
                    <div className="col-xl-7 col-lg-8">
                        <div className="card border-0">
                            <form className="rounded shadow p-4">
                                <div className="row">
                                    <h5 className="mb-3">Detalhes da Vaga:</h5>                                    
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Título da Vaga:</label>
                                            <input name="subject" id="subject2" className="form-control" placeholder="Título:"/>
                                        </div>                                                                                
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Descrição:</label>
                                            <textarea name="comments" id="comments2" rows="4" className="form-control" placeholder="Descreva a vaga:"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Tipo de vaga:</label>
                                            <select className="form-control form-select" id="Type">
                                                <option value="WD">Designer Web</option>
                                                <option value="WD">Desenvolvedor Web</option>
                                                <option value="UI">Designer UI / UX</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Categoria:</label>
                                            <select className="form-control form-select" id="Categories">
                                                <option>Todas</option>
                                                <option>Período Integral</option>
                                                <option>Meio Período</option>
                                                <option>Remoto</option>
                                                <option>Presencial</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Salário:</label>
                                            <select className="form-control form-select" id="Salary">
                                                <option value="HOURL">Por hora</option>
                                                <option value="MONTH">Mensal</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="mb-3 mt-md-4 pt-md-1">
                                            <label className="form-label small fw-bold d-none"></label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text border" id="basic-addon1">€</span>
                                                <input type="number" className="form-control" min="1" max="1000" placeholder="Mín." id="MIn" aria-describedby="inputGroupPrepend" required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="mb-3 mt-md-4 pt-md-1">
                                            <label className="form-label small fw-bold d-none"></label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text border" id="basic-addon1">€</span>
                                                <input type="number" className="form-control" min="1" max="1000" placeholder="Máx." id="Max" aria-describedby="inputGroupPrepend" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h5 className="mb-3">Habilidades e Experiência:</h5>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Habilidades:</label>
                                            <input name="name" id="skills" type="text" className="form-control" placeholder="Ex: Trabalho em equipe, liderança"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Formação:</label>
                                            <input name="name" id="Qualifications" type="text" className="form-control" placeholder="Ex: Ensino Médio, Licenciatura"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Experiência:</label>
                                            <input name="name" id="Experience" type="text" className="form-control" placeholder="Ex: 2 anos"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Indústria:</label>
                                            <select className="form-control form-select" id="Industry">
                                                <option value="BANK">Bancário</option>
                                                <option value="BIO">Biotecnologia</option>
                                                <option value="AVI">Aviação</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h5 className="mb-3">Localização:</h5>
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Endereço:</label>
                                            <input name="name" id="Address" type="text" className="form-control" placeholder="Endereço"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">País:</label>
                                            <select className="form-control form-select" id="Country">
                                                <option value="USA">Estados Unidos</option>
                                                <option value="CAD">Canadá</option>
                                                <option value="CHINA">China</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Estado:</label>
                                            <select className="form-control form-select" id="State">
                                                <option value="CAL">Califórnia</option>
                                                <option value="TEX">Texas</option>
                                                <option value="FLOR">Flórida</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="card map border-0 rounded mb-3">
                                            <div className="card-body p-0">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="rounded" style={{border:'0', height:'250px'}} allowFullScreen title="jobnova"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <input type="submit" id="submit2" name="send" className="submitBnt btn btn-primary" value="Publicar Vaga"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        <Footer top={false} />
        <ScrollTop/>
        </>
    )
}