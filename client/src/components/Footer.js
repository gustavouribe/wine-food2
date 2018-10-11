import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Photo by{" "}
        <a
          href="https://unsplash.com/@anniespratt?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Annie Spratt
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </a>
      </p>
      <p>
        created by{" "}
        <a
          href="http://cholo3000.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cholo 3000
        </a>
      </p>
    </div>
  );
};

export default Footer;
