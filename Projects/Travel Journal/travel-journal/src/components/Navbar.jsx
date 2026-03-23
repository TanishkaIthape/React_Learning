import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/src/assets/globe.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Travel Journal
          </a>
        </div>
      </nav>
    </>
  );
}
