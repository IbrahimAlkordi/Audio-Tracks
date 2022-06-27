import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableAlbums.module.css";
import AlbumItem from "./AlbumItem";


import abeerImage from "../../assets/abeer.jfif";
import assiImage from "../../assets/assi.jfif";
import elissaImage from "../../assets/elissa.jfif";
import georgeImage from "../../assets/george.jfif";
import josephImage from "../../assets/joseph.jfif";
import najwaImage from "../../assets/najwa.jfif";
import nancyImage from "../../assets/nancy.jfif";
import tamerImage from "../../assets/tamer.jfif";

const DUMMY_ALBUMS = [
  {
    id: "a1",
    title: "KOLL ALFOSOUL",
    singerName: "Assi Hillani",
    description: " listen to your favorite song from Assi Hillani new album",
    tracksNumber: 11,
    img: <img src={assiImage} alt="Assi Hillani" />,
  },
  {
    id: "a2",
    title: "KALAM ALNASS",
    singerName: "George Wassouf",
    description: " listen to your favorite song from George Wassouf new album",
    tracksNumber: 10,
    img: <img src={georgeImage} alt=" George Wassouf" />,
  },
  {
    id: "a3",
    title: "NANCY 10",
    singerName: "Nancy Ajram",
    description: "listen to your favorite song from Nancy Ajram new album",
    tracksNumber: 14,
    img: <img src={nancyImage} alt="Nancy Ajram" />,
  },
  {
    id: "a4",
    title: "SAHBIT RA2I",
    singerName: "Elissa",
    description: "listen to your favorite song from Elissa new album",
    tracksNumber: 18,
    img: <img src={elissaImage} alt="Elissa" />,
  },
  {
    id: "a5",
    title: "SA7ER 2LOUB",
    singerName: "Najwa Karam",
    description: "listen to your favorite song from Najwa Karam new album",
    tracksNumber: 8,
    img: <img src={najwaImage} alt="Najwa Karam" />,
  },
  {
    id: "a6",
    title: "BYEB2A NASS",
    singerName: "Abeer Nehmeh",
    description: "listen to your favorite song from Abeer Nehmeh new album",
    tracksNumber: 8,
    img: <img src={abeerImage} alt="Abeer Nehmeh" />,
  },
  {
    id: "a7",
    title: "WA7DANI",
    singerName: "Joseph Atieh",
    description: "listen to your favorite song from Joseph Atieh new album",
    tracksNumber: 4,
    img: <img src={josephImage} alt="Joseph Atieh" />,
  },
  {
    id: "a8",
    title: "KHALLIK FOLAZI",
    singerName: "Tamer Hosny",
    description: "listen to your favorite song from Tamer Hosny new album",
    tracksNumber: 11,
    img: <img src={tamerImage} alt="Tamer Hosny" />,
  },
];
const AvailableAlbums = () => {
  const albumList = DUMMY_ALBUMS.map((album) => (
    <AlbumItem
    id={album.id}
    key={album.id}
    title={album.title}
    singerName={album.singerName}
    img={album.img}
    description={album.description}
    tracksNumber={album.tracksNumber}
    ></AlbumItem>
  ));

  return (
 
      <section className={classes.albums}>
        <Card>
          <ul>{albumList}</ul>
        </Card>
      </section>
 
  );
};

export default AvailableAlbums;
