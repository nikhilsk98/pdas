import ProfileCard from "./ProfileCard";
import AlexaImage from "./images /alexa.png";
import CortanaImage from "./images /cortana.png";
import "bulma/css/bulma.css";
import SiriImage from "./images /siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                desc="Alexa is created by Amazon"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana99"
                image={CortanaImage}
                desc="Cortana is created by Microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri09"
                image={SiriImage}
                desc="Siri is created by Apple"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
