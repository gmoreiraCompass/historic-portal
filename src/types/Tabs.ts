export type TabsProps = {
    data: Tab[];
};

export type Tab = {
    id: number;
    label: string;
    docs: Doc[];
};

export type Doc = { id: number; type: string; label: string };
