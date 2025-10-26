// import Link from "next/link"
// import { useState } from "react"
// export default function MobileMenu() {
//     const [isActive, setIsActive] = useState({
//         status: false,
//         key: "",
//     })

//     const handleToggle = (key) => {
//         if (isActive.key === key) {
//             setIsActive({
//                 status: false,
//             })
//         } else {
//             setIsActive({
//                 status: true,
//                 key,
//             })
//         }
//     }

//     return (
//         <>
//             <ul className="navigation">
//                 <li className="active menu-item-has-children"><Link href="#">Home</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
//                         <li className="active"><Link href="/">Home One</Link></li>
//                         <li><Link href="/index-2">Home Two</Link></li>
//                         <li><Link href="/index-3">Home Three</Link></li>
//                     </ul>
//                     <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="plus-line" /></div>
//                 </li>
//                 <li className="menu-item-has-children"><Link href="#">Courses</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
//                         <li><Link href="/courses">All Courses</Link></li>
//                         <li><Link href="/course-details">Course Details</Link></li>
//                     </ul>
//                     <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="plus-line" /></div></li>
//                 <li className="menu-item-has-children"><Link href="#">Pages</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
//                         <li><Link href="/about-us">About Us</Link></li>
//                         <li><Link href="/instructors">Our Instructors</Link></li>
//                         <li><Link href="/instructor-details">Instructor Details</Link></li>
//                         <li><Link href="/mentors">Our Mentors</Link></li>
//                         <li><Link href="/events">Our Events</Link></li>
//                         <li><Link href="/events-details">Event Details</Link></li>
//                         <li><Link href="/faq">Asked Question</Link></li>
//                         <li><Link href="/404">404 Page</Link></li>
//                         <li><Link href="/contact">contact</Link></li>
//                     </ul>
//                     <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="plus-line" /></div></li>
//                 <li className="menu-item-has-children"><Link href="#">Shop</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
//                         <li><Link href="/shop">Shop Page</Link></li>
//                         <li><Link href="/shop-details">Shop Details</Link></li>
//                     </ul>
//                     <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="plus-line" /></div></li>
//                 <li className="menu-item-has-children"><Link href="#">Blog</Link>
//                     <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
//                         <li><Link href="/blog-grid">Blog Grid</Link></li>
//                         <li><Link href="/blog">Blog Standard</Link></li>
//                         <li><Link href="/blog-details">Blog Details</Link></li>
//                     </ul>
//                     <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="plus-line" /></div>
//                 </li>
//             </ul>
//         </>
//     )
// }


import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <>
      <ul className="navigation">
        {/* 🏠 Home */}
        <li>
          <Link href="/#home" onClick={handleMobileMenu}>
            Home
          </Link>
        </li>

        {/* 📚 Domain Dropdown */}
        <li className="menu-item-has-children">
          <Link href="/#domain" onClick={handleMobileMenu}>
            Domain
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/#domain" onClick={handleMobileMenu}>
                Literature Survey
              </Link>
            </li>
            <li>
              <Link href="/#domain" onClick={handleMobileMenu}>
                Research Gap
              </Link>
            </li>
            <li>
              <Link href="/#domain" onClick={handleMobileMenu}>
                Research Problem
              </Link>
            </li>
            <li>
              <Link href="/#domain" onClick={handleMobileMenu}>
                Research Objectives
              </Link>
            </li>
            <li>
              <Link href="/#domain" onClick={handleMobileMenu}>
                Methodology
              </Link>
            </li>
            <li>
              <Link href="/#domain" onClick={handleMobileMenu}>
                Technologies & Tools
              </Link>
            </li>
          </ul>
          <div
            className={
              isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={() => handleToggle(1)}
          >
            <span className="plus-line" />
          </div>
        </li>

        {/* ⏳ Milestones */}
        <li>
          <Link href="/#milestones" onClick={handleMobileMenu}>
            Milestones
          </Link>
        </li>

        {/* 📄 Documents */}
        <li>
          <Link href="/#documents" onClick={handleMobileMenu}>
            Documents
          </Link>
        </li>

        {/* 🎤 Presentations */}
        <li>
          <Link href="/#presentations" onClick={handleMobileMenu}>
            Presentations
          </Link>
        </li>

        {/* 🖼️ Gallery */}
        <li>
          <Link href="/#gallery" onClick={handleMobileMenu}>
            Gallery
          </Link>
        </li>

        {/* 👩‍🏫 Supervisors & Group Members */}
        <li>
          <Link href="/#team" onClick={handleMobileMenu}>
            Our Team
          </Link>
        </li>

        {/* 🤝 Join Us */}
        <li>
          <Link href="/#join" onClick={handleMobileMenu}>
            Join Us
          </Link>
        </li>

        {/* ℹ️ About */}
        <li>
          <Link href="/#about" onClick={handleMobileMenu}>
            About Us
          </Link>
        </li>

        {/* 📬 Contact */}
        <li>
          <Link href="/#contact" onClick={handleMobileMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
}
