import "./App.css";
import Confetti from "./Confetti";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Card from "./Components/Card";
import ThreeScene from "./Components/ThreeScene";
import Sphere from "./Components/Sphere";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from "./Components/Model";

export function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "95vh" }}>
        <Confetti />
        <div className="home-wrapper">
          <img
            style={{ float: "left", borderRadius: "20px" }}
            width="450px"
            height="500px"
            src="src/assets/1.png"
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "justify",
              gap: "5px",
            }}
          >
            <h1 className="home-wrapper-title">Happy Birthday</h1>
            <h1 className="home-wrapper-title">My Dashita!</h1>
          </div>
          <img
            style={{ borderRadius: "20px" }}
            width="450px"
            height="500px"
            src="src/assets/dashaypavel.jfif"
            alt=""
          />
        </div>
      </div>
      <div
        className="borderSea"
        style={{
          height: "550px",
          background: "linear-gradient(0.5turn, #02b5fc, #ebf8e1, #E2CA76)",
          display: "flex",

          justifyContent: "center",
        }}
      >
        <img
          style={{ float: "left", borderRadius: "20px", marginTop: "0px" }}
          width="50px"
          height="50px"
          src="src/assets/down-arrow.png"
          alt=""
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "600",
          gap: "70px",
          backgroundColor: "#E2CA76",
          padding: "60px 0px",
        }}
      >
        <Card>
          <img
            style={{ float: "left", borderRadius: "20px" }}
            width="50px"
            src="src/assets/2.png"
            alt=""
          />
          <div
            style={{ display: "flex", flexDirection: "row", padding: "0px" }}
          >
            <div
              style={{ padding: "30px", width: "60vw", alignItems: "center" }}
            >
              <h1 style={{ color: "#02b5fc" }}>Dashita</h1>
              <p
                style={{
                  maxWidth: "60ch",
                  color: "#998307",
                  textAlign: "left",
                  fontSize: "30px",
                }}
              >
                Happy Birthday, my dear Dashita! 🎉🎂 Wow, I can't believe it's
                been a whole year since your birthday party in Tuebingen. This
                year has been amazing. I've had the pleasure of meeting the most
                incredible person in the world, and that's you. On this special
                day, I want to thank you for all the wonderful things you've
                done for me. Thank you for being by my side during both my sad
                and happy moments, for making me smile when I needed it most,
                and for taking such good care of me. I wish I could be there
                with you to celebrate this beautiful day in person, but please
                know that even though we're apart, my thoughts and love are with
                you. This is one of many years that we will enjoy together.
                Happy Birthday, my cuttie pattotie Dashita! ❤️🎈
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
