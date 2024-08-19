import React from 'react'
import "./Contact.css"
import TaxiForm from '../../TaxiForm/TaxiForm'
function Contact() {
    return (
        <div class="container contact-container">
            <div className='text-center'>
                <h5>CONTACT US Sai Shubham Tours and Travels
                </h5>
                <p>if you have any query related to Cabs Services, Tempo Traveller , Shirdi Packages Please call us on below given number and you can also contact us through by filling below form. </p>
            </div>
            <div class="row contact-row">
                <div className="contact-column"><TaxiForm />



                </div>
                <div className="contact-column">

                    <div class="contact-info">

                        <div class="contact-item">

                            <div class="icon">
                                <img src="https://img.icons8.com/fluent/48/000000/address.png" alt="Address Icon" />
                            </div>
                            <div class="details">
                                <strong>ADDRESS</strong>
                                A/p-: Kakdi , tal : Kopergon , dist : Ahamdnager , Near Shirdi International Airport
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/fluent/48/000000/email.png" alt="Email Icon" />
                            </div>
                            <div class="details">
                                <strong>EMAIL ADDRESS</strong>
                                saishubhamtours8994@gmail.com
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon">
                                <img src="https://img.icons8.com/fluent/48/000000/phone.png" alt="Phone Icon" />
                            </div>
                            <div class="details">
                                <strong>PHONE NO</strong>
                                +91 8669881059<br />
                                +91 9021807109
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default Contact
