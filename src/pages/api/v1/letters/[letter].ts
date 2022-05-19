import type { NextApiHandler } from "next";

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table("Igarra Names");

  const namesHandler: NextApiHandler = async (request, response) => {
    console.log(typeof request.query.letter)
      const letter: any = request.query.letter

    const id: string = letter.toLowerCase();
    try {      
        const data = await getNamesFromLetter(id);
        response.status(200).json({ message: "Success", data });
    } catch (error) {
      response.status(404).json({ message: "Error" });
    }
  };
  
  export default namesHandler;

export async function getNamesFromLetter(id: string | string[]) {
  const response = await airtable.list({ maxRecords: 1000 });
  const results = await response;

  return results.records
    .filter(
      (item: any) =>
        item.fields.name.toLowerCase().startsWith(id) && item.fields.meaning
    )
    .sort((a: any, b: any) => (a.fields.name > b.fields.name ? 1 : -1));

}
