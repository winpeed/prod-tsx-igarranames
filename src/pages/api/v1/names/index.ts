import type { NextApiHandler } from "next";

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table("Igarra Names");

const namesHandler: NextApiHandler = async (request, response) => {
  try {
    const data = await getNames();
    response.status(200).json({ message: "Success", data });
  } catch (error) {
    response.status(404).json({ message: "Error" });
  }
};

export default namesHandler;

export async function getNames() {
  const response = await airtable.list({ maxRecords: 1000 });
  const results = await response;
  const data = results.records.filter(
    (item: any) => item.fields.meaning !== undefined
  );
  return data;
}
