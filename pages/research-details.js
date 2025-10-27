import Layout from "@/components/layout/Layout";
import ShopRelatedSlider1 from "@/components/slider/ShopRelatedSlider1";
import Link from "next/link";
import { useState } from "react";
import Objectives from "@/components/sections/Objectives";
import { assetPath } from "@/utils/assetPath";

export default function ResearchDetails() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleOnClick2 = (index) => {
    setActiveIndex2(index);
  };

  return (
    <>
      <section className="shop-details-area  section-pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-desc-wrap">
                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                  <li className="nav-item" onClick={() => handleOnClick2(1)}>
                    <button
                      className={
                        activeIndex2 === 1 ? "nav-link active" : "nav-link"
                      }
                    >
                      {" "}
                      Literature Survey{" "}
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick2(2)}>
                    <button
                      className={
                        activeIndex2 === 2 ? "nav-link active" : "nav-link"
                      }
                    >
                      {" "}
                      Research Gap{" "}
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick2(3)}>
                    <button
                      className={
                        activeIndex2 === 3 ? "nav-link active" : "nav-link"
                      }
                    >
                      {" "}
                      Research Problem{" "}
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick2(4)}>
                    <button
                      className={
                        activeIndex2 === 4 ? "nav-link active" : "nav-link"
                      }
                    >
                      {" "}
                      Research Objectives{" "}
                    </button>
                  </li>
                  <li className="nav-item" onClick={() => handleOnClick2(5)}>
                    <button
                      className={
                        activeIndex2 === 5 ? "nav-link active" : "nav-link"
                      }
                    >
                      {" "}
                      Methodology{" "}
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent2">
                  <div
                    className={
                      activeIndex2 === 1
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "100",
                        fontSize: "18px",
                        color: "#000",
                      }}
                    >
                     The literature survey highlights the growing global recognition of learning disabilities such as dyscalculia and dysgraphia, both of which hinder core skills like mathematical reasoning and writing fluency. Worldwide, dyscalculia affects roughly 3–7% of children, while dysgraphia impacts 5–20%. However, most diagnostic systems depend on verbal and auditory cues, making them inaccessible to deaf and mute students.
Research across countries including Malaysia’s Calculic Kids, Greece’s web-based math screening tools, and Sri Lanka’s Nana Shilpa app shows how machine learning and gamified activities improve early identification and intervention. Yet, these systems fail to integrate sign language or localized Sinhala content, leaving Sri Lankan non-verbal learners excluded. Studies on subtypes such as Operational Dyscalculia, Practognostic Dyscalculia, Number Dysgraphia, and Spatial Dysgraphia reveal that while technological accuracy can exceed 90%, inclusivity remains limited.
The Punchi Pasala initiative therefore builds on this body of work by embedding Sri Lankan Sign Language (SLSL), culturally adapted visuals, and AI-driven diagnostics, positioning it as a pioneering tool designed specifically for Sinhala-medium deaf and mute students.


                    </p>
                  </div>
                  <div
                    className={
                      activeIndex2 === 2
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                   
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "100",
                        fontSize: "18px",
                        color: "#000",
                      }}
                    >
                      Despite notable global progress in educational technology and assistive learning systems, there remains a critical technological and pedagogical gap in addressing the unique learning challenges faced by deaf and mute students in Sri Lanka—particularly those with learning disabilities such as dyscalculia and dysgraphia. Most existing diagnostic tools and educational platforms worldwide are built upon auditory instructions, verbal cues, or sound-based reinforcement, which are inaccessible to non-verbal learners. Even localized systems developed in Sri Lanka, such as Nana Shilpa, have achieved commendable accuracy in identifying cognitive and learning difficulties, yet they depend heavily on voice-based interaction and auditory stimuli, making them unsuitable for the deaf and mute community.
