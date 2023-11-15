export type As = 'DEBIT' | 'PIX' | 'CARD' | 'MONEY' | 'OTHER';

export type Type = 'input' | 'output';

export interface iTransaction {
    _id: string;
    what: string;
    how_much: number;
    where: string;
    when: Date;
    as: As;
    type: Type;
    created_at: Date;
};

export type TransactionForm = {
    what: string;
    how_much: string;
    when: string;
    where: string;
    as: string;
    type: string
}
