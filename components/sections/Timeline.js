"use client";
import { useState } from "react";

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    // {
    //   date: "28 Aug 2024",
    //   title: "Brainstorming Workshop",
    //   desc: "Initial idea generation session to explore potential project topics.",
    //   color: "#fff7e6",
    //   marks: 0,
    //   progressBar: 0,
    // },
    // {
    //   date: "6 Oct 2024",
    //   title: "Group Registration",
    //   desc: "Students form teams and officially register their groups.",
    //   color: "#fff7e6",
    //   marks: 0,
    //   progressBar: 0,
    // },
    // {
    //   date: "16-20 Dec 2024",
    //   title: "Topic Assessment Form (TAF)",
    //   desc: "Submission of topic assessment forms for approval.",
    //   color: "#fff7e6",
    //   marks: 0,
    //   progressBar: 0,
    // },
    // {
    //   date: "5 Jan 2025",
    //   title: "Project Charter",
    //   desc: "Define project scope, objectives, and responsibilities.",
    //   color: "#fff7e6",
    //   marks: 0,
    //   progressBar: 0,
    // },
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
      date: "15 Sep 2025",
      title: "4. Progress Presentation II",
      desc: "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
      color: "#fff7e6",
      marks: 18,
      progressBar: 55,
    },
    {
      date: "29 Aug 2025",
      title: "5. Final Report",
      desc: "Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      color: "#fff7e6",
      marks: 19,
      progressBar: 74,
    },
    {
      date: "27 Oct 2025",
      title: "6. Final Presentation & VIVA",
      desc: "Viva is held individually to assess each members contribution to the project.",
      color: "#fff7e6",
      marks: 20,
      progressBar: 94,
    },
    {
      date: "27 Oct 2025",
      title: "7. Website",
      desc: "The Website helps to promote our research project and reveals all details related to the project.",
      color: "#fff7e6",
      marks: 2,
      progressBar: 96,
    },
    {
      date: "31 Oct 2025",
      title: "8. Logbook",
      desc: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      color: "#fff7e6",
      marks: 4,
      progressBar: 100,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="section__title-wrap">
          <div className="row align-items-center gap-4 gap-md-0">
            <div className="col-md-8">
              <div className="section__title text-center text-md-start">
                <span className="sub-title">
                  Milestones achieved and progress tracked
                </span>
                <h2 className="title tg-svg">
                  Project{" "}
                  <span className="position-relative">
                    <span className="svg-icon" id="svg-8" />
                    Timeline
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <p
                style={{ color: "#000000", margin: "10px 0", fontSize: "18px" }}
              >
                {item.desc}
              </p>

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
              <p
                style={{
                  marginTop: "8px",
                  fontWeight: "bold",
                  color: "#393204ff",
                  fontSize: "18px",
                }}
              >
                Marks Allocated: {item.marks}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
