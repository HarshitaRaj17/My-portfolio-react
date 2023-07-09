import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'tachyons';
const Nav = () => {
  return (
    <nav>
      <ul className="flex list pa0 ml3">
        <li>
          <ScrollLink to="about" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"smooth={true} duration={10}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="skills" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"smooth={true} duration={10}>
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="interests" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" smooth={true} duration={10}>
            Interests
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="last" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" smooth={true} duration={10}>
            Contact  Me
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
