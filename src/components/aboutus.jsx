import Silk from "../uielements/fiber";
import TextType from "../uielements/typetext";

export default function AboutUs() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Silk
        speed={5}
        scale={1}
        color="#5227ff"
        noiseIntensity={1.5}
        rotation={0}
      />

      {/* Wrapper for left + right */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          color: "#fff",
        }}
        >
        {/* Hero Section - Left */}
        <div style={{ flex: 1 }}>
<TextType 
  text={["Conference Expense \nPlanner"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="_"
/>

          <p style={{ fontSize: "1.3rem", marginBottom: "25px", opacity: 0.9 }}>
            Plan your next major event with ease
          </p>
          <button
            style={{
              padding: "12px 28px",
              fontSize: "1.1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              background: "#5227ff",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#3d1ec9")}
            onMouseOut={(e) => (e.target.style.background = "#5227ff")}
          >
            Get Started
          </button>
        </div>

        {/* About Section - Right */}
        <div
          className="aboutus_container"
          style={{
            flex: 1,
            marginLeft: "60px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            <span style={{ fontWeight: "600", color: "#bdaaff" }}>
              Welcome to BudgetEase Solutions,
            </span>{" "}
            your trusted partner in simplifying budget management and financial
            solutions. At BudgetEase, we understand the importance of effective
            budget planning and strive to provide intuitive, user-friendly
            solutions to meet the diverse needs of our clients.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            With a commitment to{" "}
            <span style={{ fontWeight: "600", color: "#bdaaff" }}>
              efficiency and innovation,
            </span>{" "}
            we empower individuals and businesses to take control of their
            finances and achieve their goals with ease.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            At BudgetEase Solutions, our mission is to make budgeting{" "}
            <span style={{ fontWeight: "600", color: "#bdaaff" }}>
              effortless and accessible
            </span>{" "}
            for everyone. Whether you're a small business owner, a busy
            professional, or an individual looking to manage your personal
            finances, we offer tailored solutions to streamline your budgeting
            process.
          </p>
        </div>
      </div>
    </div>
  );
}
