import Link from "next/link"
import { assetPath } from "@/utils/assetPath";

export default function Supervisors() {
    return (
        <>
            <section className="instructor-area section-pt-120 section-pb-70">
                <div className="container">
                    <div className="section__title-wrap">
                        <div className="row align-items-center gap-4 gap-md-0">
                            <div className="col-md-8">
                                <div className="section__title text-center text-md-start">
                                    <span className="sub-title">Our Supervisors Guidance Matter</span>
                                    <h2 className="title tg-svg">Our <span className="position-relative"><span className="svg-icon" id="svg-8" data-svg-icon={assetPath("assets/img/icons/title_shape.svg")} />Supervisors</span>
                                        </h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#E2FAFF', borderRadius: '135px 0 0 0' }} />
                                    <Link href="https://www.sliit.lk/about/about-sliit/academic-staff/"><img src={assetPath("/assets/img/group-members/supervisor.png")} alt="instructor"/></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <h4 className="name"><Link href="https://www.sliit.lk/about/about-sliit/academic-staff/">Ms. Jenny Krishara</Link></h4>
                                        <p>jenny.k@sliit.lk</p>

                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="#"><i className="fas fa-envelope" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#E4FFE2', borderRadius: '135px 115px 115px 0' }} />
                                    <Link href="https://www.sliit.lk/about/about-sliit/academic-staff/"><img src={assetPath("/assets/img/group-members/cosupervisor.png")} alt="instructor" /></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <h4 className="name"><Link href="https://www.sliit.lk/about/about-sliit/academic-staff/">Ms. Karthiga Rajendran</Link></h4>
                                        <p>karthiga.r@sliit.lk</p>

                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="#"><i className="fas fa-envelope" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#E8EDFF', borderRadius: '135px 0 0 0' }} />
                                   
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                       </div>
                                    <div className="right">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#FFE2E2', borderRadius: '135px 115px 115px 0' }} />
                                  
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                      </div>
                                    <div className="right">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
