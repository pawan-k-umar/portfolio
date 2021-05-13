import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaPhone,
    FaMapMarker,
    FaEnvelope,
    FaInstagram,
    FaPlay,
  } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container_normal'>
        <div className="common">
          <h1 className="mainHeader">Contact</h1>
          <p className="mainContent">This is Contact Page</p>
          <div className="commonBorder"></div>
        </div>
                    {/* <!-- contact us content start --> */}
                    <div class="container py-2">

                        <div class="row text-center h1">
                            <div class="col-lg-4 col-sm-12 my-2">
                                <div class="text-danger"><FaPhone/></div>
                                <div class="h6">
                                    <h4 class="">Call on us</h4>
                                    <p class="">+91 7301078295</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12 my-2">
                                <div class="text-danger"><FaMapMarker/></div>
                                <div class="h6">
                                    <h4 class="">Location</h4>
                                    <p class="">East Champaran</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12 my-2">
                                <div class="text-danger"><FaEnvelope/></div>
                                <div class="h6">
                                    <h4 class="">E-mail</h4>
                                    <p class="">itsmek.info@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row 1 end --> */}


                        {/* <!-- row 2 start --> */}
                        <div class="row">
                            <div class="col-lg-6">
                                {/* <!-- form start --> */}
                                <form className='form'>
                                    <div class="form-group">
                                        <label for="exampleInputName">Name*</label>
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="Name"/>
                                    </div>


                                    <div class="form-group">
                                        <label for="exampleInputEmail">Email address*</label>
                                        <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputPhone">Phone*</label>
                                        <input type="number" class="form-control" id="exampleInputPhone" placeholder="Phone"/>
                                    </div>

                                    <button type="submit" className="btn btn-danger">Send</button>
                                </form>
                                {/* <!-- form end --> */}
                            </div>
                            {/* <!-- col end --> */}
                            <div class="col-lg-6 my-1">
                                <div class="">
                                    <iframe className="map col-sm-12 border-danger" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57062.11219531674!2d84.88525448864294!3d26.636248634441852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334f786408169%3A0x94579e553aba3627!2sMotihari%2C%20Bihar!5e0!3m2!1sen!2sin!4v1616295881891!5m2!1sen!2sin"
                                        width="300" height="300" allowfullscreen="" loading="leazy"></iframe>
                                </div>

                            </div>
                        </div>
                        {/* <!-- row 2 end --> */}
                    </div>
                    {/* <!-- contact us content end --> */}


                </div>
    </div>
  );
};

export default Contact;
