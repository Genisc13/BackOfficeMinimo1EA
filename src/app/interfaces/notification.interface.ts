export class Notification {
    idNotification?: string;
    nameNotification: string;
    numberNotification: number;
    seenNotification: boolean; 
    descriptionNotification: string;


    constructor(idNotification: string, nameNotification: string, numberNotification: number,seenNotification: boolean, descriptionNotification: string) {
        this.idNotification = idNotification;
        this.nameNotification = nameNotification;
        this.numberNotification = numberNotification;
        this.seenNotification = seenNotification; 
        this.descriptionNotification = descriptionNotification;
    }
}