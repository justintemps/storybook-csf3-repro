import { FC } from "react";
import classNames from "classnames";
import { LinkProps } from "./Link.props";

const Link: FC<LinkProps> = ({
  children,
  className,
  label,
  target,
  theme = "light",
  url,
  style,
  ...rest
}) => {
  const baseClass = "link";
  const linkClasses = classNames(className, {
    [baseClass]: true,
    [`${baseClass}--${theme}`]: theme,
  });

  return (
    <a
      className={linkClasses}
      href={url}
      target={target}
      rel={target ? "noopener noreferrer" : ""}
      style={style}
      {...rest}
    >
      {label && <span className="link__label">{label}</span>}
      {children}
    </a>
  );
};

export default Link;
