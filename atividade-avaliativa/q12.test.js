import elementosSimilares from "./q12";

describe('elementosSimilares', () => {
    test('Testando com uma saida esperada de 4 e 5.', () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [4, 5, 6, 7, 8];
        const result = elementosSimilares(array1, array2);
        expect(result).toEqual([4, 5]);
});
});
