import { Appareil } from "../models/Appareil";

export class AppareilsService {
    appareilsList: Appareil[] = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 9 litres',
                'Temps de lavage: 2 heures',
                'Consommation: 173kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'Télévision',
            description: [
                'Dimension: 40 pouces',
                'Consommation: 22kWh/an'
            ],
            isOn: true,
            startTime: '',
            endTime: ''
        },
        {
            name: 'Ordinateur',
            description: [
                'Marque: fait maison',
                'Consommation: 500kWh/an'
            ],
            isOn: false,
            startTime: '',
            endTime: ''
        }
    ];

    addAppareil (appareil: Appareil) {
        this.appareilsList.push(appareil);
    }
}