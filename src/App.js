import React, { useState } from "react";
import "./styles.css";
import backgroundImage from "./download.png";

export default function App() {
  //recommendation list
  var podcastList = {
    tech: [
      {
        name: "thinkingwithtanay",
        rating: "5/5",
        link: "https://open.spotify.com/show/4IZCzLuBT6QezvViXlOgxO"
      },
      {
        name: "Lex Fridman",
        rating: "4/5",
        link: "https://www.youtube.com/user/lexfridman"
      }
    ],
    entrepreneurship: [
      {
        name: "the bet david podcast",
        rating: "4/5",
        link: "https://www.youtube.com/channel/UCGX7nGXpz-CmO_Arg-cgJ7A"
      },
      {
        name: "GaryVee audio experience",
        rating: "5/5",
        link: "https://open.spotify.com/show/6SZVsPIxPfVs6aavqM1peY"
      }
    ],

    "self-help": [
      {
        name: "the rudest podcast",
        rating: "5/5",
        link: "https://www.youtube.com/channel/UCNTdQYhTtb13-IYKYCW0d1A"
      },
      {
        name: "Impact Theory with Tom Bilyeu",
        rating: "5/5",
        link: "https://www.youtube.com/channel/UCnYMOamNKLGVlJgRUbamveA"
      }
    ],

    "talk's": [
      {
        name: "joe rogan experience",
        rating: "5/5",
        link: "https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk"
      },
      {
        name: "impaulsive podcast",
        rating: "1/5",
        link: "https://www.youtube.com/channel/UCGeBogGDZ9W3dsGx-mWQGJA"
      }
    ]
  };

  //converting recommendation list keys to array
  var podcastArray = Object.keys(podcastList);

  //recommendation list
  var [recommendationList, setRecommendation] = useState([
    {
      name: "Select Genre",
      rating: "",
      link: "/"
    }
  ]);

  //
  return (
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <h1>Podcast Recommendations🎙️</h1>
      <h2>Podcast Genre: </h2>
      {
        <div className="GenreList">
          {podcastArray.map((i, index) => {
            return (
              <div
                className="GenreButton"
                onClick={() => {
                  setRecommendation(podcastList[`${i}`]);
                  console.log(recommendationList);
                }}
                key={index}
              >{`${i}`}</div>
            );
          })}
        </div>
      }
      <ul style={{ paddingInlineStart: "0" }}>
        {recommendationList.map((item, index) => {
          return (
            <li className="listCard" key={index}>
              <div className="recommendationCard">
                <a href={`${item.link}`} target="_blank">
                  <h3 className="rHeading">{`${item.name}`}</h3>
                  <small className="rRating">{`${item.rating}`}</small>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
