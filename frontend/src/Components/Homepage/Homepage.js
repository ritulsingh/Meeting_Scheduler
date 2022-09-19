import React from "react"
import "./Homepage.css"
import { useNavigate } from "react-router-dom"
const Homepage = () => {
    const history = useNavigate()
    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-2 fixed-left ms-4" id="sidenav-main">
                <hr className="horizontal dark mt-0" />
                <ul className="navbar-nav">
                    <li className="nav-item mb-2">
                        <a className="nav-link active" href="#" onClick={() => history("/dashboard")}>
                            <div className="icon icon-shape icon-xs shadow border-radius-sm bg-gradient-light text-center me-2 d-flex align-items-center justify-content-center">
                                <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>shop</title>
                                    <g id="Basic-Elements" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Rounded-Icons" transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                                <g id="shop-" transform="translate(0.000000, 148.000000)">
                                                    <path className="color-background" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" id="Path" opacity="0.598981585" />
                                                    <path className="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" id="Path" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-item mb-2">
                        <a className="nav-link" href="#" onClick={() => history("/calender")}>
                            <div className="icon icon-shape icon-xs shadow border-radius-sm bg-gradient-light text-center me-2 d-flex align-items-center justify-content-center">
                                <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>office</title>
                                    <g id="Basic-Elements" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Rounded-Icons" transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                                <g id="office" transform="translate(153.000000, 2.000000)">
                                                    <path className="color-background" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" id="Path" opacity="0.6" />
                                                    <path className="color-background" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" id="Shape" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="nav-link-text ms-1">Calender</span>
                        </a>
                    </li>

                    <li className="nav-item mb-2">
                        <a className="nav-link " onClick={() => history("/createevent")}>
                            <div className="icon icon-shape icon-xs shadow border-radius-sm bg-gradient-light text-center me-2 d-flex align-items-center justify-content-center">
                                <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>office</title>
                                    <g id="Basic-Elements" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Rounded-Icons" transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                                <g id="office" transform="translate(153.000000, 2.000000)">
                                                    <path className="color-background" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" id="Path" opacity="0.6" />
                                                    <path className="color-background" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" id="Shape" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="nav-link-text ms-1">Create Event</span>
                        </a>
                    </li>

                    <li className="nav-item mb-2">
                        <a className="nav-link" href="#" onClick={() => history("/profile")}>
                            <div className="icon icon-shape icon-xs shadow border-radius-sm bg-gradient-light text-center me-2 d-flex align-items-center justify-content-center">
                                <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Basic-Elements" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Rounded-Icons" transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
                                                <g id="customer-support" transform="translate(1.000000, 0.000000)">
                                                    <path className="color-background" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" id="Path" opacity="0.59858631" />
                                                    <path className="color-foreground" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z" id="Path" />
                                                    <path className="color-foreground" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z" id="Path" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span className="nav-link-text ms-1">Profile</span>
                        </a>
                    </li>

                    <li className="nav-item mb-2 ">
                        <div className="text-center mt-3">
                            <a href="#" className="btn btn-primary btn-sm w-80 mb-0" id="logout">Logout</a>
                        </div>
                    </li>
                </ul>
            </aside>
            <main className="main-content border-radius-lg" >
                {/* Start of Navigation */}
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="false">
                    <div className="container-fluid px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-1 px-0 me-sm-6 me-12">
                                <li className="breadcrumb-item"><a className="fs-2 text-dark" href="javascript:;" id="dashboardcompanyname">Dashboard</a></li>
                            </ol>
                        </nav>
                    </div>
                </nav>
                {/* End of Navigation */}
                {/*Starting Of Dashboard */}
                <div className="d-flex" >
                    <div className="container-fluid w-90">
                        <div className="row my-0">
                            <div className="row mt-1">
                                <div className="mt-3">
                                    <p className="font-weight-bold">Upcoming Event</p>
                                </div>
                                <div className="col-sm">
                                    <div className="container-fluid">
                                        <div className="col-sm">
                                            <div className="card ">
                                                <div className="card-body btn-primary rounded-3 px-0 pt-0 pb-2">
                                                    <div className="table-responsive p-0">
                                                        <table className="table align-items-center justify-content-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th className="text-uppercase text-secondary text-white text-xxs font-weight-bolder text-center">
                                                                        Title</th>
                                                                    <th className="text-uppercase text-secondary text-white text-xxs font-weight-bolder text-center">
                                                                        Agenda</th>
                                                                    <th className="text-uppercase text-secondary text-white text-xxs font-weight-bolder text-center">
                                                                        Time</th>
                                                                    <th className="text-uppercase text-secondary text-white text-xxs font-weight-bolder text-center">
                                                                        Guest</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-sm text-white font-weight-bold mb-0">2259</p>
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-xs text-white font-weight-bold">9192305</p>
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-sm text-white font-weight-bold mb-0">2259</p>
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-xs text-white font-weight-bold">9192305</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-sm text-white font-weight-bold mb-0">1126</p>
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-xs text-white font-weight-bold">3967777.19</p>
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-sm text-white font-weight-bold mb-0">2259</p>
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <p className="text-xs text-white font-weight-bold">9192305</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

export default Homepage