import elementosMaisRepetido from './q16'; // Ajuste o caminho conforme necessário

describe('elementosMaisRepetido', () => {
    test('Deve retornar o elemento mais frequente em um array', () => {
        const array = [1, 2, 2, 3, 3, 3, 4];
        const resultado = elementosMaisRepetido(array);
        expect(resultado).toBe(3);
    });

    test('Deve lidar com todos os elementos sendo iguais', () => {
        const array = [5, 5, 5, 5];
        const resultado = elementosMaisRepetido(array);
        expect(resultado).toBe(5);
    }); });