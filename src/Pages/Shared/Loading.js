import React from 'react';
import "../../Styles/Loading.css"
const Loading = () => {
  return (
    <div class="overlay d-flex justify-content-center align-items-center">
      <div class="">
        <div class="spinner-border spinner-border-lg" role="status" style={{"width": "20rem","height": "20rem", "z-index": "20"}}>
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;