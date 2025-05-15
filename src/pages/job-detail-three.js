import React from "react";
import { Link, useParams } from "react-router-dom";

import logo1 from '../assets/images/company/2.png'
import NavbarDark from "../componants/navbarDark";
import Footer from "../componants/footer"
import ScrollTop from "../componants/scrollTop";

import {FiLayout, FiMapPin,FiUserCheck, FiClock, FiMonitor, FiBriefcase, FiBook, FiDollarSign, FiArrowRight,} from "../assets/icons/vander"
import { jobData } from "../data/data";

export default function JobDetailThree(){
    let params = useParams();
    let id = params.id
    let data = jobData.find((job)=>job.id === parseInt(id));
    return(
        <>
        <NavbarDark/>
        <section className="bg-half d-table w-100">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="card border-0 shadow rounded p-4 sticky-bar">
                            <img src={data?.image ? data.image : logo1} className="avatar avatar-large p-4 rounded-pill shadow bg-white" alt=""/>
                            
                            <div className="mt-4">
                                <h4 className="title mb-3">{data?.title ? data.title : 'Monitor para Team Building'}</h4>
                                <p className="para-desc text-muted">Monitor de Team Building em eventos corporativos e atividades em grupo</p>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-inline-flex align-items-center text-muted me-2"><FiLayout className="fea icon-sm text-primary me-1"/>{data?.name ? data.name : 'Empresa Exemplo'} Ltda.</li>
                                    <li className="d-inline-flex align-items-center text-muted"><FiMapPin className="fea icon-sm text-primary me-1" />{data?.city ? data?.city : 'Lisboa'}, {data?.country? data.country :'Portugal'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-6">
                        <div className="sidebar border-0">
                            <h5 className="mb-0">Informações da Vaga:</h5>

                            <ul className="list-unstyled mb-0 mt-4">                                
                                <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                                    <div className="d-flex widget align-items-center">
                                        <FiUserCheck className="fea icon-ex-md me-3"/>
                                        <div className="flex-1">
                                            <h6 className="widget-title mb-0">Tipo de Contrato:</h6>
                                            <small className="text-primary mb-0">{data?.jobTime ? data.jobTime : 'Período Integral'}</small>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                                    <div className="d-flex widget align-items-center">
                                        <FiMapPin className="fea icon-ex-md me-3"/>
                                        <div className="flex-1">
                                            <h6 className="widget-title mb-0">Localização:</h6>
                                            <small className="text-primary mb-0">{data?.city ? data?.city : 'Lisboa'}, {data?.country? data.country :'Portugal'}</small>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                                    <div className="d-flex widget align-items-center">
                                        <FiClock className="fea icon-ex-md me-3"/>
                                        <div className="flex-1">
                                            <h6 className="widget-title mb-0">Data de Publicação:</h6>
                                            <small className="text-primary mb-0 mb-0">{data?.date ? data.date : '15 de Maio de 2025'}</small>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                                    <div className="d-flex widget align-items-center">
                                        <FiMonitor className="fea icon-ex-md me-3" />
                                        <div className="flex-1">
                                            <h6 className="widget-title mb-0">Cargo:</h6>
                                            <small className="text-primary mb-0">Monitor para Team Building</small>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                                    <div className="d-flex widget align-items-center">
                                        <FiBriefcase className="fea icon-ex-md me-3"/>
                                        <div className="flex-1">
                                            <h6 className="widget-title mb-0">Experiência:</h6>
                                            <small className="text-primary mb-0">+1 ano</small>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                                    <div className="d-flex widget align-items-center">
                                        <FiBook className="fea icon-ex-md me-3"/>
                                        <div className="flex-1">
                                            <h6 className="widget-title mb-0">Formação:</h6>
                                            <small className="text-primary mb-0">Ensino Médio Completo</small>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-inline-item px-3 py-2 shadow rounded text-start m-1 bg-white">
                                    <div className="d-flex widget align-items-center">
                                        <FiDollarSign className="fea icon-ex-md me-3"/>
                                        <div className="flex-1">
                                            <h6 className="widget-title mb-0">Remuneração:</h6>
                                            <small className="text-primary mb-0">€900 - €1.200</small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h5>Descrição da Vaga: </h5>
                            <p className="text-muted">Estamos à procura de uma pessoa dinâmica, comunicativa e responsável para atuar como Monitor de Team Building em eventos corporativos e atividades em grupo. A função exige capacidade de liderança, empatia e organização.</p>

                            <h5 className="mt-4">Responsabilidades e Tarefas: </h5>
                            <ul className="list-unstyled">
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Conduzir atividades de integração e dinâmicas de grupo</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Manter o grupo engajado e motivado durante os eventos</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Garantir a segurança e bem-estar dos participantes</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Apoiar na organização logística das atividades</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Lidar com imprevistos de forma proativa e positiva</li>
                            </ul>

                            <h5 className="mt-4">Experiência e Habilidades Necessárias: </h5>
                            <ul className="list-unstyled">
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Experiência anterior com atividades em grupo, eventos ou educação</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Boa comunicação oral e empatia</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Capacidade de liderança e tomada de decisão</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Energia, bom humor e responsabilidade</li>
                                <li className="text-muted mt-2"><FiArrowRight className="fea icon-sm text-primary me-2"/>Disponibilidade para fins de semana e deslocamentos</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="/job-apply" className="btn btn-outline-primary">Candidatar-se <i className="mdi mdi-send"></i></Link>
                            </div>
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
