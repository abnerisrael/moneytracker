export interface Transaction {
    id: string,
    what: string,
    how_much: number,
    where: string,
    when: string,
    as: 'DEBIT' | 'PIX' | 'CARD' | 'MONEY',
    type: 'input' | 'output'
};
