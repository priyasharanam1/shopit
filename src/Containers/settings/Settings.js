import React from "react";
import TshirtColor from "./TshirtColor";
import ChangeImage from "./ChangeImage";
import WriteText from "./WriteText";
import TextModify from "./TextModify";

const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings">
        <TshirtColor />
        <hr className="hr" />
        <ChangeImage/>
        <hr className="hr" />
        <WriteText/>
        <hr className="hr" />
        <TextModify/>
      </div>
    </div>
  );
};

export default Settings;
