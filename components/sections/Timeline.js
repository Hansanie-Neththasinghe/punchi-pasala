// export default function Timeline() {
//   return (
//     <div style={{ position: "relative", margin: "50px auto", width: "80%" }}>
//       {/* Vertical line */}
//       <div
//         style={{
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: "50%",
//           width: "4px",
//           height: "100%",
//           background: "#f04c61",
//           transform: "translateX(-50%)",
//         }}
//       ></div>

//       {/* Timeline Item Left */}
//       <div style={{ width: "45%", padding: "20px", position: "relative", left: 0, textAlign: "right" }}>
//         <div
//           style={{
//             background: "white",
//             padding: "15px",
//             borderRadius: "8px",
//             boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
//           }}
//         >
//           <span
//             style={{
//               display: "inline-block",
//               background: "#f04c61",
//               color: "white",
//               padding: "5px 12px",
//               borderRadius: "20px",
//               fontSize: "14px",
//               fontWeight: "bold",
//             }}
//           >
//             Aug 2024
//           </span>
//           <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "10px" }}>Project Proposal</h3>
//           <p style={{ color: "#555", margin: "10px 0" }}>
//             A Project Proposal is presented to potential sponsors...
//           </p>
//           <progress value="12" max="100" style={{ width: "100%", height: "8px", borderRadius: "5px" }}></progress>
//           <p style={{ marginTop: "8px", fontWeight: "bold" }}>Marks Allocated: 12</p>
//         </div>
//       </div>

//       {/* Timeline Item Right */}
//       <div style={{ width: "45%", padding: "20px", position: "relative", left: "55%" }}>
//         <div
//           style={{
//             background: "white",
//             padding: "15px",
//             borderRadius: "8px",
//             boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
//           }}
//         >
//           <span
//             style={{
//               display: "inline-block",
//               background: "#f04c61",
//               color: "white",
//               padding: "5px 12px",
//               borderRadius: "20px",
//               fontSize: "14px",
//               fontWeight: "bold",
//             }}
//           >
//             Dec 2024
//           </span>
//           <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "10px" }}>Progress Presentation I</h3>
//           <p style={{ color: "#555", margin: "10px 0" }}>
//             Reviews the 50% completion status of the project...
//           </p>
//           <progress value="15" max="100" style={{ width: "100%", height: "8px", borderRadius: "5px" }}></progress>
//           <p style={{ marginTop: "8px", fontWeight: "bold" }}>Marks Allocated: 15</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// export default function Timeline() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const timelineData = [
//     {
//       date: "28 Aug 2024",
//       title: "Brainstorming Workshop",
//       desc: "Initial idea generation session to explore potential project topics.",
//       color: "#d9f7be",
//     },
//     {
//       date: "6 Oct 2024",
//       title: "Group Registration",
//       desc: "Students form teams and officially register their groups.",
//       color: "#b5f5ec",
//     },
//     {
//       date: "16-20 Dec 2024",
//       title: "Topic Assessment Form (TAF)",
//       desc: "Submission of topic assessment forms for approval.",
//       color: "#f6ffed",
//     },
//     {
//       date: "5 Jan 2025",
//       title: "Project Charter",
//       desc: "Define project scope, objectives, and responsibilities.",
//       color: "#f9f0ff",
//     },
//     {
//       date: "15-17 Jan 2025",
//       title: "Proposal Reports (Draft)",
//       desc: "First draft of proposal reports submitted for feedback.",
//       color: "#fff7e6",
//     },
//     {
//       date: "27-28 Jan 2025",
//       title: "Proposal Presentation",
//       desc: "Presentation of project proposal to faculty panel.",
//       color: "#e6f7ff",
//     },
//     {
//       date: "31 Jan 2025",
//       title: "Proposal Reports (Final)",
//       desc: "Final proposal reports submitted for marking.",
//       color: "#fffbe6",
//     },
//     {
//       date: "7-9 Apr 2025",
//       title: "Progress Presentation I",
//       desc: "50% project completion status presentation.",
//       color: "#ffe7ba",
//     },
//     {
//       date: "7-9 Apr 2025",
//       title: "Checklist I",
//       desc: "Checklist evaluation of project deliverables.",
//       color: "#ffd591",
//     },
//     {
//       date: "23 Jun 2025",
//       title: "Research Paper",
//       desc: "Submission of research paper draft.",
//       color: "#f0f5ff",
//     },
//     {
//       date: "29 Aug 2025",
//       title: "Final Reports",
//       desc: "Finalized reports submitted for evaluation.",
//       color: "#fff1f0",
//     },
//     {
//       date: "15-16 Sep 2025",
//       title: "Progress Presentation II",
//       desc: "Second progress update presentation.",
//       color: "#fffbe6",
//     },
//     {
//       date: "15 Sep 2025",
//       title: "Checklist II",
//       desc: "Second checklist verification of deliverables.",
//       color: "#ffe58f",
//     },
//     {
//       date: "3 Nov 2025",
//       title: "Research Paper Registration Notification",
//       desc: "Official registration notification of research paper.",
//       color: "#e6fffb",
//     },
//     {
//       date: "27-28 Oct 2025",
//       title: "Final Presentation & VIVA",
//       desc: "Final defense presentation and viva session.",
//       color: "#fff2e8",
//     },
//     {
//       date: "27-28 Oct 2025",
//       title: "Project Website",
//       desc: "Submission of project website showcasing work.",
//       color: "#e6f7ff",
//     },
//     {
//       date: "31 Oct 2025",
//       title: "Research Logbook",
//       desc: "Final submission of research logbook.",
//       color: "#f0f5ff",
//     },
//   ];

