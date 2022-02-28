import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"


export default function Images() {
    return (
        <div className="images">
            <div className="image">
                <img src={icon1} alt="icon1" />
                <h2>Declarative</h2>
                <p>React meakes it painless to create interactive UIs</p>
            </div>
            <div className="image App-logo">
                <img src={icon2} alt="icon2" />
                <h2>Components</h2>
                <p>Build encapsulated components that  manage their state</p>
            </div>
            <div className="image">
                <img src={icon3} alt="icon3" />
                <h2>Single-Way</h2>
                <p>A set of immutable  values are passed to the components</p>
            </div>
            <div className="image">
                <img src={icon4} alt="icon4" />
                <h2>JSX</h2>
                <p>Statically typed designed to run on modern browsers</p>
            </div>
        </div>
    )
}