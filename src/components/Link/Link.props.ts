import React from "react";

export interface LinkProps {
  /**
   * Specify the label for the link
   */
  label?: string;

  /**
   * Specify the url for the link's href
   */
  url?: string;

  /**
   * Specify the target for the link
   */
  target?: string;

  /**
   * Specify an optional className to be added to your Link.
   */
  theme?: "light" | "dark" | "footer" | "button";

  /**
   * Specify an optional className to be added to your Link.
   */
  className?: string;

  /**
   * Inline styles to be applied to the rendered element
   */
  style?: React.CSSProperties;
}
