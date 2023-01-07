import skull from "/home/marv/react-projects/strength-shop/src/HomePage/GuiMenuCarousel/Images/skull.png";
import HoverDropdownButton1 from "./HoverButtons/HoverDropdownButton1";
import { HoverDropdownButton2 } from "./HoverButtons/HoverDropdownButton2";

export default function CarouselP2() {
  // /* first image hover */
  // const [secondary, setSecondary] = useState(false);
  // const [main, setMain] = useState(true);
  // const ref1 = useRef(null);

  // useEffect(() => {
  //   const node = ref1.current;

  //   function func() {
  //     setSecondary(true);
  //     setMain(false);
  //   }

  //   function func2() {
  //     setSecondary(false);
  //     setMain(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main, secondary]);

  // /* second image hover */
  // const [secondary2, setSecondary2] = useState(false);
  // const [main2, setMain2] = useState(true);
  // const ref2 = useRef(null);

  // useEffect(() => {
  //   const node = ref2.current;

  //   function func() {
  //     setSecondary2(true);
  //     setMain2(false);
  //   }

  //   function func2() {
  //     setSecondary2(false);
  //     setMain2(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main2, secondary2]);

  // /* third image hover */
  // const [secondary3, setSecondary3] = useState(false);
  // const [main3, setMain3] = useState(true);
  // const ref3 = useRef(null);

  // useEffect(() => {
  //   const node = ref3.current;

  //   function func() {
  //     setSecondary3(true);
  //     setMain3(false);
  //   }

  //   function func2() {
  //     setSecondary3(false);
  //     setMain3(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main3, secondary3]);

  // /* fourth image hover */
  // const [secondary4, setSecondary4] = useState(false);
  // const [main4, setMain4] = useState(true);
  // const ref4 = useRef(null);

  // useEffect(() => {
  //   const node = ref4.current;

  //   function func() {
  //     setSecondary4(true);
  //     setMain4(false);
  //   }

  //   function func2() {
  //     setSecondary4(false);
  //     setMain4(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main4, secondary4]);

  // /* fifth image hover */
  // const [secondary5, setSecondary5] = useState(false);
  // const [main5, setMain5] = useState(true);
  // const ref5 = useRef(null);

  // useEffect(() => {
  //   const node = ref5.current;

  //   function func() {
  //     setSecondary5(true);
  //     setMain5(false);
  //   }

  //   function func2() {
  //     setSecondary5(false);
  //     setMain5(true);
  //   }

  //   if (node) {
  //     node.addEventListener("mouseenter", func);
  //     node.addEventListener("mouseleave", func2);

  //     return () => {
  //       node.addEventListener("mouseenter", func);
  //       node.addEventListener("mouseleave", func2);
  //     };
  //   }
  // }, [main5, secondary5]);

  return (
    <div>
      <div className="carousel-inner-wrap test2">
        <div className="c2">
          <div className="img6"></div>
          <div className="text">
            <div>
              Sandwich J-Hooks (Pair) -
              <br />
              75mm
            </div>
            <div>Strength Shop</div>
            <div>£89.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton1 />
          </div>
        </div>

        <div className="c2 c3">
          <div className="img7"></div>
          <div className="text">
            <div>
              7mm Inferno Neoprene Knee
              <br />
              Sleeves - Blue-Grey - IPF
              <br />
              Approved (Pair)
            </div>
            <div>Strength Shop</div>
            <div>£44.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
        </div>

        <div className="c2 c3">
          <div className="img8"></div>
          <div className="text">
            <div>
              7mm Inferno Neoprene Knee
              <br />
              Sleeves - Dark-Leopard - IPF
              <br />
              Approved (Pair)
            </div>
            <div>Strength Shop</div>
            <div>£44.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton2 />
          </div>
        </div>

        <div className="c2">
          <div className="img9"></div>
          <div className="text">
            <div>
              Z
              <span className="skull">
                <img src={skull} alt="" />
              </span>
              NE Bear Down Steel
              <br />
              Golden Tides - Smelling Salts
            </div>
            <div>Zone</div>
            <div>£32.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton1 />
          </div>
        </div>

        <div className="c2">
          <div className="img10"></div>
          <div className="text">
            <div>
              Z
              <span className="skull">
                <img src={skull} alt="" />
              </span>
              NE Bear Down Steel
              <br />
              Blood - Smelling Salts
            </div>
            <div>Zone</div>
            <div>£34.99</div>
            <div>Inc. VAT</div>
          </div>
          <div className="drop1">
            <HoverDropdownButton1 />
          </div>
        </div>
      </div>
    </div>
  );
}
