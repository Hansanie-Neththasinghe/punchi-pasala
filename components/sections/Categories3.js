import Link from "next/link"
import { assetPath } from "@/utils/assetPath";

export default function Categories3() {
    return (
      <>
        <section className="categories-area section-pt-90 section-pb-90">
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="categories__title-wrap text-center text-lg-start m-0">
                  <div className="section__title mb-0">
                    <span className="sub-title">Assessing Difficulties </span>
                    {/* <h2 className="title tg-svg">Main <span className="position-relative"><span className="svg-icon" id="svg-5" data-svg-icon="assets/img/icons/title_shape.svg" />Categories</span> */}
                    <h2 className="title tg-svg">
                      Main{" "}
                      <span className="position-relative">
                        <span className="svg-icon" id="svg-5" />
                        Categories
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6">
                <div className="tg-button-wrap mt-4 mt-lg-0 justify-content-center justify-content-lg-end">
                  {/* <Link href="/courses" className="btn btn-border tg-svg"><span className="text">All
                                    Categories</span> <span className="svg-icon" id="svg-6" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link> */}
                </div>
              </div>
            </div>
            <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/#">
                    <div className="thumb">
                      <img src={assetPath("/assets/img/others/cat01.jpg")} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">Math - 1</span>
                      </div>
                      <div className="list">
                        <span className="name">Operational Dyscalculia</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/#">
                    <div className="thumb">
                      <img src={assetPath("/assets/img/others/cat02.jpg")} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">Math - 2</span>
                      </div>
                      <div className="list">
                        <span className="name">Practognostic Dyscalculia</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/#">
                    <div className="thumb">
                      <img src={assetPath("/assets/img/others/cat03.jpg")} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">Writing - 1</span>
                      </div>
                      <div className="list">
                        <span className="name">Number Dysgraphia</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/#">
                    <div className="thumb">
                      <img src={assetPath("/assets/img/others/cat04.jpg")} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">Writing - 2</span>
                      </div>
                      <div className="list">
                        <span className="name">Spatial Dysgraphia</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="categories__shapes-two">
                    <div className="categories__shapes-item-two rotateme">
                        <img src="/assets/img/objects/categories_shape05.png" alt="shape" />
                    </div>
                    <div className="categories__shapes-item-two" data-aos="fade-up">
                        <img src="/assets/img/objects/categories_shape02.png" alt="shape" />
                    </div>
                </div> */}

          
        </section>
      </>
    );
}
