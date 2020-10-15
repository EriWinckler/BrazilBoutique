import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  return (
    <footer>
      <div id="go-top">
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          cursor="pointer"
          title="Back to Top"
          className="backTop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </div>
      <ul className="copyright">
        <li>
          &copy; Copyright {new Date().getFullYear()}
          <a
            href="https://eriwinckler.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Magnus Projects
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
