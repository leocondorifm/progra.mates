import { Link } from "react-router-dom"
import ReactPlayer from 'react-player'

const Ofertas = () => {
  return (
    <section className="videos" >
    <div className='breadcrumbP'></div>
        <div className='breadcrumbPP'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">                    
                    <li className="breadcrumb-item">
                      <i className="material-icons">local_fire_department</i>
                    </li>
                </ol>
            </nav>
        </div>
        
    <div className="container py-5" style={{marginTop: "0px"}}>

        <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
            <ReactPlayer className="w-100" url="../src/assets/video/videoproducto-cafe.mp4" controls />
            <a href="#!">
                <div className="mask">
                <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$123</span></h5>
                </div>
                </div>
                <div className="hover-overlay">
                <div className="mask m-hover"></div>
                </div>
            </a>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
            <ReactPlayer className="w-100" url="../src/assets/video/videoproducto-cafe.mp4" controls />
            <a href="#!">
                <div className="mask">
                <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$239</span></h5>
                </div>
                </div>
                <div className="hover-overlay">
                <div className="mask m-hover"></div>
                </div>
            </a>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
            <ReactPlayer className="w-100" url="../src/assets/video/videoproducto-cafe.mp4" controls />
            <a href="#!">
                <div className="mask">
                <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$147</span></h5>
                </div>
                </div>
                <div className="hover-overlay">
                <div className="mask m-hover" ></div>
                </div>
            </a>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
            <ReactPlayer className="w-100" url="../src/assets/video/videoproducto-cafe.mp4" controls />
            <a href="#!">
                <div className="mask">
                <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$83</span></h5>
                </div>
                </div>
                <div className="hover-overlay">
                <div className="mask m-hover" ></div>
                </div>
            </a>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
            <ReactPlayer className="w-100" url="../src/assets/video/videoproducto-cafe.mp4" controls />
            <a href="#!">
                <div className="mask">
                <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$106</span></h5>
                </div>
                </div>
                <div className="hover-overlay">
                <div className="mask m-hover" ></div>
                </div>
            </a>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
            <ReactPlayer className="w-100" url="../src/assets/video/videoproducto-cafe.mp4" controls />
            <a href="#!">
                <div className="mask">
                <div className="d-flex justify-content-start align-items-start h-100">
                    <h5><span className="badge bg-body-tertiary pt-2 ms-3 mt-3 text-dark">$58</span></h5>
                </div>
                </div>
                <div className="hover-overlay">
                <div className="mask m-hover"></div>
                </div>
            </a>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Ofertas