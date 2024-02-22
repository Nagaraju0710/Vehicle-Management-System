import "../CSS/home.css"
import { Footer } from "../Component/footer"
import imageh from "../images/imageh.jpg"
import imageh1 from "../images/imageh1.jpg"
import imageh2 from "../images/imageh2.jpg"

const Home = () => {
    return (
        <div className="body">
            <h1 id="heading">Welcome to the Vehicle Managment System.</h1>
            <p id="heading1"> This system allows you to manage vehicles, vendors, and products efficiently.</p>
            <div className="features">
                <h3>Features:</h3>
                <div>
                    <p>Collect and manage vehicle information including D.C. number and P.O. number.</p>
                    <p>Retrieve vendor data and product information based on P.O. number.</p>
                    <p>Conduct security checks for vehicles.</p>
                    <p>Initiate the checkout process for vehicles.</p>
                    <p>Ensure authorized access to security check information.</p>
                </div>
            </div>
            <div className="images-container">
                <img src={imageh} alt="Placeholder Vehicle" />
                <img src={imageh1} alt="Placeholder Vendor" />
                {/* <img src={imageh2} alt="Placeholder Product" /> */}
            </div>
          <Footer/>
        </div>
    )
}
export default Home