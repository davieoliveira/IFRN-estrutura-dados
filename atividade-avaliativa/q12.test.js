import elementosSimilares from "./q12";

describe('elementosSimilares', () => {
    test('Testando com uma saida esperada de 4 e 5 (os unicos que se repetem).', () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [4, 5, 6, 7, 8];
        const result = elementosSimilares(array1, array2);
        expect(result).toEqual([4, 5]);
    });

    test('Testando se em caso de não ter nenhum em comum o programa apresenta algum erro.', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const result = elementosSimilares(array1, array2);
        expect(result).toEqual([]);
    });
});
