import classNames from "classnames";

import "./Header.css";

const Header = (props) => {
  const className = classNames("header", {
    [props.variant]: props.variant,
    [props.additionalClassNames]: props.additionalClassNames,
  });

  return (
    <div className={className}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
