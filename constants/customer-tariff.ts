interface TariffDetailsProps {
    minAmt: number;
    initial_energy_rate?: number;
    energy_rate: number;
}

interface TariffRangesProps {
    [key: string]: TariffDetailsProps;
}

interface CustomerTariffProps {
    [key: string]: TariffRangesProps;
}

export const customerTariff: CustomerTariffProps = {
    "5amp": {
        "0-20": {
            "minAmt": 30,
            "initial_energy_rate": 0,
            "energy_rate": 3
        },
        "21-30": {
            "minAmt": 50,
            "energy_rate": 6.5
        },
        "31-50": {
            "minAmt": 50,
            "energy_rate": 8
        },
        "51-100": {
            "minAmt": 75,
            "energy_rate": 9.5
        },
        "101-250": {
            "minAmt": 100,
            "energy_rate": 9.5
        },
        "250-above": {
            "minAmt": 150,
            "energy_rate": 11
        }
    },
    "15amp": {
        "0-20": {
            "minAmt": 50,
            "initial_energy_rate": 4,
            "energy_rate": 4
        },
        "21-30": {
            "minAmt": 75,
            "energy_rate": 6.5
        },
        "31-50": {
            "minAmt": 75,
            "energy_rate": 8
        },
        "51-100": {
            "minAmt": 100,
            "energy_rate": 9.5
        },
        "101-250": {
            "minAmt": 125,
            "energy_rate": 9.5
        },
        "250-above": {
            "minAmt": 175,
            "energy_rate": 11
        }
    },
    "30amp": {
        "0-20": {
            "minAmt": 75,
            "initial_energy_rate": 5,
            "energy_rate": 5
        },
        "21-30": {
            "minAmt": 100,
            "energy_rate": 6.5
        },
        "31-50": {
            "minAmt": 100,
            "energy_rate": 8
        },
        "51-100": {
            "minAmt": 125,
            "energy_rate": 9.5
        },
        "101-250": {
            "minAmt": 150,
            "energy_rate": 9.5
        },
        "250-above": {
            "minAmt": 200,
            "energy_rate": 11
        }
    },
    "60amp": {
        "0-20": {
            "minAmt": 125,
            "initial_energy_rate": 6,
            "energy_rate": 6
        },
        "21-30": {
            "minAmt": 125,
            "energy_rate": 6.5
        },
        "31-50": {
            "minAmt": 125,
            "energy_rate": 8
        },
        "51-100": {
            "minAmt": 150,
            "energy_rate": 9.5
        },
        "101-250": {
            "minAmt": 200,
            "energy_rate": 9.5
        },
        "250-above": {
            "minAmt": 250,
            "energy_rate": 11
        }
    }
}