import React from "react";
import { Link } from "react-router-dom";

import { categoriesData } from "../data/data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import { jobData } from "../data/data";
import { FiClock, FiDollarSign, FiMapPin } from "../assets/icons/vander";

export default function Categories(){
    let settings = {
        container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 1
            },
        },
      };
    return(
        <>
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title mb-3">Cria as tuas ligações</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Vê as empresas que precisam de ti.</p>
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
{/* 
                <div className="row">
                    <div className="col-12 mt-4">   
                        <div className="tiny-five-item">
                            <TinySlider settings={settings}>
                                {categoriesData.map((item,index)=>{
                                    let Icon = item.icon
                                    return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="position-relative job-category text-center px-4 py-5 rounded shadow m-2">
                                            <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                                <Icon className="fea icon-ex-md"/>
                                            </div>
                    
                                            <div className="mt-4">
                                                <Link to="" className="title h5 text-dark">{item.title} <br/> {item.title2}</Link>
                                                <p className="text-muted mb-0 mt-3">{item.jobs}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}