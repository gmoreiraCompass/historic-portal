import { TypeDocument } from "./TypeDocument";

export type Document = {
    id: string;
    type: TypeDocument;
    year: number;
    title: string;
    userId: string;
};
