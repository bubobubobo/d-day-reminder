import React from "react";
import { Header } from "../component/Home/Molecule/Header";
import { HomeContents } from "../component/Home/Organism/HomeContents";

export function Home() {
  return (
    <Home.Group>
      <Home.Header />
      <Home.Body />
    </Home.Group>
  );
}

Home.Group = HomeGroup;
Home.Header = Header;
Home.Body = HomeContents;

function HomeGroup({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
