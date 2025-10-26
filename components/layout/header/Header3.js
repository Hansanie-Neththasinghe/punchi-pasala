import Link from "next/link"
import MobileMenu from "../MobileMenu"
import { Menu } from '@headlessui/react'
export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <div id="header-fixed-height" />
            <header className="tg-header__style-three">
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="tg-header__top-info list-wrap">
                                    <li> <span><b>Punchi Pasala</b></span></li>
                                    <li><i className="flaticon-email" /> <Link href="mailto:info@gmail.com">punchipasalar25009@gmail.com</Link></li>
                                    <li><span><b>Every Child Matters</b></span></li>
                                </ul>
                            </div>
                            {/* <div className="col-md-6">
                                <ul className="tg-header__top-social list-wrap">
                                    <li>Follow Us On :</li>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-whatsapp" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap">
                                    <nav className="tgmenu__nav">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/logo-punchi-pasala.png" alt="Logo" width="100" height="80"/></Link>
                                        </div>
                                        <div className="tgmenu__categories d-none d-md-block">
                                            {/* <Menu as="div" className="dropdown">
                                                <Menu.Button as="button" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 12H6.85714V6.85714H12V12ZM5.14286 12H0V6.85714H5.14286V12ZM12 5.14286H6.85714V0H12V5.14286ZM5.14286 5.14286H0V0H5.14286V5.14286Z" fill="currentcolor" />
                                                    </svg>
                                                    Categories
                                                </Menu.Button>
                                                <Menu.Items as="ul" className="dropdown-menu d-block" aria-labelledby="dropdownMenuButton1">
                                                    <li><Link className="dropdown-item" href="/courses">Business</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Data Science</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Art  Design</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Marketing</Link></li>
                                                    <li><Link className="dropdown-item" href="/courses">Finance</Link></li>
                                                </Menu.Items>
                                            </Menu> */}
                                        </div>
                                        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation">
  <li><Link href="/#home">Home</Link></li>

  <li className="menu-item-has-children">
    <Link href="/#domain">Domain</Link>
    <ul className="sub-menu">
      <li><Link href="/#domain">Literature Survey</Link></li>
      <li><Link href="/#domain">Research Gap</Link></li>
      <li><Link href="/#domain">Research Problem</Link></li>
      <li><Link href="/#domain">Research Objectives</Link></li>
      <li><Link href="/#domain">Methodology</Link></li>
      <li><Link href="/#domain">Technologies and Tools</Link></li>
    </ul>
  </li>

  <li><Link href="/#milestones">Milestones</Link></li>
  <li><Link href="/#documents">Documents</Link></li>
  <li><Link href="/#presentations">Presentations</Link></li>
  <li><Link href="/#gallery">Gallery</Link></li>
  <li><Link href="/#join">Join Us</Link></li>
  <li><Link href="/#about">About Us</Link></li>
  <li><Link href="/#contact">Contact Us</Link></li>
</ul>

                                        </div>
                                        {/* <div className="tgmenu__search-bar">
                                            <form action="#">
                                                <input type="text" placeholder="Search For Course . . ." />
                                                <button type="submit"><i className="flaticon-searching" /></button>
                                            </form>
                                        </div> */}
                                        {/* <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="mini-cart-icon">
                                                    <Link href="/shop" className="cart-count">
                                                        <img src="/assets/img/icons/cart.svg" alt="cart" />
                                                        <span className="mini-cart-count">0</span>
                                                    </Link>
                                                </li>
                                                <li className="header-btn"><Link href="/contact" className="btn">Sign Up</Link></li>
                                            </ul>
                                        </div> */}
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo-punchi-pasala.png" alt="Logo" height={0}  /></Link>
                                        </div>
                                        {/* <div className="tgmobile__search">
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button><i className="fas fa-search" /></button>
                                            </form>
                                        </div> */}
                                        <div className="tgmobile__menu-outer">
                                            {/* <MobileMenu /> */}
                                            <MobileMenu handleMobileMenu={handleMobileMenu} />

                                        </div>
                                        {/* <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-btn login-btn"><Link href="#" className="btn">Log in</Link></li>
                                                <li className="header-btn"><Link href="#" className="btn">Try For Free</Link></li>
                                            </ul>
                                        </div> */}
                                        {/* <div className="social-links">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div> */}
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
