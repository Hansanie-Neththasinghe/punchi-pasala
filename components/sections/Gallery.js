// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Gallery({
//   images = [
//     "/assets/img/others/cat01.jpg",
//     "/assets/img/others/cat02.jpg",
//     "/assets/img/others/cat03.jpg",
//     "/assets/img/others/cat04.jpg",
//     "/assets/img/others/cat01.jpg",
//     "/assets/img/others/cat02.jpg",
//     "/assets/img/others/cat03.jpg",
//     "/assets/img/others/cat04.jpg",
//     "/assets/img/others/cat01.jpg",
//     "/assets/img/others/cat02.jpg",
//     "/assets/img/others/cat03.jpg",
//     "/assets/img/others/cat04.jpg",

//   ],
// }) {
//   const [open, setOpen] = useState(false);
//   const [current, setCurrent] = useState(0);

//   const openModal = (idx) => {
//     setCurrent(idx);
//     setOpen(true);
//   };

//   const closeModal = () => setOpen(false);

//   // Keyboard navigation
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e) => {
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowRight")
//         setCurrent((i) => (i + 1) % images.length);
//       if (e.key === "ArrowLeft")
//         setCurrent((i) => (i - 1 + images.length) % images.length);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, images.length]);

//   return (
//     <>
//       {/* Grid */}
//       <div className="gallery ">
//         {images.map((src, idx) => (
//           <button
//             key={idx}
//             className="card"
//             onClick={() => openModal(idx)}
//             aria-label={`Open image ${idx + 1}`}
//           >
//             <Image
//               src={src}
//               alt={`Gallery item ${idx + 1}`}
//               width={400}
//               height={250}
//               className="gallery-img"
//             />
//           </button>
//         ))}
//       </div>

//       {/* Modal */}
//       {open && (
//         <div className="overlay" onClick={closeModal}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <button className="close" onClick={closeModal}>✕</button>
//             <button
//               className="nav left"
//               onClick={() =>
//                 setCurrent((i) => (i - 1 + images.length) % images.length)
//               }
//             >
//               ‹
//             </button>
//             <Image
//               src={images[current]}
//               alt={`Preview ${current + 1}`}
//               width={1200}
//               height={800}
//               className="modal-img"
//             />
//             <button
//               className="nav right"
//               onClick={() => setCurrent((i) => (i + 1) % images.length)}
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .gallery {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//           gap: 16px;
//         }
//         .card {
//           padding: 0;
//           border: none;
//           background: transparent;
//           cursor: pointer;
//           overflow: hidden;
//           border-radius: 8px;
//         }
//         .gallery-img {
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }
//         .card:hover .gallery-img {
//           transform: scale(1.07);
//         }
//         .overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0, 0, 0, 0.7);
//           display: grid;
//           place-items: center;
//           z-index: 1000;
//           padding: 20px;
//         }
//         .modal {
//           position: relative;
//           max-width: 70vw;
//           max-height: 75vh;
//           display: grid;
//           place-items: center;
//         }
//         .modal-img {
//           max-width: 100%;
//           max-height: 70vh;
//           object-fit: center;
//         }
//         .close {
//           position: absolute;
//           top: 10px;
//           right: 15px;
//           background: none;
//           border: none;
//           font-size: 28px;
//           color: #000;
//           cursor: pointer;
//         }
//         .nav {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background: rgba(215, 177, 37, 0.8);
//           border: none;
//           color: #000;
//           font-size: 36px;
//           cursor: pointer;
//           padding: 4px 12px;
//           border-radius: 6px;
//         }
//         .nav.left {
//           left: 10px;
//         }
//         .nav.right {
//           right: 10px;
//         }
//       `}</style>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery({
  images = [
    "/punchi-pasala/assets/img/others/cat01.jpg",
    "/assets/img/others/cat02.jpg",
    "/assets/img/others/cat03.jpg",
    "/assets/img/others/cat04.jpg",
    "/assets/img/others/cat01.jpg",
    "/assets/img/others/cat02.jpg",
    "/assets/img/others/cat03.jpg",
    "/assets/img/others/cat04.jpg",
    "/assets/img/others/cat01.jpg",
    "/assets/img/others/cat02.jpg",
    "/assets/img/others/cat03.jpg",
    "/assets/img/others/cat04.jpg",
  ],
}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = (idx) => {
    setCurrent(idx);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") setCurrent((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  return (
    <>
    <div className="container">

  <div className="categories__title-wrap text-center text-lg-start m-0 ">
                                <div className="section__title mb-10">
                                    <span className="sub-title"> Gallery </span>
                                    <h2 className="title tg-svg">Our <span className="position-relative"><span className="svg-icon" id="svg-5" data-svg-icon="assets/img/icons/title_shape.svg" />Gallery</span>
                                    </h2>
                                </div>
                            </div>
  </div>
      <section className="gallery-wrap ">
        {/* <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "38px", fontWeight: "600", color: "#000" }}>
    Gallery
  </h2> */}
  
            
        <div className="gallery container">
          {images.map((src, idx) => (
            <button
              key={idx}
              className="card"
              onClick={() => openModal(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <Image
                src={src}
                alt={`Gallery item ${idx + 1}`}
                width={400}
                height={250}
                className="gallery-img"
              />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>✕</button>
            <button
              className="nav left"
              onClick={() => setCurrent((i) => (i - 1 + images.length) % images.length)}
            >
              ‹
            </button>
            <Image
              src={images[current]}
              alt={`Preview ${current + 1}`}
              width={1000}
              height={700}
              className="modal-img"
            />
            <button
              className="nav right"
              onClick={() => setCurrent((i) => (i + 1) % images.length)}
            >
              ›
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-wrap {
          background: rgba(244, 243, 240, 0.8);
          padding: 40px 0;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(6, 1fr); /* images per row */
          gap: 16px;
        }
        .card {
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        /* Ensure we target next/image's internal <img> */
        .gallery-img :global(img),
        :global(img.gallery-img) {
          transition: transform 0.3s ease;
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .card:hover :global(img),
        .card:hover :global(img.gallery-img) {
          transform: scale(1.07);
        }

        /* Modal (reduced size) */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: grid;
          place-items: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal {
          position: relative;
          max-width: 60vw;  /* reduced width */
          max-height: 65vh; /* reduced height */
          display: grid;
          place-items: center;
          border-radius: 12px;
          overflow: hidden;
          background: transparent;
        }
        .modal-img {
          max-width: 100%;
          max-height: 50vh; /* ensure smaller preview */
          object-fit: contain;
        }
        .close {
          position: absolute;
          top: 8px;
          right: 12px;
          background: none;
          border: none;
          font-size: 28px;
          color: #000;
          cursor: pointer;
        }
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(215, 177, 37, 0.8);
          border: none;
          color: #000;
          font-size: 36px;
          cursor: pointer;
          padding: 4px 12px;
          border-radius: 6px;
          user-select: none;
        }
        .nav.left { left: 10px; }
        .nav.right { right: 10px; }

        /* Optional: make it degrade nicely on very small screens */
        @media (max-width: 1024px) {
          .gallery {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}
