export class CompteBancaire {

    id!: string;
    solde!: number;
    pageactuel!: number;
    totalpages!: number;
    pagesize!: number;
    operationDto!: OperationDto[];



 
    }

    export class OperationDto{
        id!: number;
        date!:Date;
        montant!: number;
        type!: string;
        description!: string;
    }


