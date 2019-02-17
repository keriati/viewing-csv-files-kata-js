import { FileReader } from 'src/FileReader';

describe('FileReader', () => {
    it('can be initialized with filesystem', () => {
        const fileSystem = {};
        const fileReader = new FileReader(fileSystem);

        expect(fileReader).toBeDefined();
    });
    it('thorws error when initialised without filesystem', () => {
        expect(() => new FileReader()).toThrowError('FileSystem needed!');
    });
    describe('#readFile()', () => {
        it('returns the content of a file', function () {
            const fileSystem = {
                readFileSync: () => 'content',
                existsSync: () => true,
            };
            let fileReader = new FileReader(fileSystem);

            const fileAsString = fileReader.readFile('fileName');

            expect(fileAsString).toBe('content');
        });
    });
});
