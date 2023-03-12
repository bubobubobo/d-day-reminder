import React, { useEffect } from "react";

export function Home() {
  const { worker } = require("../mocks/browser");

  useEffect(() => {
    worker.start();
  }, []);

  return <div>{"Home"}</div>;
}
