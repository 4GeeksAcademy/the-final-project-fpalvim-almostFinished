import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function LoginPage() {
    const navigate = useNavigate()
    return (
        <div className="login-page-container mx-5">
            <div className="header-login d-flex justify-content-between ">
            <div>
<h1 className="logo">some room for logo</h1>
</div>
                <div>
                <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/searchpage">Explore</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
</div>

            </div>
            <div className="top-view row ">
                
                <form className="login-form">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">Keep me logged in</label>
                    </div>
                    <button  type="button" className="login-button" onClick={() => navigate('/profilepage')}>Log in</button> <button type="button" className="btn btn-link" onClick={() => navigate('/FaqsPage')}>Forgot my password</button>
                    <button type="button" className="btn btn-link" onClick={() => navigate('/FaqsPage')}>Create a new account</button>
                </form>
            </div>
            <div className="login-page-middle ">
                <div className="site-info-title">
                    <h1>Introducing GigLink</h1>
                </div>
                <div className="site-info-text p-5">
                    <p>welcome to GigLink, <br></br><br></br>
                        The ultimate online platform designed to bridge the gap between bands and venues effortlessly! With GigLink, musicians can create profiles to showcase their talents, while venues can list availability and unique features. Our intuitive calendar system allows both sides to easily browse available dates, ensuring that you find the perfect match for your next gig. Whether you’re a band looking to book your next performance or a venue seeking fresh sounds, simply connect, message, and send booking requests—all in one seamless experience. <br /> Join GigLink today and transform the way you book live music!
                    </p>
                        <button type="button" className="join-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Join GigLink</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Ready for your musical adventure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label for="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4"></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4"></input>
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="The Three Musketeers"></input>
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress2" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputCity" className="form-label">Country</label>
                                        <input type="text" className="form-control" id="inputCity"></input>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputState" className="form-label">City</label>
                                        <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label for="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip"></input>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                                            <label className="form-check-label" for="gridCheck">
                                                Keep me logged in
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button  type="button" className="btn btn-primary" onClick={() => navigate('/loginpage')}>Create account</button>
                                    </div>
                                </div>
                            </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-page-bottom d-flex pb-5 container text-center">
            <div class="row align-items-start">
       <div id="carouselExampleAutoplaying" className="carousel slide col" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1200" className="d-block w-100" alt=""></img>
                </div>
                 <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1200" className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200" className="d-block w-100" alt=""></img>
                </div>
            </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
        </div>
        <div className="bottom-text col">
            <h1>here are some of our friends</h1>
            <p>You can see some fun pictures or click the explore button on top of the page to dive into our list of band and venues that are waiting for you and ready to connect with</p>
        </div>
                </div>
            </div>


            
                <div className="nav justify-content-center">
                    <button type="button" className="btn btn-link" onClick={() => navigate('/FaqsPage')}>FAQS</button>
                    <button type="button" className="btn btn-link" onClick={() => navigate('/FaqsPage')}>about us</button>
                    <button type="button" className="btn btn-link" onClick={() => navigate('/FaqsPage')}>contact</button>
                </div>
        </div>
     );
}
export default LoginPage;