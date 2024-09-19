import React from 'react';
import { Button } from '@material-ui/core';

const getMedia = async () => {
// async function getMedia() {
  const constraints = { audio: true, video: true};

  try {
    // constraintsを入れるとブラウザからのオーディオ、ビデオの許可を必須にできる
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch (err) {
    /* handle the error */
    console.error(err);
  }
}

getMedia();

const App = () => {
  return (
    <div>
      <div>Hello, Reactaaa!</div>
      <Button color="primary" variant="contained">yes!!</Button>
    </div>
  )
}

export default App;
