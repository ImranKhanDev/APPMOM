import React from "react";
import "./Features.css";
import img from "../../../images/m-1.png";
import img2 from "../../../images/bg-8.png";

const Features = () => {
  return (
    <div className="features container">
      <div className="features_header">
        <h1>Awesome Features</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quia!
          Sed iusto autem tempora mollitia, <br /> libero blanditiis quibusdam
          dolores!
        </p>
      </div>
      <div className="features_content">
        <div className="left_features">
          <div className="left_feature_box">
            <h3>Your Feature title</h3>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              <br />
              Pellentesque vel volutpat felis, eu condimentum massa.
            </p>
          </div>
          <div className="left_feature_box">
            <h3>Clean Code</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Pellentesque vel volutpat <br />
              felis, eu condimentum massa.
            </p>
          </div>
          <div className="left_feature_box">
            <h3>Unique Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Pellentesque vel volutpat <br />
              felis, eu condimentum massa.
            </p>
          </div>
        </div>
        <div className="div">
          <img src={img} alt="image" />
        </div>
        <div className="right_features">
          <div className="right_feature_box">
            <h3>Your Feature title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Pellentesque vel volutpat <br /> felis, eu condimentum massa.
            </p>
          </div>
          <div className="right_feature_box">
            <h3>Clean Code</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Pellentesque vel volutpat <br /> felis, eu
              condimentum massa.
            </p>
          </div>
          <div className="right_feature_box">
            <h3>Unique Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Pellentesque vel volutpat <br />
              felis, eu condimentum massa.
            </p>
          </div>
        </div>
      </div>

      {/* why choosing us */}
      <div className="choosing_us ">
        <div className="choosing_header">
          <h1>
            {" "}
            WHY <strong>CHOOSE US?</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vel volutpat felis, <br /> eu condimentum massa.
            Pellentesque mollis eros vel mattis tempor. Aliquam
          </p>
        </div>
        <div className="choosing_us_container">
          <div className="choosing_left">
            <img src={img2} alt="" />
          </div>
          <div className="choosing_right">
            <div className="choosing_box">
              <div className="content">
                <div className="icon">
                  <i className="fas fa-book fa-3x"></i>
                </div>
                <div>
                  <h1>Unlimited Features</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> Pellentesque vel volutpat felis, eu condimentum ma{" "}
                    <br /> Pellentesque mollis eros vel.
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <i className="fas fa-sun fa-3x"></i>
                </div>
                <div>
                  <h1>High Resolation</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> Pellentesque vel volutpat felis, eu condimentum ma{" "}
                    <br /> Pellentesque mollis eros vel.
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="icon">
                  <i className="fas fa-paint-brush fa-3x"></i>
                </div>
                <div>
                  <h1>Modern DESIGN</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> Pellentesque vel volutpat felis, eu condimentum ma{" "}
                    <br /> Pellentesque mollis eros vel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
