import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "./footer.css";
function Footer() {
  const [terms, setTerms] = useState(false);
  const [cpyrights, setCopy] = useState(false);
  return (
    <div className="footer">
      {terms && (
        <div id="terms">
          <p className="para">
            A Terms & Conditions document for a website is an agreement the
            website makes with its users about how to use the site properly, as
            well as the obligations and responsibilities of each party.
            Websites, especially commercial websites, have a portion of the site
            devoted to Terms & Conditions because it's the most important
            document for letting site users know what is expected of them. For
            owners/operators running any kind of business or personal website
            that allows user interaction, it's a good idea to have a clearly
            laid out document with all the Terms & Conditions required. One of
            the primary functions of a Terms & Conditions document is to outline
            what will happen in a variety of different situations, including if
            the user breaks the rules and must have his/her account terminated.
            If the user goes in knowing what to expect, it is less likely that
            there will be problems between the user and the website down the
            road. The Terms & Conditions document on any website creates a
            legally binding set of rules for the user, as well as, in most
            cases, the website owner. It's a place to set up expectations for
            each of the parties and ensure that the use of the website runs
            smoothly for both.
          </p>
          <button className="para paras" onClick={() => setTerms(false)}>
            Okay
          </button>
        </div>
      )}
      {cpyrights && (
        <div id="copy">
          <p className="para">
            The copyright symbol ("©") should go next to the copyright owner's
            name. It should look like, "© 2017 by Jennifer," or can be spelled
            out "Copyright © 2017 Jennifer." The copyright owner is the author
            of the webpage, not the publisher or the printer. If any company
            requires that they be the copyright holder, don't publish with them.
            It's your work, regardless of who is printing it. If you use a pen
            name (also known as a pseudonym), you can put that on the copyright
            page instead of your real name. However, when registering your
            copyright with the U.S. Copyright Office, be sure to include both
            names on the form (pen name and legal name) since it is a legal
            document. The copyright year is the year you receive your copyright.
            If the webpage is reprinted into new editions, the copyright will
            list all of the edition years, starting with the latest. For
            example, if you first published a webpage in 2012, but published
            more editions in 2014 and 2017, it would read as such: "Copyright ©
            2017, 2014, 2012." Be sure that the copyright year is the year your
            book is published, not written. Your copyright will last for the
            duration of your lifetime plus an additional 70 years. After that,
            the work is considered public domain.
          </p>
          <button className="paras" onClick={() => setCopy(false)}>
            okay
          </button>
        </div>
      )}
      <div className="footsback">
        <div id="icontag">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100022821562786"
            className="icons"
          >
            <BsFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/harley_jeni"
            className="icons"
          >
            <SiTwitter />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/jazzz_jen/"
            className="icons"
          >
            <AiFillInstagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jennifer-j-a60a40183/"
            className="icons"
          >
            <AiFillLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JenniferJoseph98"
            className="icons"
          >
            <AiFillGithub />
          </a>
        </div>
        <div className="foot">
          <span className="links" onClick={() => setTerms(true)}>
            Terms and Conditions
          </span>
          <span className="links" onClick={() => setCopy(true)}>
            Copy Rights ©
          </span>
        </div>
      </div>
      <i id="made">
        Made with{" "}
        <span id="heart">
          <AiFillHeart />
        </span>{" "}
      </i>
    </div>
  );
}

export default Footer;
