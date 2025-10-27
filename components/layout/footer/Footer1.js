import Link from "next/link"
import { assetPath } from "@/utils/assetPath";

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
                <div className="footer__top-wrap">
                    <div className="container">
                        <div className="row">


                            {/* <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer__about">
                                        <div className="footer__logo logo">
                                            <Link href="/"><img src={assetPath('/assets/img/logo/logo-punchi-pasala.png')} alt="img" /></Link>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer__about">
                                       
                                        <p>when an unknown printer took galley of type and scrambled it to make pspecimen bookt
                                            has.</p>
                                        <ul className="list-wrap m-0 p-0">
                                            <li className="address">463 7th Ave, NY 10018, USA</li>
                                            <li className="number">+123 88 9900 456</li>
                                            

                                        </ul>
                                    </div>
                                </div>
                            </div> */}


<div className="col-xl-4 col-lg-4 col-sm-6" 
     style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
    <div className="footer-widget">
        <div className="footer__about">
            <div className="footer__logo logo">
                <Link href="/"><img src={assetPath('/assets/img/logo/logo-punchi-pasala.png')} alt="img" /></Link>
            </div>
        </div>
    </div>
</div>

<div className="col-xl-4 col-lg-4 col-sm-6" 
     style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
    <div className="footer-widget">
        <div className="footer__about">
            <p style={{ textAlign: "center" }}>
Learning is a journey open to every student, and no difficulty can take away their innate ability to understand, explore, and succeed. With patience, support, and belief in their own potential, every student can flourish.            </p>
            {/* <ul className="list-wrap m-0 p-0" style={{ textAlign: "center" }}>
                <li className="address">Every Child Matters</li>
                <li ><p>punchipasalar25009@gmail.com</p></li>
            </ul> */}
        </div>
    </div>
</div>

                           

                            <div className="col-xl-4 col-lg-4 col-sm-6">
  <div className="footer-widget widget_nav_menu">
    <h4 className="fw-title">Resources</h4>

    <ul className="list-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
      <li><Link href="/#home">Home</Link></li>
      <li><Link href="/#documents">Documents</Link></li>
      <li><Link href="/#domain">Domain</Link></li>
      <li><Link href="/#presentations">Presentations</Link></li>
      <li><Link href="/#milestones">Milestones</Link></li>
      <li><Link href="/#contact">Contact Us</Link></li>
    </ul>

  </div>
</div>

                            


                
                        </div>
                        
                    <div className="row">
  <div className="col-xl-12 col-lg-12 col-sm-12">
    <div className="footer-widget">
      <div className="footer__about">
        <ul className="list-wrap m-0 p-0" style={{ display: "flex", justifyContent: "center", alignItems: "center", listStyle: "none", gap: "18px" }}>
          <li className="socials" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "18px" }}>
            <Link href="/#home" title="Home"><i className="fas fa-home" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#domain" title="Domain"><i className="fas fa-book" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#milestones" title="Milestones"><i className="fas fa-flag-checkered" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#documents" title="Documents"><i className="fas fa-file-alt" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#presentations" title="Presentations"><i className="fas fa-chalkboard-teacher" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#gallery" title="Gallery"><i className="fas fa-images" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#join" title="Join Us"><i className="fas fa-users" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#about" title="About Us"><i className="fas fa-info-circle" style={{ color: "#fff", fontSize: "22px" }} /></Link>
            <Link href="/#contact" title="Contact Us"><i className="fas fa-envelope" style={{ color: "#fff", fontSize: "22px" }} /></Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

                    </div>
                </div>
                <div className="copyright__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="copyright__text">
                                    <p>Copyright © 2025 Punchi Pasala. All rights reserved.</p>
                                    {/* <p>Copyright © {new Date().getFullYear()} eduvalt. All rights reserved.</p> */}

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="copyright__menu">
                                    <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                                        <li><Link href="#">Privacy Policy</Link></li>
                                        <li><Link href="#">Terms  Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
