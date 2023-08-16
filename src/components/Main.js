import React from "react";

export default function Main(props) {
  return (
    <main className="container-fluid mt-2">
      {/* <img src={props.imag} className="img-dog" alt="error fetching data " /> */}
      <div className="mid row">
        <div className="left col-md-6">
          <img
            src={props.img_link}
            className="img-dog"
            alt="error fetching data "
          />
        </div>
        <div className="right col-md-6">
          <div className="card">
            <div className="header" id="name">
              {props.name}
            </div>
            <div className="body">
              <div className="skill">
                <div className="skill-name">Good with children</div>
                <div className="skill-level">
                  <div
                    className="skill-percent"
                    style={{
                      width: `${(props.good_with_children / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Good with other dogs</div>
                <div className="skill-level">
                  <div
                    className="skill-percent"
                    style={{
                      width: `${(props.good_with_other_dog / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Good with strangers</div>
                <div className="skill-level">
                  <div
                    className="skill-percent"
                    id="g-w-s"
                    style={{
                      width: `${(props.good_with_strangers / 5) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Min height</div>
                <div className="skill-percent-number">
                  <span id="minh">{props.min_height}&nbsp;</span>inches
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Max height</div>
                <div className="skill-percent-number">
                  <span id="maxh">{props.max_height}&nbsp;</span>inches
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Min weight</div>
                <div className="skill-percent-number">
                  <span id="minw">{props.min_weight}&nbsp;</span>pounds
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Max weight</div>
                <div className="skill-percent-number">
                  <span id="maxw">{props.max_weight}&nbsp;</span>pounds
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Min life expectancy</div>
                <div className="skill-percent-number">
                  <span id="minlife">{props.min_life}&nbsp;</span>years
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Max life expectancy</div>
                <div className="skill-percent-number">
                  <span id="maxlife">{props.max_life}&nbsp;</span>years
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">Shedding</div>
                <div className="skill-level">
                  <div
                    className="skill-percent"
                    style={{ width: `${(props.shedding / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
