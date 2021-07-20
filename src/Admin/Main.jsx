import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import Header from "./Header";
const Main = ({ handleToggleSidebar }) => {
  return (
    <main>
      <Header handleToggleSidebar={handleToggleSidebar} />
      {/* navigation display */}
      <div
        className="row"
        style={{
          marginTop: 35,
          justifyContent: "center",
          alignitems: "center"
        }}
      >
        <div className="col-md-5">
          <h2> Dashboard</h2>
        </div>
        <div className="col-md-5">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <FaTachometerAlt />
              <a href="/" className="mx-1">
                Main
              </a>
            </div>
            <div>/dashboard</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
