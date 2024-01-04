import React from "react";

function About() {
  return (
    <div className="py-12 pl-10">
      <h3>About Page</h3>
      <p>
        By simulating the browser on the server, the goal is to pre-render the
        web page on the server side, reducing the amount of work that the
        client's browser needs to do. This can lead to faster initial page loads
        and improved performance, especially in scenarios where client devices
        may have limitations in processing power or network speed.
      </p>
    </div>
  );
}

export default About;
