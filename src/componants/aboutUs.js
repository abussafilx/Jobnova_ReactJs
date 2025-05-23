import React, { useState } from 'react';
import { Link } from "react-router-dom";

import about1 from '../assets/images/about/ab01.jpg'
import about2 from '../assets/images/about/ab02.jpg'

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

export default function AboutUs({containerClass}){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
            <div className={containerClass}>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 col-md-6 mb-5">
                        <div className="about-left">
                            <div className="position-relative shadow rounded img-one">
                                <img src={about1} className="img-fluid rounded" alt=""/>
                            </div>

                            <div className="img-two shadow rounded p-2 bg-white">
                                <img src={about2} className="img-fluid rounded" alt=""/>

                                <div className="position-absolute top-0 start-50 translate-middle">
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

                    <div className="col-lg-6 col-md-6">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-3"><strong>A forma mais rápida </strong> <br/> de contratar ou ser contratado para eventos.</h4>
                            <p className="text-muted para-desc mb-0">A BORA descomplica a comunicação e fortalece as ligações. 
<br></br> <br></br>Conheça a BORA! Eventos.
</p>
                        
                            {/* <ul className="list-unstyled text-muted mb-0 mt-3">
                                <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><i className="mdi mdi-check-circle-outline align-middle"></i></span>Create your own skin to match your brand</li>
                            </ul> */}

                            <div className="mt-4">
                                <Link to="https://www.canva.com/design/DAGnhHcqmoI/njcLiQykd9ROBNkVKPUCfQ/view?utm_content=DAGnhHcqmoI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2e63c146f0" className="btn btn-primary">Conheça a BORA<i className="mdi mdi-arrow-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}