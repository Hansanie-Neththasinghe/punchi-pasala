import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Blog1 from "@/components/sections/Blog1"
import Brand1 from "@/components/sections/Brand1"
import Categories1 from "@/components/sections/Categories1"
import Course1 from "@/components/sections/Course1"
import Cta1 from "@/components/sections/Cta1"
import Instructor1 from "@/components/sections/Instructor1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Slider1 from "@/components/sections/Slider1"
import Categories3 from "@/components/sections/Categories3"
import ShopDetails from "./shop-details"
import ResearchDetails from "./research-details"
import Technologies from "@/components/sections/Technologies"
import Documents from "@/components/sections/Documents"
import Presentations from "@/components/sections/Presentations"


export default function Home1() {
    return (
      <>
        <Layout headerStyle={3} footerStyle={1}>
          <Slider1 />
          {/* <ShopDetails /> */}
          <ResearchDetails />
          {/* <Brand1 /> */}
          <Technologies />
          {/* <Banner1 /> */}
          <About1 />
          {/* <Course1 /> */}
          {/* <Categories1 /> */}
          <Categories3 />
          <Documents />
          <Presentations />
          <Testimonial1 />
          <Instructor1 />
          <Cta1 />
          <Blog1 />
          <Newsletter1 />
        </Layout>
      </>
    );
}