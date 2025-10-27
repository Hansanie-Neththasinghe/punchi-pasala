import Link from "next/link"

export default function Objectives() {
    return (
      <>
        <p style={{
                        margin: 0,
                        fontWeight: "100",
                        fontSize: "18px",
                        color: "#000",
                      }}> 

       
        The Punchi Pasala project aims to create a Sinhala-based, AI-driven digital learning platform that identifies and supports deaf and mute students with dyscalculia and dysgraphia. It integrates Sri Lankan Sign Language, handwriting analysis, and adaptive learning tools to bridge accessibility gaps in education.

The system’s core objectives are to:

Detect and classify four subtypes — Operational and Practognostic Dyscalculia, Number and Spatial Dysgraphia — through gesture and handwriting analysis.

Assess arithmetic, reasoning, numeral formation, and spatial writing difficulties using machine learning and computer vision.

Provide individualized, sign-language-guided exercises and visual learning activities tailored to each student’s difficulty level.

Continuously monitor progress and adapt exercises based on performance.

Ultimately, Punchi Pasala seeks to establish an inclusive digital ecosystem enabling early detection and personalized improvement for Sinhala-speaking deaf and mute learners.
<br /><br />
 </p>
              <div  style={{  backgroundColor: "#faf8edff", padding: "6px 40px", borderRadius: "6px", marginBottom: "16px",}}>
                <p style={{ margin: 0, fontWeight: "700", fontSize: "20px", color: "#000", }} >
                  1. Identify Dyscalculia and Dysgraphia in deaf and mute primary students
                </p>
              </div>
                
              <div  style={{  backgroundColor: "#faf8edff", padding: "6px 40px", borderRadius: "6px",marginBottom: "16px",}}>
                <p style={{ margin: 0, fontWeight: "700", fontSize: "20px", color: "#000", }} >
                  2. Categorize the students based on Identified Dyscalculia/Dysgraphia level.
                </p>
              </div>

              <div  style={{  backgroundColor: "#faf8edff", padding: "6px 40px", borderRadius: "6px",marginBottom: "16px",}}>
                <p style={{ margin: 0, fontWeight: "700", fontSize: "20px", color: "#000", }} >
                  3. Provide relevant activities according to the identified level of Dyscalculia/Dysgraphia Dyscalculia.
                </p>
              </div>

              <div  style={{  backgroundColor: "#faf8edff", padding: "6px 40px", borderRadius: "6px",marginBottom: "16px",}}>
                <p style={{ margin: 0, fontWeight: "700", fontSize: "20px", color: "#000", }} >
                  4. Tracking the student progress
                </p>
              </div>

      </>
    );
}
