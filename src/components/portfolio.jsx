import React from "react";

//import stock
import stock1 from "../img/paytmmallclone.PNG";
import stock1A from "../img/paytmmallclone2.PNG";
import stock1B from "../img/paytmmallclone3.PNG";
import stock1C from "../img/paytmmallclone4.PNG";

import stock2 from "../img/kimayeclone1.PNG";
import stock2A from "../img/kimayeclone2.PNG";
import stock2B from "../img/kimayeclone3.PNG";
import stock2C from "../img/kimayeclone4.PNG";
import stock2D from "../img/kimayeclone5.PNG";
import stock2E from "../img/kimayeclone6.PNG";

import stock3 from "../img/livemint1.PNG";
import stock3A from "../img/livemint2.PNG";
import stock3B from "../img/livemint3.PNG";

// import stock1 from "../img/image2.jpg";
// import stock2 from "../img/image3.jpg";
// import stock3 from "../img/image4.jpg";
// import stock4 from "../img/image5.jpg";
// import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Each project is unique. Here are some of my works.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Paytm mall clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="my-0">
                  <a
                    className="btn btn-primary btn js-scroll px-4 m-1"
                    href="https://github.com/manishtmtmt/paytm-mall.git"
                    role="button"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="btn btn-primary btn js-scroll px-4 m-1"
                    href="https://eloquent-tanuki-162c0f.netlify.app/"
                    role="button"
                    target="_blank"
                  >
                    Live
                  </a>
                </div>
                <a
                  href={stock1A}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock1B}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock1C}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Kimaye clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 React Redux Chakra-UI
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <a
                    className="btn btn-primary btn js-scroll px-4 m-1"
                    href="https://github.com/surajDongre-16/Kimaye-Clone"
                    role="button"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="btn btn-primary btn js-scroll px-4 m-1"
                    href="https://kimaye-hamara.netlify.app/"
                    role="button"
                    target="_blank"
                  >
                    Live
                  </a>
                </div>
                <a
                  href={stock2A}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2B}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2C}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2D}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2E}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Livemint clone</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <a
                    className="btn btn-primary btn js-scroll px-4 m-1"
                    href="https://github.com/DeepanshuChugh/LiveMint"
                    role="button"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="btn btn-primary btn js-scroll px-4 m-1"
                    href="https://wonderful-pastelito-13ae24.netlify.app/"
                    role="button"
                    target="_blank"
                  >
                    Live
                  </a>
                </div>
                <a
                  href={stock3A}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3B}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
