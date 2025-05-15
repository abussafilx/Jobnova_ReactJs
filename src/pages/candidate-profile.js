import React from "react";
import { Link, useParams } from "react-router-dom";

import bg1 from "../assets/images/hero/bg5.jpg"
import company1 from "../assets/images/company/1.png"
import company2 from "../assets/images/company/6.png"

import image1 from "../assets/images/team/01.jpg"

import NavbarDark from "../componants/navbarDark";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { candidateSkill, candidatesData } from "../data/data";
import {FiSettings,} from "../assets/icons/vander"

export default function CandidateProfile(){
    let params = useParams();
    let id = params.id
    let data = candidatesData.find((candidates)=>candidates.id === parseInt(id))
    return(
        <>
        <NavbarDark/>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="position-relative">
                            <div className="candidate-cover">
                                <img src={bg1} className="img-fluid rounded shadow" alt=""/>
                            </div>
                            <div className="candidate-profile d-flex align-items-end justify-content-between mx-2">
                                <div className="d-flex align-items-end">
                                    <img src={data?.image ? data.image : image1} className="rounded-pill shadow border border-3 avatar avatar-medium" alt=""/>

                                    <div className="ms-2">
                                        <h5 className="mb-0">{data?.name ? data.name : 'Carlos Silva'}</h5>
                                        <p className="text-muted mb-0">Profissional de Eventos</p>
                                    </div>
                                </div>

                                <Link to="/candidate-profile-setting" className="btn btn-sm btn-icon btn-pills btn-soft-primary"><FiSettings className="icons"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-7 col-12">
                        <h5 className="mb-4">Apresentação:</h5>

                        <p className="text-muted">Sou um profissional com mais de 5 anos de experiência na organização e coordenação de eventos corporativos, sociais e culturais. Tenho facilidade em lidar com o público, resolver imprevistos e garantir que cada detalhe seja executado com excelência.</p>
                        <p className="text-muted">Já atuei como coordenador de equipe, mestre de cerimônias e responsável pela logística de eventos de pequeno e grande porte. Sou proativo, comunicativo e apaixonado por transformar ideias em experiências memoráveis.</p>

                        <h5 className="mt-4">Competências:</h5>

                        <div className="row">
                            <div className="col-lg-6 col-12">
                                {candidateSkill.slice(0,3).map((item,index)=>{
                                    return(
                                        <div className="progress-box mt-4" key={index}>
                                            <h6 className="font-weight-normal">{item.title}</h6>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:item.value}}>
                                                    <div className="progress-value d-block text-dark h6">{item.value}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="col-lg-6 col-12">
                                {candidateSkill.slice(3,6).map((item,index)=>{
                                    return(
                                        <div className="progress-box mt-4" key={index}>
                                            <h6 className="font-weight-normal">{item.title}</h6>
                                            <div className="progress">
                                                <div className="progress-bar position-relative bg-primary" style={{width:item.value}}>
                                                    <div className="progress-value d-block text-dark h6">{item.value}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <h5 className="mt-4">Experiência:</h5>

                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="d-flex">
                                    <div className="text-center">
                                        <img src={company1} className="avatar avatar-small bg-white shadow p-2 rounded" alt=""/>
                                        <h6 className="text-muted mt-2 mb-0">2021-2024</h6>
                                    </div>

                                    <div className="ms-3">
                                        <h6 className="mb-0">Coordenador de Eventos</h6>
                                        <p className="text-muted">Agência XYZ - Brasil</p>
                                        <p className="text-muted mb-0">Responsável por planejar, organizar e executar eventos corporativos e treinamentos internos, gerindo equipes de apoio, fornecedores e cronogramas com foco em excelência e experiência do participante.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="d-flex">
                                    <div className="text-center">
                                        <img src={company2} className="avatar avatar-small bg-white shadow p-2 rounded" alt=""/>
                                        <h6 className="text-muted mt-2 mb-0">2018-2021</h6>
                                    </div>

                                    <div className="ms-3">
                                        <h6 className="mb-0">Animador e Mestre de Cerimônias</h6>
                                        <p className="text-muted">Eventos & Cia - Brasil</p>
                                        <p className="text-muted mb-0">Atuação em eventos sociais e corporativos com foco em entretenimento, interação com o público e condução de atividades e cerimônias com desenvoltura e profissionalismo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded shadow mt-4">
                            <h5>Entre em Contato</h5>
                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Seu Nome <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Nome:"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Seu Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Email:"/>
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Assunto</label>
                                            <input name="subject" id="subject" className="form-control" placeholder="Assunto:"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Mensagem <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Mensagem:"></textarea>
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
        </section>
        <Footer top={true}/>
        <ScrollTop/>
        </>
    )
}