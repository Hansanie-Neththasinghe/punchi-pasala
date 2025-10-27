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
                                    <span className="sub-title">Valuable guidance led the way</span>
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
                                    <Link href="https://www.sliit.lk/faculty-of-computing/staff/jenny.k/"><img src={assetPath("/assets/img/group-members/supervisor.png")} alt="instructor"/></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px"  }}><b>Supervisor</b></p>
                                        <h4 className="name"><Link href="https://www.sliit.lk/faculty-of-computing/staff/jenny.k/">Ms. Jenny Krishara</Link></h4><br />
                                        <p>Senior Lecturer <br />Faculty of Computing | Information Technology</p>

                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="https://www.linkedin.com/in/jenny-krishara-1a09a0111/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="mailto:jenny.k@sliit.lk"><i className="fas fa-envelope" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#E4FFE2', borderRadius: '135px 115px 115px 0' }} />
                                    <Link href="https://www.sliit.lk/faculty-of-computing/staff/karthiga.r/"><img src={assetPath("/assets/img/group-members/cosupervisor.png")} alt="instructor" /></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px" }}><b>Co-Supervisor</b></p>
                                        <h4 className="name"><Link href="https://www.sliit.lk/faculty-of-computing/staff/karthiga.r/">Ms. Karthiga Rajendran</Link></h4>
                                        <p>Lecturer <br />Faculty of Computing |<br /> Software Engineering</p>


                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="https://www.linkedin.com/in/karthiga-rajendran-6492b3171/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="mailto:karthiga.r@sliit.lk"><i className="fas fa-envelope" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#E8EDFF', borderRadius: '135px 0 0 0' }} />
                                    <Link href="/error-page"><img src={assetPath("/assets/img/group-members/Externel1.png")} alt="instructor" /></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px" }}><b>External-Supervisor</b></p>
                                        <h4 className="name">Dr. Kamalani Wanigasinghe</h4>
                                        <p>Peadiatric Psychologist <br /> SLMC Reg. No - 11614 <br /> Malabe</p>

                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="/error-page"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="/error-page"><i className="fas fa-envelope" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img"> 
                                    <div className="instructor__shape" style={{ backgroundColor: '#FFE2E2', borderRadius: '135px 115px 115px 0' }} />
                                    <Link href="/error-page"><img src={assetPath("/assets/img/group-members/Externel2.png")} alt="instructor" /></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px" }}><b>External-Supervisor</b></p>
                                        <h4 className="name">Mr. Buddhika Gunathilake</h4>
                                        <p>Vice Principal <br /> Deaf School <br /> Rathmalana</p>


                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="/error-page"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="/error-page"><i className="fas fa-envelope" /></Link></li>
                                        </ul>
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
