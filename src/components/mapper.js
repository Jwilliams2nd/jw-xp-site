import React, {Fragment} from 'react';
import Window from './window';

const Mapper = (props) => {
  let { library } = props;
  let painting = [];
  let photography = [];
  let video = [];
  let recycleBin = [];

  for(let i = 0; i < library.length; i++) {
    switch (library[i].node.type) {
      case "Painting":
        painting.push(library[i]);
        break;
      case "Photography":
        photography.push(library[i]);
        break;
      case "Video":
        video.push(library[i]);
        break;
      default:
        recycleBin.push(library[i]);
    }
  }

  const sortByYear = (a, b) => {
    return a.node.year - b.node.year;
  };

  painting.sort(sortByYear);

  return (
    <Fragment>
      <Window 
        active = {props.painting}
        hidden = {props.hidePainting}
        name = {"Painting"}
        library = {painting}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
        topWindow = {props.topWindow === "Painting" ? true : false}
      />
      <Window
        active = {props.videos}
        hidden = {props.hideVideos}
        name = {"Videos"}
        library = {video}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
        topWindow = {props.topWindow === "Videos" ? true : false}
      />
      <Window
        active = {props.photography}
        hidden = {props.hidePhotography}
        name = {"Photography"}
        library = {photography}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
        topWindow = {props.topWindow === "Photography" ? true : false}
      />
      <Window
        active = {props.recycle}
        hidden = {props.hideRecycle}
        name = {"Recycle Bin"}
        library = {recycleBin}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
        topWindow = {props.topWindow === "Recycle Bin" ? true : false}
      />
    </Fragment>
  )
}

export default Mapper;