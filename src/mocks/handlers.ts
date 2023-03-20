import {rest} from "msw";

type TDDay = {
  id: string;
  targetDate: number;
};

const dDays: Array<TDDay> = [
  {
    id: "1",
    targetDate: 1679295600,
  },
  {
    id: "2",
    targetDate: 1687071600,
  },
];

export const handlers = [
  rest.post("/dDay", (req, res, ctx) => {
    sessionStorage.setItem("dDays", JSON.stringify(dDays));
    return res(ctx.status(200), ctx.json(dDays));
  }),

  rest.get("/", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(200), ctx.json(dDays));
  }),
];
