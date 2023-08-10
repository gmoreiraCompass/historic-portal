import { Document } from "./Document";

export type User = {
    id: string;
    name: string;
    email: string;
    documents: Document[];
};
