import { useState } from "react";
import Link from "next/link"
import Slider from "react-slick"
import { assetPath } from "@/utils/assetPath";


const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}

export default function TechnologiesSlider() {
     const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <Slider {...settings} className="row brand-active">
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://github.com/features/actions"><img src={assetPath("/assets/img/technologies/16.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://nodejs.org/en"><img src={assetPath("/assets/img/technologies/17.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://colab.research.google.com/"><img src={assetPath("/assets/img/technologies/18.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://react.dev/"><img src={assetPath("/assets/img/technologies/19.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://cloudinary.com/"><img src={assetPath("/assets/img/technologies/20.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://www.tensorflow.org/"><img src={assetPath("/assets/img/technologies/21.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://www.youtube.com/"><img src={assetPath("/assets/img/technologies/22.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://www.python.org/"><img src={assetPath("/assets/img/technologies/23.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://aws.amazon.com"><img src={assetPath("/assets/img/technologies/24.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://github.com/"><img src={assetPath("/assets/img/technologies/25.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://code.visualstudio.com/"><img src={assetPath("/assets/img/technologies/26.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="https://mui.com/material-ui/"><img src={assetPath("/assets/img/technologies/27.png")} alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link  href="https://www.anaconda.com/download" style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none" }} >
                            <img src={assetPath("/assets/img/technologies/28.png")} alt="brand" />
                            {/* <p style={{ marginTop: "8px", color: "#333" }}>Name</p> */}
                        </Link>
                    </div>
                </div>
            </Slider>
            <br />
            <br />
            {/* <div className="tg-button-wrap">
                                    <Link href="/about-us" className="btn tg-svg"><span className="text">View All</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div> */}

                                {/* Centered Button */}
      <div
        className="tg-button-wrap"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          className="btn tg-svg"
          onClick={() => setShowPopup(true)}
          style={{ cursor: "pointer" }}
        >
          <span className="text">View All</span>
          <span
            className="svg-icon"
            id="about-btn"
            data-svg-icon={assetPath("assets/img/icons/btn-arrow.svg")}
          />
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2000,
    }}
  >
    <div
      style={{
        background: "#fff",
        padding: "50px",
        borderRadius: "8px",
        maxWidth: "1100px", // wider popup
        width: "95%",
        position: "relative",
        maxHeight: "90vh",
        overflowY: "auto",
      }}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        ✕
      </button>

      {/* Popup Content */}
      <h2 style={{ marginBottom: "15px", display:"flex", alignItems: "center", justifyContent: "center",}}>All Technologies</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          { src: assetPath('/assets/img/technologies/17.png'), name: "Node Js", link: "/tech17" },
          { src: assetPath('/assets/img/technologies/19.png'), name: "React Js", link: "/tech19" },
          { src: assetPath('/assets/img/technologies/27.png'), name: "Material UI", link: "/tech27" },
          { src: assetPath('/assets/img/technologies/26.png'), name: "VS Code", link: "/tech26" },
          { src: assetPath('/assets/img/technologies/25.png'), name: "GitHub", link: "/tech25" },
          { src: assetPath('/assets/img/technologies/16.png'), name: "GitHub Actions", link: "/tech16" },
          { src: assetPath('/assets/img/technologies/20.png'), name: "Cloudinary", link: "/tech20" },
          { src: assetPath('/assets/img/technologies/22.png'), name: "YouTube", link: "/tech22" },
          { src: assetPath('/assets/img/technologies/28.png'), name: "Anaconda VM", link: "/tech28" },
          { src: assetPath('/assets/img/technologies/18.png'), name: "Google Colab", link: "/tech18" },
          { src: assetPath('/assets/img/technologies/23.png'), name: "Python", link: "/tech23" },
          { src: assetPath('/assets/img/technologies/21.png'), name: "Tensorflow", link: "/tech21" },
          { src: assetPath('/assets/img/technologies/24.png'), name: "AWS", link: "/tech24" },
        ].map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            style={{
              perspective: "1000px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                paddingTop: "100%", // square
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s, scale 0.3s",
              }}
              className="tech-card"
            >
              {/* Front (Image) */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    transition: "transform 0.3s",
                  }}
                />
              </div>
              {/* Back (Text) */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#f3e1a5ff",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  borderRadius: "20px",
                }}
              >
                {tech.name}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>

    {/* Hover styles via inline <style> */}
    <style>{`
      .tech-card:hover {
        transform: rotateY(180deg) scale(1.1);
      }
    `}</style>
  </div>
)}

        </>
    )
}


// import { useState } from "react";

// export default function TechnologiesPopupButton() {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <>
//       {/* Centered Button */}
//       <div
//         className="tg-button-wrap"
//         style={{ display: "flex", justifyContent: "center" }}
//       >
//         <button
//           className="btn tg-svg"
//           onClick={() => setShowPopup(true)}
//           style={{ cursor: "pointer" }}
//         >
//           <span className="text">View All</span>
//           <span
//             className="svg-icon"
//             id="about-btn"
//             data-svg-icon="assets/img/icons/btn-arrow.svg"
//           />
//         </button>
//       </div>

//       {/* Popup */}
//       {showPopup && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.6)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 2000,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "8px",
//               maxWidth: "800px",
//               width: "90%",
//               position: "relative",
//               maxHeight: "90vh",
//               overflowY: "auto",
//             }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 border: "none",
//                 background: "transparent",
//                 fontSize: "22px",
//                 cursor: "pointer",
//               }}
//             >
//               ✕
//             </button>

//             {/* Popup Content */}
//             <h2 style={{ marginBottom: "15px" }}>All Technologies</h2>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//                 gap: "15px",
//               }}
//             >
//               <img src="/assets/img/technologies/16.png" alt="tech" />
//               <img src="/assets/img/technologies/17.png" alt="tech" />
//               <img src="/assets/img/technologies/18.png" alt="tech" />
//               <img src="/assets/img/technologies/19.png" alt="tech" />
//               <img src="/assets/img/technologies/20.png" alt="tech" />
//               <img src="/assets/img/technologies/21.png" alt="tech" />
//               <img src="/assets/img/technologies/22.png" alt="tech" />
//               <img src="/assets/img/technologies/23.png" alt="tech" />
//               <img src="/assets/img/technologies/24.png" alt="tech" />
//               <img src="/assets/img/technologies/25.png" alt="tech" />
//               <img src="/assets/img/technologies/26.png" alt="tech" />
//               <img src="/assets/img/technologies/27.png" alt="tech" />
//               <img src="/assets/img/technologies/28.png" alt="tech" />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
