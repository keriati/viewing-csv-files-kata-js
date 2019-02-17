import { ArgumentParser } from 'src/ArgumentParser';

describe('ArgumentParser', () => {
    describe('getFileName', () => {
        it('returns the file name from the first application argument', () => {
            const myArguments = ['a', 'b', 'filename'];
            const parser = new ArgumentParser(myArguments);

            const actual = parser.getFileName();

            expect(actual).toBe('filename');
        });
    });
    describe('getPageSize', () => {
        it('returns the page size from second application argument', () => {
            const myArguments = ['a', 'b', 'c', '40'];
            const parser = new ArgumentParser(myArguments);

            const actual = parser.getPageSize();

            expect(actual).toBe('40');
        });
    });
});
