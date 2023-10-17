export type As = 'DEBIT' | 'PIX' | 'CARD' | 'MONEY' | 'OTHER';

export type Type = 'input' | 'output';

export interface Transaction {
    what: string,
    how_much: number,
    where: string,
    when: string,
    as: As,
    type: Type
};
