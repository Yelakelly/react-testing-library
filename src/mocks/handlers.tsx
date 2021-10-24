import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.json([
        {
          name: "Chocolate",
          imagePath: "https://picsum.photos/200/300"
        },
        {
          name: "Vanilla",
          imagePath: "https://picsum.photos/200/300"
        }
      ])
    );
  })
];
