import arraySemDuplicatas from "./q13";

describe('arraySemDuplicatas', () => {
    test('Deve retornar os elementos sem duplicatas.', () => {
        const array1 = [1, 2, 3, 4];
        const array2 = [4, 6, 7, 2, 2];
        const result = arraySemDuplicatas(array1, array2);
        expect(result).toEqual([1, 2, 3, 4, 6, 7]);
    });
    
    test('Deve retornar os elementos sem duplicatas.', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const result = arraySemDuplicatas(array1, array2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
});