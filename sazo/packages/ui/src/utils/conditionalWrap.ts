import * as React from "react";

interface Props {
  children: React.ReactElement;
  condition: boolean;
  wrap: (children: React.ReactElement) => JSX.Element;
}

const ConditionalWrap: React.FC<Props> = ({ condition, wrap, children }) =>
  condition ? wrap(children) : children;

export default ConditionalWrap;
