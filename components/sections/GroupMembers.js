import Link from "next/link"
import { assetPath } from "@/utils/assetPath";

export default function GroupMembers() {
    return (
        <>
            <section className="instructor-area section-pt-4 section-pb-70">
                <div className="container">
                    <div className="section__title-wrap">
                        <div className="row align-items-center gap-4 gap-md-0">
                            <div className="col-md-8">
                                <div className="section__title text-center text-md-start">
                                    <span className="sub-title">Our Enthusiastic Members Matter</span>
                                    <h2 className="title tg-svg">Group <span className="position-relative"><span className="svg-icon" id="svg-8" data-svg-icon={assetPath("assets/img/icons/title_shape.svg")} />Members</span>
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
                                    <Link href="https://www.linkedin.com/in/yasith-adithya-thalakotunna/"><img src={assetPath("/assets/img/group-members/member1.png")} alt="instructor"/></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px" }}><b>Group Leader</b></p>
                                        <h4 className="name"><Link href="/instructor-details">Thalakotunna T.Y.A</Link></h4>
                                        <p>IT21818516</p>
                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="mailto:it21818516@my.sliit.lk"><i className="fas fa-envelope" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/yasith-adithya-thalakotunna/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://www.youtube.com/@PunchiPasala-R25-009"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#E4FFE2', borderRadius: '135px 115px 115px 0' }} />
                                    <Link href="https://www.linkedin.com/in/gavithra-perera-93941a2a8/"><img src={assetPath("/assets/img/group-members/member2.png")} alt="instructor" /></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px" }}><b>member 1</b></p>
                                        <h4 className="name"><Link href="/instructor-details">Perera K.C.G.S</Link></h4>
                                        <p>IT21810664</p>

                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="mailto:it21810664@my.sliit.lk"><i className="fas fa-envelope" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/gavithra-perera-93941a2a8/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://www.youtube.com/@PunchiPasala-R25-009"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#E8EDFF', borderRadius: '135px 0 0 0' }} />
                                    <Link href="https://www.linkedin.com/in/hansanie-neththasinghe/"><img src={assetPath("/assets/img/group-members/member3.png")} alt="instructor" /></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px" }}><b>member 2</b></p>
                                        <h4 className="name"><Link href="/instructor-details">Neththasinghe N.A.M.H</Link></h4>
                                        <p>IT21321986</p>

                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="mailto:it21321986@my.sliit.lk"><i className="fas fa-envelope" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/hansanie-neththasinghe/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://www.youtube.com/@PunchiPasala-R25-009"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="instructor__item">
                                <div className="instructor__img">
                                    <div className="instructor__shape" style={{ backgroundColor: '#FFE2E2', borderRadius: '135px 115px 115px 0' }} />
                                    <Link href="https://www.linkedin.com/in/dilshan-rasanjana-5878682b3/"><img src={assetPath("/assets/img/group-members/member4.png")} alt="instructor" /></Link>
                                </div>
                                <div className="instructor__content">
                                    <div className="left">
                                        <p style={{ color: "red", fontSize: "18px" }}><b>member 3</b></p>
                                        <h4 className="name"><Link href="/instructor-details">Rasanjana J.A.D</Link></h4>
                                        <p>IT21812262</p>

                                    </div>
                                    <div className="right">
                                        <span className="share"><i className="flaticon-share" /></span>
                                        <ul className="social-list list-wrap">
                                            <li><Link href="mailto:it21812262@my.sliit.lk"><i className="fas fa-envelope" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/dilshan-rasanjana-5878682b3/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="https://www.youtube.com/@PunchiPasala-R25-009"><i className="fab fa-youtube" /></Link></li>
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
