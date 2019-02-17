import { Page } from 'src/Page';

describe('Page', () => {
    it('sets the columnWidths property when initialized ', () => {
        const page = new Page(
            ['h1', 'h2', 'h3'],
            [
                ['c11','c22', 'c33'],
                ['c21','c22a', 'c23aa']
            ]
        );

        expect(page.columnWidths).toEqual([3, 4, 5]);
    });
});
