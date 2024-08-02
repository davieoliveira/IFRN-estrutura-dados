import segundoMaiorNumero from './q14'; 

describe('segundoMaiorNumero', () => {
    test('deve retornar o segundo maior número no array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 2000, 2001];
        const resultado = segundoMaiorNumero(array);
        expect(resultado).toBe(2000);
    });

    test('Deve tentar encontrar o segundo maior numero em um array com números negativos', () => {
        const array = [-5, -4, -3, -2, -1];
        const resultado = segundoMaiorNumero(array);
        expect(resultado).toBe(-2);
    });
});