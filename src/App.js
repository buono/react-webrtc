import React from 'react';

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
  return <div>Hello, Reactaaa!</div>;
}

export default App;
