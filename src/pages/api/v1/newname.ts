import type { NextApiHandler } from "next";


const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const namesHandler: NextApiHandler = async (request, response) => {
 
  if (request.method == "POST") {


    try {
      base("New Name Form").create([
        {
          fields: {
            Name: request.body.name,
            Meaning: request.body.meaning,
            Email: request.body.email,
            FromIgarra: request.body.isIgarra
          },
        },
      ]);
    } catch (err) {
      console.error(err);
    }

    response
      .status(200)
      .json({
        message: "Thank you for adding a new name to the directory of names",
      });
  }
};

export default namesHandler;
