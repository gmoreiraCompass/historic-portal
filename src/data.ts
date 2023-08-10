import { Document } from "./types/Document";
import { TypeDocument } from "./types/TypeDocument";
import { User } from "./types/User";

export const documents: Document[] = [
    {
        id: "80aed749-936d-4a28-8870-6baadb3c48b8",
        type: TypeDocument.AdmAgency,
        year: 2020,
        title: "Comprovação de informe de rendimento - PJ - 2020",
        userId: "aa9e519f-bcc0-4408-990a-c6ec90b4bfbe",
    },
    {
        id: "72b9cd25-07c1-410e-b3ca-99fb71876ce",
        type: TypeDocument.DigitalInvoice,
        year: 2020,
        title: "Comprovação de informe de rendimento - PJ - 2020",
        userId: "aa9e519f-bcc0-4408-990a-c6ec90b4bfbe",
    },
    {
        id: "a043d80b-fd5f-4b94-872a-12a978d36dd7",
        type: TypeDocument.Fiscal,
        year: 2020,
        title: "Comprovação de informe de rendimento - PJ - 2020",
        userId: "aa9e519f-bcc0-4408-990a-c6ec90b4bfbe",
    },
    {
        id: "968b21cd-8b29-4afa-8498-e3b6437bbd6b",
        type: TypeDocument.Formalization,
        year: 2020,
        title: "Comprovação de informe de rendimento - PJ - 2020",
        userId: "aa9e519f-bcc0-4408-990a-c6ec90b4bfbe",
    },
    {
        id: "2b88e1ad-3182-4d8e-ad59-f971d8f46b80",
        type: TypeDocument.AdmAgency,
        year: 2020,
        title: "Comprovação de informe de rendimento - PJ - 2020",
        userId: "aa9e519f-bcc0-4408-990a-c6ec90b4bfbe",
    },
];

export const users: User[] = [
    {
        id: "aa9e519f-bcc0-4408-990a-c6ec90b4bfbe",
        name: "Eliza Samúdio",
        email: "eliza@email.com",
        documents: [],
    },
];
