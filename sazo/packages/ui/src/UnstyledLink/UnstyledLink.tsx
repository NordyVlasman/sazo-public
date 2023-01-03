import Link from "next/link";
import React, { forwardRef, memo } from "react";

import { LinkLikeComponentProps } from "./types";

// Wrapping forwardRef in a memo gets a name set since
// https://github.com/facebook/react/issues/16722
// but eslint-plugin-react doesn't know that just yet
// eslint-disable-next-line react/display-name
export const UnstyledLink = memo(
  forwardRef<unknown, LinkLikeComponentProps>(function UnstyledLink(
    props,
    _ref
  ) {
    const { external, url, ...rest } = props;
    const target = external ? "_blank" : undefined;
    const rel = external ? "noopener noreferrer" : undefined;

    if (external) {
      return <a target={target} {...rest} href={url} rel={rel} />;
    }

    return (
      <Link href={url} legacyBehavior>
        <a target={target} {...rest} rel={rel} />
      </Link>
    );
  })
);
