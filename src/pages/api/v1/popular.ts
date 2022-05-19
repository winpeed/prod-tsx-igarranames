import type { NextApiHandler } from "next";

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
);

const namesHandler: NextApiHandler = async (request, response) => {
  if (request.method == "POST") {
    try {
      base("Popular Names").create([
        {
          fields: {
            Name: request.body.Name,
          },
        },
      ]);
    } catch (err) {
      console.error(err);
    }

    response.status(200).json({
      message: "New Popular Name added",
    });
  }

  if (request.method == "GET") {
    base("Popular Names")
      .select({
        maxRecords: 1000,
        view: "Grid view",
      })
      .eachPage(
        function page(records: any) {
          const results = records.map((item: { fields: any; }) => item.fields.Name).reduce((acc, curr) => {
            acc[curr] ??= {[curr]: 0};
            acc[curr][curr]++;
            
            return acc;
          }, {})
                  
          response.status(200).json({ message: "Success", data: results });

        },
        function done(err: any) {
          if (err) {
            response.status(404).json({ message: "Error getting popular names" });
            return;
          }
        }
      );
  }
};

export default namesHandler;
