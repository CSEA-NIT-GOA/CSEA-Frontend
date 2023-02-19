import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.1)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 12%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
        <div>
            <img src={props.imagen} alt="" />
            <h2>{props.title}</h2>
            <p className="max-sm:hidden">
                {props.content}
            </p>
        </div>
    </animated.div>
  );
}

export default Card;