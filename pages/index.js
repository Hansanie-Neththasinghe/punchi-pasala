// import Layout from "@/components/layout/Layout";
// import About1 from "@/components/sections/About1";
// import Cta1 from "@/components/sections/Cta1";
// import Newsletter1 from "@/components/sections/Newsletter1";
// import Slider1 from "@/components/sections/Slider1";
// import Categories3 from "@/components/sections/Categories3";
// import ResearchDetails from "./research-details";
// import Technologies from "@/components/sections/Technologies";
// import Documents from "@/components/sections/Documents";
// import Presentations from "@/components/sections/Presentations";
// import Timeline from "@/components/sections/Timeline";
// import Gallery from "@/components/sections/Gallery";
// import GroupMembers from "@/components/sections/GroupMembers";
// import Supervisors from "@/components/sections/Supervisors";

// export default function Home1() {
//   return (
//     <>
//       <Layout headerStyle={3} footerStyle={1}>
//         <Slider1 />
//         <ResearchDetails />
//         <Technologies />
//         <Timeline />
//         <About1 />
//         <Categories3 />
//         <Documents />
//         <Presentations />
//         <Gallery />
//         <Supervisors />
//         <GroupMembers />
//         <Cta1 />
//         <Newsletter1 />
//       </Layout>
//     </>
//   );
// }


import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Cta1 from "@/components/sections/Cta1";
import Newsletter1 from "@/components/sections/Newsletter1";
import Slider1 from "@/components/sections/Slider1";
import Categories3 from "@/components/sections/Categories3";
import ResearchDetails from "./research-details";
import Technologies from "@/components/sections/Technologies";
import Documents from "@/components/sections/Documents";
import Presentations from "@/components/sections/Presentations";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import GroupMembers from "@/components/sections/GroupMembers";
import Supervisors from "@/components/sections/Supervisors";

export default function Home1() {
  const HEADER_H = 100;

  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        {/* Use scroll-margin-top so content isn't hidden under the sticky header */}
        <section id="home" style={{ scrollMarginTop: HEADER_H }}>
          <Slider1 />
        </section>

        <section id="domain" style={{ scrollMarginTop: HEADER_H }}>
          <ResearchDetails />
          <Technologies />
        </section>

        <section id="milestones" style={{ scrollMarginTop: HEADER_H }}>
          <Timeline />
        </section>

        <section id="about" style={{ scrollMarginTop: HEADER_H }}>
          <About1 />
          <Categories3 />
        </section>

        <section id="documents" style={{ scrollMarginTop: HEADER_H }}>
          <Documents />
        </section>

        <section id="presentations" style={{ scrollMarginTop: HEADER_H }}>
          <Presentations />
        </section>

        <section id="gallery" style={{ scrollMarginTop: HEADER_H }}>
          <Gallery />
        </section>

        <section id="team" style={{ scrollMarginTop: HEADER_H }}>
          <Supervisors />
          <GroupMembers />
        </section>

        <section id="join" style={{ scrollMarginTop: HEADER_H }}>
          <Cta1 />
        </section>

        <section id="contact" style={{ scrollMarginTop: HEADER_H }}>
          <Newsletter1 />
        </section>
      </Layout>
    </>
  );
}
