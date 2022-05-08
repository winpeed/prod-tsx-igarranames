import type { NextApiHandler } from "next";

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table("Igarra Names");

const namesHandler: NextApiHandler = async (request, response) => {
  try {
    const { name } = request.query;
    const id = String(name);
    const data = await getName(id);
    if (data) {
      response.status(200).json({ message: "Success", data });
    } else {
      response.status(200).json({ message: "No available data for that name" });
    }
  } catch (error) {
    response.status(404).json({ message: "No data found" });
  }
};

export default namesHandler;

export async function getName(name: string ) {
  const response = await airtable.list({ maxRecords: 1000 });
  const data = await response;

  const result = data.records.find(
    (item: any) => String(item.fields.name.toLowerCase()).includes(name.toLowerCase())
  );
  return result;
}
