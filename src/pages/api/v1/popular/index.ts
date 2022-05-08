import type { NextApiHandler } from "next";

const namesHandler: NextApiHandler = async (request, response) => {
  response.status(200).json({ message: "No available data for that name" });
};

export default namesHandler;
