import React from "react";
import imgHome from "../images/home.png";

const HomePage = (props) => {
  return (
    <>
      <div className="jumbotron row justify-content-center">
        <div className="col-md-10 col-sm-12">
          <h1 className="display-5">Gaming-PC</h1>
          <p>
            Proin non elit eget enim ullamcorper rutrum ut at nunc. Duis sit
            amet auctor eros. Sed at vestibulum est, accumsan posuere purus.
            Duis facilisis imperdiet lorem vel venenatis. Donec commodo orci in
            justo dictum tristique. Pellentesque in enim elementum, dignissim
            augue eget, lobortis orci. Pellentesque at urna quam. Fusce commodo
            mi non velit tempus, at rutrum ante vehicula. Aliquam posuere ligula
            non pharetra porttitor. Vivamus viverra nec elit at consectetur.
          </p>
        </div>
        <div className="col-md-2 col-sm-12">
          <img src={imgHome} className="img-fluid w-100" alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
          </div>
          <div className="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
