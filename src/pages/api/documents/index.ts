import { NextApiRequest, NextApiResponse } from "next";
import { Document } from "../../../types/Document";
import { documents } from "../../../data";

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Document[]>
) {
    res.status(200).json(documents);
}
