import type { NextApiHandler } from "next";


const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const namesHandler: NextApiHandler = async (request, response) => {
 
  if (request.method == "POST") {

    try {
      base("Newsletter Form").create([
        {
          fields: {
            Name: request.body.Name,
            Email: request.body.Email,
          },
        },
      ]);
    } catch (err) {
      console.error(err);
    }

    response
      .status(200)
      .json({
        message: "You've been successfully signed up to the newsletter.",
      });
  }
};

export default namesHandler;
