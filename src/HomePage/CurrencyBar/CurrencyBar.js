import { useState, useEffect, useRef } from "react";
import "/home/marv/react-projects/strength-shop/src/HomePage/CurrencyBar/currencyBar.css";

export default function CurrencyBar() {
  const [country, setCountry] = useState(false);
  const [buttonText, setButtonText] = useState("United Kingdom (GBP £)");
  const wrapperRef = useRef(null);
  ClickOutside(wrapperRef);
  /* ref to stop useEffect conflicting with popup click function */
  const reff = useRef(null);

  /* dropdown menu */
  function Dropdown() {
    if (country === false) {
      setCountry(true);
    } else {
      setCountry(false);
    }
  }

  /* dropdown menu removal */
  function ClickOutside(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !reff.current.contains(event.target)
        ) {
          setCountry(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  /* handle button text */
  function handleClick(e) {
    setButtonText(e.target.textContent);
  }

  return (
    <div className="currency-bar">
      <button ref={reff} onClick={Dropdown} className="country">
        {buttonText}
        <span>
          <i className="arrow down"></i>
        </span>
      </button>

      {country ? (
        <div className="country-wrapper">
          <div ref={wrapperRef} className="dropdown-content">
            <ul>
              <li onClick={handleClick}>Austrailia (AUD &#36;)</li>
              <li onClick={handleClick}>Belgium (EUR &euro;)</li>
              <li onClick={handleClick}>Bulgaria (BGN &#1083;&#1074;)</li>
              <li onClick={handleClick}>Canada (CAD &#36;)</li>
              <li onClick={handleClick}>Croatia (HRK &#107;&#110;)</li>
              <li onClick={handleClick}>Czechia (CZK &#75;&#269;)</li>
              <li onClick={handleClick}>Denmark (DKK &#107;&#114;)</li>
              <li onClick={handleClick}>Estonia (EUR &euro;)</li>
              <li onClick={handleClick}>Finland (EUR &euro;)</li>
              <li onClick={handleClick}>France (EUR &euro;)</li>
              <li onClick={handleClick}>Greece (EUR &euro;)</li>
              <li onClick={handleClick}>Guernsey (GBP &#163;)</li>
              <li onClick={handleClick}>Hungary (HUF &#70;&#116;)</li>
              <li onClick={handleClick}>Ireland (EUR &euro;)</li>
              <li onClick={handleClick}>Isle of Man (GBP &#163;)</li>
              <li onClick={handleClick}>Italy (EUR &euro;)</li>
              <li onClick={handleClick}>Jersey (GBP &#163;)</li>
              <li onClick={handleClick}>Latvia (EUR &euro;)</li>
              <li onClick={handleClick}>Lithuania (EUR &euro;)</li>
              <li onClick={handleClick}>Luxembourg (EUR &euro;)</li>
              <li onClick={handleClick}>Malta (EUR &euro;)</li>
              <li onClick={handleClick}>Netherlands (EUR &euro;)</li>
              <li onClick={handleClick}>New Zealand (NZD &#36;)</li>
              <li onClick={handleClick}>Norway (NOK &#107;&#114;)</li>
              <li onClick={handleClick}>Poland (PLN &#122;&#322;)</li>
              <li onClick={handleClick}>Portugal (EUR &euro;)</li>
              <li onClick={handleClick}>Romaina (RON &#108;&#101;&#105;)</li>
              <li onClick={handleClick}>Slovenia (EUR &euro;)</li>
              <li onClick={handleClick}>South Africa (ZAR &#82;)</li>
              <li onClick={handleClick}>Spain (EUR &euro;)</li>
              <li onClick={handleClick}>Sweden (SEK &#107;&#114;)</li>
              <li onClick={handleClick}>United Kingdom (GBP &#163;)</li>
              <li onClick={handleClick}>United States (USD &#36;)</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
