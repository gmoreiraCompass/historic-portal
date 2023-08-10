import { NextApiRequest, NextApiResponse } from "next";
import { Document } from "../../../types/Document";
import { documents } from "../../../data";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Document | undefined>
) {
    const query = req.query;
    const response = documents.find(
        (document) => document.id === query.documentId
    );

    res.status(200).json(response);
}
