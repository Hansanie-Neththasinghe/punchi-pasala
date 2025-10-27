import Link from "next/link"
import { assetPath } from "@/utils/assetPath";


export default function Cta1() {
    return (
        <>
            <section className="cta-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta__wrapper">
                                <div className="section__title white-title">
                                    <h2 className="title tg-svg">Let’s Make Learning    <span className="position-relative"><span className="svg-icon" id="svg-9" data-svg-icon={assetPath("assets/img/icons/title_shape.svg")} />Accessible</span>
                                        for Every Childs</h2>
                                </div>
                                <div className="cta__desc">
                                    <p>Be part of our mission to raise awareness and support students facing learning challenges such as Dyscalculia and Dysgraphia through Punchi Pasala.
                                        <br /> Together, we can make a difference!</p>
                                </div>
                                <div className="tg-button-wrap justify-content-center justify-content-md-end">
                                    <Link href="https://forms.gle/mges6WTvpexbSybd6" className="btn white-btn tg-svg"><span className="text">
                                        Contribute Today</span> <span className="svg-icon" id="cta-btn" data-svg-icon={assetPath("assets/img/icons/btn-arrow.svg")} /></Link>
                                </div>
                                <img className="object" src={assetPath("/assets/img/objects/cta_shape01.svg")} style={{ left: 25, top: '-35px' }} alt="Object" data-aos="fade-down" data-aos-delay={400} />
                                <img className="object" src={assetPath("/assets/img/objects/cta_shape02.svg")} style={{ right: '-20px', bottom: '-80px' }} alt="Object" data-aos="fade-up" data-aos-delay={400} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    )
}
