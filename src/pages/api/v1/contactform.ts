import type { NextApiHandler } from "next";


const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const namesHandler: NextApiHandler = async (request, response) => {
 
  if (request.method == "POST") {
 
    try {
      base("Contact Form").create([
        {
          fields: {
            FirstName: request.body.firstName,
            LastName: request.body.lastName,
            Email: request.body.email,
            Message: request.body.message
          },
        },
      ]);
    } catch (err) {
      console.error(err);
    }

    response
      .status(200)
      .json({
        message: "Your message was sent successfully",
      });
  }
};

export default namesHandler;
