import parDeSoma from './q15';

describe('parDeSoma', () => {
    test('Deve retornar todos os pares de elementos cuja soma seja igual ao número alvo', () => {
        const array = [2, 2, 3, 1];
        const resultado = parDeSoma(array, 4);
        expect(resultado).toEqual([[2, 2], [3, 1]]);
    });
    test('Deve retornar pares com elementos repetidos que somam ao número alvo caso todos sejam os mesmos números', () => {
        const array = [5, 5, 5, 5, 5, 5];
        const resultado = parDeSoma(array, 10);
        expect(resultado).toEqual([[5, 5]]);
    });
});