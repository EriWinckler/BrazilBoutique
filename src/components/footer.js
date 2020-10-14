import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <footer>
      <div id="go-top">
        <Link className="smoothscroll" title="Back to Top" href="#header">
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </Link>
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
