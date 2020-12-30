import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widget.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Vaccine Passport Needed to Fly", "10h ago - 5,909 readers")}
      {newsArticle(
        "Will Netflix model work for travel?",
        "1d ago - 37,162 readers"
      )}
      {newsArticle(
        "New Covid-19 variant found in US",
        "6h ago - 7,340 readers"
      )}
      {newsArticle(
        "House Passes $2,000 stimulus Checks",
        "1h ago - 579 readers"
      )}
      {newsArticle("The Next Big Business", "2h ago - 758 readers")}
    </div>
  );
}

export default Widget;
