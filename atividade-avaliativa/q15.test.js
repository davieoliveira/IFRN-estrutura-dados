import parDeSoma from './q15';

describe('parDeSoma', () => {
    test('Deve retornar todos os pares de elementos cuja soma seja igual ao número alvo', () => {
        const array = [2, 2, 3, 1];
        const resultado = parDeSoma(array, 4);
        expect(resultado).toEqual([[2, 2], [2, 2], [3, 1], [1, 3]]);
    });
    test('deve retornar pares com elementos repetidos que somam ao número alvo', () => {
        const array = [1, 1, 2, 2];
        const resultado = parDeSoma(array, 3);
        expect(resultado).toEqual([[1, 2], [1, 2], [1, 2], [1, 2], [2, 1], [2, 1], [2, 1], [2, 1]]);
    });
});