import React from 'react'
import FittedImage from "react-fitted-image";
import "./Search.css";

function Search() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">Search results</div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/cranmer.jpg"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Late Cranmer Kalinda</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                  Crammer Kalinda was an educator, Education Adiministrator,
                    policy maker, trainer, facilitator and an Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/kasisiri.jpg"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Late Edward Kasisiri</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    Late Wdward Kasisiri was the proprietor of Kampala Quality
                    Primary and Kindergarten schools in Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/mukibi.jpg"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>The Late Lawrence Mukiibi</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    The Late Lawrence Mukiibi who preferred not to talk about his
                    mother and father, developed interest Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/agness.jpg"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Agness Nakabugo Ssekweyama</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    Agnes was head teacher of Namugongo Girls Boarding Primary
                    School for 18 years and died on job Read more
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/kajubi.jpg"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Prof George William Senteza Kajubi</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    Prof George William Senteza Kajubi, was a university
                    administrator Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/kaloori.jpg"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Charles Kaloori Kiwanuka</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    Charles Kaloori Kiwanuka, I surely doubt whether you have ever
                    been delegated to chair a parents meeting Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/showcase/makaaru.png"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Annie Tumwesigye Makaaru</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    Annie Nabimanya Kanyubure Makaaru was born to Kesi and Joyce
                    Kanyubure (RIP) on 20th June 1962
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/showcase/nkoyoyo.jpg"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Late Most Rt. Rev. Livingstone Mpalanyi Nkoyoyo</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    “Buli kyokola, kola mangu” literally meaning things should 
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="searchResult">
                <FittedImage
                  fit="cover"
                  loader={<div>Loading</div>}
                  onLoad={(...args) => console.log(...args)}
                  onError={(...args) => console.log(...args)}
                  src="http://greateducatorsug.org/img/showcase/kyemwa.png"
                />
                <div className="searchNameOverlay">
                  <div className="searchNameOverlayTitle">
                    <strong>Late Rev Bro Anthony Kyemwa</strong>
                  </div>
                  <div className="searchNameOverlayContent">
                    The late Reverend Brother Anthony Kyemwa was the First Ugandan
                    Black African to administer Read more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Search;
