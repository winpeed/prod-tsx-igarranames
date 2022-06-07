import type { NextApiHandler } from "next";

// const Airtable = require("airtable-node");

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const namesHandler: NextApiHandler = async (request, response) => {
  if (request.method == "POST") {
    console.log(request.body.Name);
    console.log(request.body.Feedback);
    try {
      base("Improve Name Entry").create([
        {
          fields: {
            Name: request.body.Name,
            Feedback: request.body.Feedback,
          },
        },
      ]);
    } catch (err) {
      console.error(err);
    }

    response.status(200).json({
      message: "Thank you for your feedback.",
    });
  }
};

export default namesHandler;
