import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import v1 from './img/v3.jpg'
import { Link } from "react-router-dom"

function HomePage() {
   return (
      <div>
         <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
         <Navbar />

         <div className="header-section">
            <div className="left-section">
               <h1 className="section-heading">This Is Home Page</h1>
               <p className="section-desc">
                Small inititative to help the Society
                </p>
               <div className="btn-section">
                  <Link to='/donationPage'><button>Donate</button></Link>
                  <button onClick=''>Join us</button>
               </div>
            </div>
            <div className="right-section">
               <img src={v1} className='brand-img' alt='VolunteerImg' />
            </div>
         </div>
         <div className="form-section" id='form'>
            <div className="card">
               <form>
                  <p className="form-heading">Name</p>
                  <input type='text' placeholder='Enter your name' className="form-input" />
                  <p className="form-heading">Email</p>
                  <input type='text' placeholder='Enter your mail id' className="form-input" />
                  <p className="form-heading">Mobile Number</p>
                  <input type='text' placeholder='Enter your mobile no' className="form-input" />

                  <button className="form-btn">Generate Certificate</button>
               </form>
            </div>
         </div>

         <Footer />
      </div>


   )
}

export default HomePage