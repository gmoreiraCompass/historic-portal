import { Document } from "./Document";

export type User = {
    id: string;
    name: string;
    email: string;
    bankBranch: string;
    accountNumber:string;
    documents: Document[];
};
