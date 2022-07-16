import React from "react";
import { Circle } from "better-react-spinkit";
import styled from "styled-components";
const Spacer = styled.div`
width:100%;
height:10px;`;

function Loading() {
  return (
    <center style={{display: 'grid',placeItems:"center",height:'100vh'}}>
      <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"
                  width={200}
                  height={200} />
              <Spacer/>
              <Circle color="#3CBC28" size={60 } />
      </div>
    </center>
  );
}

export default Loading;