//   return (
//     <div style={{ position: "relative", margin: "50px auto", width: "80%" }}>
//       {/* Vertical line */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: "50%",
//           width: "4px",
//           height: "100%",
//           background: "#f04c61",
//           transform: "translateX(-50%)",
//         }}
//       ></div>

//       {timelineData.map((item, index) => (
//         <div
//           key={index}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//           style={{
//             width: "45%",
//             padding: "20px",
//             position: "relative",
//             left: index % 2 === 0 ? "0" : "55%",
//             textAlign: index % 2 === 0 ? "right" : "left",
//             transition: "transform 0.3s ease",
//             transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
//             cursor: "pointer",
//           }}
//         >
//           {/* Circle indicator */}
//           <span
//             style={{
//               position: "absolute",
//               top: "20px",
//               [index % 2 === 0 ? "right" : "left"]: "-34px",
//               width: "20px",
//               height: "20px",
//               borderRadius: "50%",
//               background: hoveredIndex === index ? "#f04c61" : "#fff",
//               border: "4px solid #f04c61",
//               transition: "background 0.3s ease",
//             }}
//           ></span>

//           {/* Card */}
//           <div
//             style={{
//               background: item.color,
//               padding: "15px",
//               borderRadius: "8px",
//               boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
//             }}
//           >
//             <span
//               style={{
//                 display: "inline-block",
//                 background: "#f04c61",
//                 color: "white",
//                 padding: "5px 12px",
//                 borderRadius: "20px",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//               }}
//             >
//               {item.date}
//             </span>
//             <h3
//               style={{
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 marginTop: "10px",
//               }}
//             >
//               {item.title}
//             </h3>
//             <p style={{ color: "#555", margin: "10px 0" }}>{item.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    {
      date: "28 Aug 2024",
      title: "Brainstorming Workshop",
      desc: "Initial idea generation session to explore potential project topics.",
      color: "#fff7e6",
      marks: 0,
      progressBar: 0,
    },
    {
      date: "6 Oct 2024",
      title: "Group Registration",
      desc: "Students form teams and officially register their groups.",
      color: "#fff7e6",
      marks: 0,
      progressBar: 0,
    },
    {
      date: "16-20 Dec 2024",
      title: "Topic Assessment Form (TAF)",
      desc: "Submission of topic assessment forms for approval.",
      color: "#fff7e6",
      marks: 0,
      progressBar: 0,
    },
    {
      date: "5 Jan 2025",
      title: "Project Charter",
      desc: "Define project scope, objectives, and responsibilities.",
      color: "#fff7e6",
      marks: 0,
      progressBar: 0,
    },
    {
      date: "27 Jan 2025",
      title: "1. Proposal Presentation",
      desc: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      color: "#fff7e6",
      marks: 12,
      progressBar: 12,
    },
    {
      date: "7-9 Apr 2025",
      title: "2. Progress Presentation I",
      desc: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      color: "#fff7e6",
      marks: 15,
      progressBar: 27,
    },
    {
      date: "23 Jun 2025",
      title: "3. Research Paper",
      desc: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
      color: "#fff7e6",
      marks: 10,
      progressBar: 37,
    },
    {
      date: "7-9 Apr 2025",
      title: "4. Progress Presentation II",
      desc: "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
      color: "#fff7e6",
      marks: 18,
      progressBar: 55,
    },
    {
      date: "7-9 Apr 2025",
      title: "5. Website",
      desc: "The Website helps to promote our research project and reveals all details related to the project.",
      color: "#fff7e6",
      marks: 2,
      progressBar: 57,
    },
    {
      date: "7-9 Apr 2025",
      title: "6. Logbook",
      desc: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      color: "#fff7e6",
      marks: 4,
      progressBar: 61,
    },
    {
      date: "7-9 Apr 2025",
      title: "7. Final Report",
      desc: "Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      color: "#fff7e6",
      marks: 19,
      progressBar: 80,
    },
    {
      date: "27-28 Oct 2025",
      title: "8. Final Presentation & VIVA",
      desc: "Viva is held individually to assess each members contribution to the project.",
      color: "#fff7e6",
      marks: 20,
      progressBar: 100,
    },
  ];

  return (
    <div style={{ position: "relative", margin: "50px auto", width: "80%" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "4px",
          height: "100%",
          background: "#f89e18ff",
          transform: "translateX(-50%)",
        }}
      ></div>

      {timelineData.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            width: "45%",
            padding: "20px",
            position: "relative",
            left: index % 2 === 0 ? "0" : "55%",
            textAlign: index % 2 === 0 ? "right" : "left",
            transition: "transform 0.3s ease",
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            cursor: "pointer",
          }}
        >
          {/* Circle indicator (center aligned with card) */}
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              [index % 2 === 0 ? "right" : "left"]: "-34px",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: hoveredIndex === index ? "#f89e18ff" : item.color,
              border: "4px solid #f89e18ff",
              transition: "background 0.3s ease",
            }}
          ></span>

          {/* Card */}
          <div
            style={{
              background: item.color,
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "#f89e18ff",
                color: "white",
                padding: "5px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {item.date}
            </span>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginTop: "10px",
                color: "#000000",
              }}
            >
              {item.title}
            </h3>
            <p style={{ color: "#000000", margin: "10px 0", fontSize: "18px", }}>{item.desc}</p>

            {/* Progress bar for marks */}
            <div
              style={{
                background: "#ffffffff",
                borderRadius: "5px",
                overflow: "hidden",
                height: "8px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: `${item.progressBar}%`,
                  height: "100%",
                  background: "#f89e18ff",
                  transition: "width 0.5s ease",
                }}
              ></div>
            </div>
            <p style={{ marginTop: "8px", fontWeight: "bold", color: "#393204ff", fontSize: "18px",}}>
              Marks Allocated: {item.marks}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
