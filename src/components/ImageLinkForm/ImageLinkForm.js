import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInput, onPictureSubmit }) => {
  return (
    <div>
      <p className="f4">{`This magic brain will detect faces in your pictures. Give it a try.`}</p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            onChange={onInput}
            className="f5 pa2 w-70 center formOutline"
            type="text"
          />
          <button
            onClick={onPictureSubmit}
            style={{ outline: "none" }}
            className="button w-30 grow f5 link ph3 pv2 dib linkButton br2"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
