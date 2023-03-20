import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddDDay } from "../pages/AddDDay";
import { DDay } from "../pages/DDay";
import { NotFound } from "../pages/NotFound";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/addDDay"} element={<AddDDay />} />
        <Route path={"/dDay"} element={<DDay />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
