import React from 'react'
import Tridi from "react-tridi";
import "react-tridi/dist/index.css";

function View360({path, count, format}) {
  return (
    <Tridi
        location={path}
        format={format}
        count={count}
        // autoplaySpeed={80}
        // renderPin={(pin) => <span>A</span>}
        // inverse
        // showControlBar
      />
  )
}

export default View360