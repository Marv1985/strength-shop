import "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/NavbarCss/Menus.css";
import { useState, useEffect, useRef } from "react";

export default function Menus() {
  /* dropdown 1 */
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  /* dropdown 2 */
  const [isHovered2, setIsHovered2] = useState(false);
  const ref2 = useRef(null);
  const handleMouseOver2 = () => setIsHovered2(true);
  const handleMouseOut2 = () => setIsHovered2(false);

  /* dropdown 3 */
  const [isHovered3, setIsHovered3] = useState(false);
  const ref3 = useRef(null);
  const handleMouseOver3 = () => setIsHovered3(true);
  const handleMouseOut3 = () => setIsHovered3(false);

  /* dropdown 4 */
  const [isHovered4, setIsHovered4] = useState(false);
  const ref4 = useRef(null);
  const handleMouseOver4 = () => setIsHovered4(true);
  const handleMouseOut4 = () => setIsHovered4(false);

  /* dropdown 5 */
  const [isHovered5, setIsHovered5] = useState(false);
  const ref5 = useRef(null);
  const handleMouseOver5 = () => setIsHovered5(true);
  const handleMouseOut5 = () => setIsHovered5(false);

  /* dropdown 6 */
  const [isHovered6, setIsHovered6] = useState(false);
  const ref6 = useRef(null);
  const handleMouseOver6 = () => setIsHovered6(true);
  const handleMouseOut6 = () => setIsHovered6(false);

  /* hover for dropdown 1 */
  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  /* hover for dropdown 2 */
  useEffect(() => {
    const node = ref2.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver2);
      node.addEventListener("mouseout", handleMouseOut2);

      return () => {
        node.addEventListener("mouseover", handleMouseOver2);
        node.addEventListener("mouseout", handleMouseOut2);
      };
    }
  }, []);

  /* hover for dropdown 3 */
  useEffect(() => {
    const node = ref3.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver3);
      node.addEventListener("mouseout", handleMouseOut3);

      return () => {
        node.addEventListener("mouseover", handleMouseOver3);
        node.addEventListener("mouseout", handleMouseOut3);
      };
    }
  }, []);

  /* hover for dropdown 4 */
  useEffect(() => {
    const node = ref4.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver4);
      node.addEventListener("mouseout", handleMouseOut4);

      return () => {
        node.addEventListener("mouseover", handleMouseOver4);
        node.addEventListener("mouseout", handleMouseOut4);
      };
    }
  }, []);

  /* hover for dropdown 3 */
  useEffect(() => {
    const node = ref5.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver5);
      node.addEventListener("mouseout", handleMouseOut5);

      return () => {
        node.addEventListener("mouseover", handleMouseOver5);
        node.addEventListener("mouseout", handleMouseOut5);
      };
    }
  }, []);

  /* hover for dropdown 6 */
  useEffect(() => {
    const node = ref6.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseOver6);
      node.addEventListener("mouseout", handleMouseOut6);

      return () => {
        node.addEventListener("mouseover", handleMouseOver6);
        node.addEventListener("mouseout", handleMouseOut6);
      };
    }
  }, []);

  return (
    <div className="menus">
      {/* 1 */}
      <a className="hov" href={"sale"}>
        XMAS SALE
      </a>

      {/* 2 */}
      <details ref={ref} open={isHovered}>
        <summary>
          WEIGHTS & BARS
          <span>
            <i className="arrow-menu down-menu"></i>
          </span>
        </summary>
        <ul className="dropdown1" ref={ref}>
          <li>
            <a href={"weights"}>Weight Plates</a>
          </li>
          <li>
            <a href={"weights"}>Bars</a>
          </li>
          <li>
            <a href={"weights"}>Collars</a>
          </li>
          <li>
            <a href={"weights"}>Dumbbells</a>
          </li>
          <li>
            <a href={"weights"}>Kettlebells</a>
          </li>
          <li>
            <a href={"weights"}>Medicine Balls</a>
          </li>
        </ul>
      </details>

      {/* 3 */}
      <details ref={ref2} open={isHovered2}>
        <summary>
          EQUIPMENT
          <span>
            <i className="arrow-menu down-menu"></i>
          </span>
        </summary>
        <ul className="dropdown2" ref={ref2}>
          <li>
            <a href={"equipment"}>Cages & Squat Stands</a>
          </li>
          <li>
            <a href={"equipment"}>Benches</a>
          </li>
          <li>
            <a href={"equipment"}>Rigs</a>
          </li>
          <li>
            <a href={"equipment"}>Strongman Equipment</a>
          </li>
          <li>
            <a href={"equipment"}>Home Gym Equipment</a>
          </li>
          <li>
            <a href={"equipment"}>Conditioning</a>
          </li>
          <li>
            <a href={"equipment"}>GHDs & Hyperextension</a>
          </li>
          <li>
            <a href={"equipment"}>Bodyweight Training</a>
          </li>
          <li>
            <a href={"equipment"}>Plyo Boxes</a>
          </li>
          <li>
            <a href={"equipment"}>Other Equipment</a>
          </li>
          <li>
            <a href={"equipment"}>Matting</a>
          </li>
          <li>
            <a href={"equipment"}>Storage</a>
          </li>
        </ul>
      </details>

      {/* 4 */}
      <details ref={ref3} open={isHovered3}>
        <summary>
          SUPPORT GEAR
          <span>
            <i className="arrow-menu down-menu"></i>
          </span>
        </summary>
        <ul className="dropdown3" ref={ref3}>
          <li>
            <a href={"weights"}>Belts</a>
          </li>
          <li>
            <a href={"weights"}>Knee Sleeves</a>
          </li>
          <li>
            <a href={"weights"}>Elbow Sleeves</a>
          </li>
          <li>
            <a href={"weights"}>Wrist Wraps</a>
          </li>
          <li>
            <a href={"weights"}>Knee Wraps</a>
          </li>
          <li>
            <a href={"weights"}>Straps</a>
          </li>
          <li>
            <a href={"weights"}>IPF Approved</a>
          </li>
        </ul>
      </details>

      {/* 5 */}
      <details ref={ref4} open={isHovered4}>
        <summary>
          ACCESSORIES
          <span>
            <i className="arrow-menu down-menu"></i>
          </span>
        </summary>
        <ul className="dropdown4" ref={ref4}>
          <li>
            <a href={"weights"}>Chalk & Grip Tools</a>
          </li>
          <li>
            <a href={"weights"}>Smelling Salts</a>
          </li>
          <li>
            <a href={"weights"}>Resistance Bands</a>
          </li>
          <li>
            <a href={"weights"}>Mobility Tools</a>
          </li>
          <li>
            <a href={"weights"}>Clothing</a>
          </li>
          <li>
            <a href={"weights"}>Footwear</a>
          </li>
          <li>
            <a href={"weights"}>Singlets</a>
          </li>
          <li>
            <a href={"weights"}>Shakers & Jugs</a>
          </li>
          <li>
            <a href={"weights"}>Gift Cards</a>
          </li>
        </ul>
      </details>

      {/* 6 */}
      <details ref={ref5} open={isHovered5}>
        <summary>
          SHOP BY SPORT
          <span>
            <i className="arrow-menu down-menu"></i>
          </span>
        </summary>
        <ul className="dropdown5" ref={ref5}>
          <li>
            <a href={"weights"}>Powerlifting</a>
          </li>
          <li>
            <a href={"weights"}>Strongman</a>
          </li>
          <li>
            <a href={"weights"}>Weightlifting</a>
          </li>
        </ul>
      </details>

      {/* 7 */}
      <a className="pad" href={"sale"}>
        NEW IN
      </a>

      {/* 8 */}
      <details ref={ref6} open={isHovered6}>
        <summary>
          XMAS GIFTS
          <span>
            <i className="arrow-menu down-menu"></i>
          </span>
        </summary>
        <ul className="dropdown6" ref={ref6}>
          <li>
            <a href={"weights"}>Gifts Under £10</a>
          </li>
          <li>
            <a href={"weights"}>Gifts Under £20</a>
          </li>
          <li>
            <a href={"weights"}>Gifts Under £30</a>
          </li>
          <li>
            <a href={"weights"}>Gifts Over £30</a>
          </li>
        </ul>
      </details>
    </div>
  );
}
