import React from "react";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <img src="/loader.png" width="15" height="15" alt="loader" />
      </div>
      <div>Saving counter value</div>
    </div>
  );
}
