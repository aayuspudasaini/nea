import { customerTariff } from "@/constants/customer-tariff";

interface BillProps {
    consumedUnits: number;
    ampere: string;
}

export default function NeaElectricityBillAmountCalculator({
    consumedUnits, ampere
}: BillProps) {

    let data = customerTariff[ampere]

    if (data) {
        if (consumedUnits >= 0 && consumedUnits <= 20) {
            const rangeData = data["0-20"]
            const initialEnergyRate = rangeData.initial_energy_rate as number
            return {
                energyCharge: consumedUnits * initialEnergyRate,
                serviceCharge: data["0-20"].minAmt
            }
        } else if (consumedUnits >= 21 && consumedUnits <= 30) {
            return {
                energyCharge:
                    20 * data["0-20"].energy_rate +
                    (consumedUnits - 20) * data["21-30"].energy_rate,
                serviceCharge: data["21-30"].minAmt
            };
        } else if (consumedUnits >= 31 && consumedUnits <= 50) {
            return {
                energyCharge: 20 * data["0-20"].energy_rate +
                    10 * data["21-30"].energy_rate +
                    (consumedUnits - 20 - 10) * data["31-50"].energy_rate,
                serviceCharge: data["31-50"].minAmt
            };
        } else if (consumedUnits >= 51 && consumedUnits <= 100) {
            return {
                energyCharge: 20 * data["0-20"].energy_rate +
                    10 * data["21-30"].energy_rate +
                    20 * data["31-50"].energy_rate +
                    (consumedUnits - 20 - 10 - 20) * data["51-100"].energy_rate,
                serviceCharge: data["51-100"].minAmt
            };
        } else if (consumedUnits >= 101 && consumedUnits <= 250) {
            return {
                energyCharge: 20 * data["0-20"].energy_rate +
                    10 * data["21-30"].energy_rate +
                    20 * data["31-50"].energy_rate +
                    50 * data["51-100"].energy_rate +
                    (consumedUnits - 20 - 10 - 20 - 50) * data["51-100"].energy_rate,
                serviceCharge: data["101-250"].minAmt
            };
        } else if (consumedUnits >= 250 && consumedUnits <= 3000) {
            return {
                energyCharge:
                    20 * data["0-20"].energy_rate +
                    10 * data["21-30"].energy_rate +
                    20 * data["31-50"].energy_rate +
                    50 * data["51-100"].energy_rate +
                    150 * data["101-250"].energy_rate +
                    (consumedUnits - 20 - 10 - 20 - 50 - 150) * data["250-above"].energy_rate,
                serviceCharge: data["250-above"].minAmt,
            };
        } else {
            return {
                energyCharge: 32495,
                serviceCharge: 0
            };
        }
    }
}
