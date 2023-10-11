import React from "react";
import Hero from "./hero";

import Popular from "./Popular";
import Comment from "./Comment";
import Sale from "./Sale";
export default function Index() {
  return (
    <div>
      <Hero />
      <Popular />
      <Comment />
      <Sale />
    </div>
  );
}
