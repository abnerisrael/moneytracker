let data = [ 
    {
        "id": "1",
        "what":"Recarga Celular",
        "how_much":40,
        "where":"Deposito Araújo",
        "when":"2023-08-01 12:00:00.000",
        "as":"PIX"
    }, 
    {
        "id": "2",
        "what":"Aluguel",
        "how_much":700.59,
        "where":"Nubank",
        "when":"2023-08-01 13:00:00.000",
        "as":"DEBIT"
    } 
];

export function list(): Array<any> {
    return data;
}