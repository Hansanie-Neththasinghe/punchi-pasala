import Link from "next/link"

export default function Documents() {
    return (
        <>
            <section className="categories-area section-pt-90 section-pb-90" >
                <div className="container">
                    <div className="row align-items-center justify-content-center mb-55">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="categories__title-wrap text-center text-lg-start m-0">
                                <div className="section__title mb-0">
                                    <span className="sub-title"> Documents </span>
                                    <h2 className="title tg-svg">Project <span className="position-relative"><span className="svg-icon" id="svg-5" data-svg-icon="assets/img/icons/title_shape.svg" />Documents</span>
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

                        {/* Document 1  */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Topic Assessment Form </h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>

{/* Document 2 */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Project Charter</h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>


{/* Document 3 */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Project Proposal</h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>


{/* Doc 4 */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Checklist I </h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>


{/* Doc 5 */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Checklist II & III</h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>

{/* Doc 6 */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Research Paper </h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>

{/* Doc 7 */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Final Reports </h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>

{/* Doc 8 */}
<div className="col">
  <div
    style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "30px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease", // smooth animation
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    {/* Document Icon */}
    <div style={{ marginBottom: "10px" }}>
      <img src="/assets/img/others/pdf-icon.png" alt="PDF" style={{ width: "100px", height: "100px" }} />
    </div>

    {/* Document Title */}
    <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}> Poster </h4>

    {/* Submitted Date */}
    <p style={{ fontSize: "18px", color: "#555", margin: "0 0 12px" }}> Submitted on 2024/12/25 </p>

    {/* Footer Row */}
    <div
      style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", }} >
      <p style={{ margin: 0, fontSize: "18px", color: "#555" }}>Group</p>
      <a
        href="https://drive.google.com/your-doc-link"
        target="_blank" rel="noopener noreferrer" 
        style={{ color: "#1a73e8", fontSize: "18px", fontWeight: "500", textDecoration: "none", }} >
        Download
      </a>
    </div>
  </div>
</div>



                    </div>
                </div>
                
            </section>
        </>
    )
}
