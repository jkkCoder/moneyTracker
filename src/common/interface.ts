export interface TransactionInterface {
    id : number;
    date: string;
    category: string;
    type: string;
    title: string;
    description: string;
    amount: number;
    year: number;
    month: number;
    day: number;
}

export interface ExpenseResponse {
    data?: TransactionInterface[];
    success: boolean;
}