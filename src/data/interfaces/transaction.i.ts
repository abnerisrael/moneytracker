export type As = 'DEBIT' | 'PIX' | 'CARD' | 'MONEY' | 'OTHER';

export type Type = 'input' | 'output';

export interface Transaction {
    _id: string;
    what: string,
    how_much: number,
    where: string,
    when: string,
    as: As,
    type: Type
    created_at: Date;
};