<br />
<br />
Another prominent gap lies in the linguistic and cultural localization of current systems. Internationally developed learning disability detection tools—though technologically advanced—are primarily designed for English or Latin-based scripts and Arabic numerals, offering no support for Sinhala numerals, Sinhala handwriting patterns, or Sri Lankan Sign Language (SLSL). Consequently, these systems cannot be directly adopted in the local educational landscape without significant adaptation. This lack of localization not only excludes Sinhala-medium learners but also hinders the collection of relevant datasets for accurate recognition and model training in the Sri Lankan context.
<br />
{/* Furthermore, there is a distinct absence of classification models that can assess the severity, type, or progression level of dyscalculia and dysgraphia among non-verbal learners. Most contemporary tools treat these disabilities as generalized categories, failing to differentiate between subtypes such as Operational Dyscalculia, Practognostic Dyscalculia, Number Dysgraphia, and Spatial Dysgraphia. This oversimplification prevents teachers and caregivers from tailoring interventions based on specific cognitive weaknesses. In addition, Number Dysgraphia and Spatial Dysgraphia remain severely under-researched both locally and globally, with an acute shortage of Sinhala handwriting datasets, number-tracing samples, and gesture-based learning data that could be used to train or validate AI models for these subdomains. */}
<br />
Finally, while numerous international studies have demonstrated the potential of machine learning and computer vision in educational diagnostics, no integrated system currently combines these technologies with Sri Lankan Sign Language and Sinhala-language interfaces to create an inclusive experience for students with both learning and communication barriers. There is also a lack of adaptive feedback mechanisms that adjust difficulty levels and learning content based on a child’s individual progress.
<br />
<br />
The Punchi Pasala research project addresses this void by developing a Sinhala-based, sign-language-integrated, web-accessible platform capable of identifying, classifying, and improving dyscalculia and dysgraphia among deaf and mute students. Through the integration of AI-driven sign-language recognition, handwriting analysis, and personalized improvement activities, this system introduces the first holistic, culturally grounded framework for diagnosis, intervention, and continuous learning support tailored to the Sri Lankan context. In doing so, it not only fills the national research gap but also establishes a new global benchmark for inclusive educational technology.

                    </p>
                  </div>
                  <div
                    className={
                      activeIndex2 === 3
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "100",
                        fontSize: "18px",
                        color: "#000",
                      }}
                    >
                     Operational Dyscalculia, Practognostic Dyscalculia, Number Dysgraphia, and Spatial Dysgraphia affect a child’s ability to understand numbers, perform calculations, and write symbols correctly. These disorders combine cognitive and motor challenges, making diagnosis complex. For deaf and mute students, the issue is intensified, as most tools depend on sound-based or verbal communication, which they cannot access.
<br /><br />
While awareness of learning disabilities has grown in Sri Lanka, available tools and programs cater mainly to hearing students. Systems like Nana Shilpa show technological progress but lack Sinhala and sign-language integration. As a result, deaf and mute students are excluded from accurate diagnosis and targeted interventions, with teachers relying on inconsistent manual evaluations.
<br /><br />
There is no existing digital system in Sri Lanka that uses visual or sign-language-based interaction to identify and classify dyscalculia or dysgraphia among Sinhala-speaking deaf and mute children. The lack of such a framework delays diagnosis and intervention, leading to academic struggles and reduced self-confidence in affected students.
<br /><br />
The Punchi Pasala project addresses this gap through an AI-powered, Sinhala-based digital ecosystem that integrates gesture recognition, handwriting analysis, and Sri Lankan Sign Language. Using computer vision, it detects learning difficulties and provides personalized, sign-language-guided exercises. This marks Sri Lanka’s first inclusive platform for diagnosing and improving learning disabilities among deaf and mute learners.
                    </p>
                  </div>
                  <div
                    className={
                      activeIndex2 === 4
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <Objectives />
                  </div>
                  <div
                    className={
                      activeIndex2 === 5
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                  >
                    <h2>Component Overview Diagram</h2>
                    <img
                      src={assetPath("/assets/img/others/methodology.png")}
                    ></img>
                    <p style={{
                        margin: 0,
                        fontWeight: "100",
                        fontSize: "18px",
                        color: "#000",
                      }}>
                    The Punchi Pasala project uses a two-phase, AI-driven digital framework developed through an Agile, MERN-based architecture (MongoDB, Express.js, React.js, Node.js) for scalability, accessibility, and security.

In the Identification Phase, students complete sign-language and handwriting assessments to evaluate arithmetic and writing skills. Gestures are captured via webcam and analyzed with MediaPipe and CNN models (TensorFlow/Keras), while handwriting inputs are processed using image and stroke recognition techniques. Sinhala Sign Language videos guide each activity to ensure inclusivity.

In the Improvement Phase, students receive personalized, sign-language-supported exercises targeting arithmetic, spatial reasoning, and handwriting. Performance data is stored in MongoDB and visualized for teachers and parents. The system leverages AWS ECS for scalability and Cloudinary for media management.

Overall, the methodology integrates machine learning, computer vision, and sign-language technology to create Sri Lanka’s first comprehensive, culturally adapted digital platform for diagnosing and improving dyscalculia and dysgraphia among deaf and mute students.
                 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
