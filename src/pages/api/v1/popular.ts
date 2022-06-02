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
          //Get All names from the popular names table
          const results = records.map(
            (item: { fields: any }) => item.fields.Name
          );

          //Get the length of each popular name in the array including repetitions
          const prelimResults = results.map((item: any) => {
            let length = 0;
            for (let i = 0; i < results.length; i++) {
              if (item === results[i]) {
                length++;
              }
            }
            return JSON.stringify({ name: item, number: length });
          });

          //Get unique items in the array
          const finalResults = new Set([...prelimResults]);

          //Send the result as response and sort the results by the number of occurences
          response.status(200).json({
            message: "Success",
            data: [...finalResults]
              .map((item) => JSON.parse(item))
              .sort((a, b) => b.number - a.number),
          });
        },
        function done(err: any) {
          if (err) {
            response
              .status(404)
              .json({ message: "Error getting popular names" });
            return;
          }
        }
      );
  }
};

export default namesHandler;
