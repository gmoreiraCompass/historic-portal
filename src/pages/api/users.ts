import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types/User";
import { users } from "../../data";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>
) {
    const query = req.query;
    const { getDocuments } = query;

    const baseUrl = process.env.VERCEL_URL
        ? "https://" + process.env.VERCEL_URL
        : "http://localhost:3000";

    if (getDocuments) {
        const data = await fetch(`${baseUrl}/api/documents`);
        const documentsFetched = await data.json();

        const usersWithDocuments = users.map(
            ({ id, email, name, documents,bankBranch, accountNumber }) => {
                documents.push(...documentsFetched);
                const user = {
                    id,
                    email,
                    name,
                    bankBranch,
                    accountNumber,
                    documents,
                };
                return user;
            }
        );

        return res.status(200).json(usersWithDocuments);
    }

    res.status(200).json(users);
}
