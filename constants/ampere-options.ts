interface AmpereOptionProps {
    id: number;
    value: string;
    label: string;
}

//  Ampere Options according to NEA Customer Tariff
export const AmpereOptions: AmpereOptionProps[] = [
    { id: 1, value: "5amp", label: "5 Ampere" },
    { id: 2, value: "15amp", label: "15 Ampere" },
    { id: 3, value: "30amp", label: "30 Ampere" },
    { id: 4, value: "60amp", label: "60 Ampere" },
];