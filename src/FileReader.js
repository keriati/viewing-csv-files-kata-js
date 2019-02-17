export class FileReader {
    constructor(fileSystem) {
        if (!fileSystem) {
            throw new Error('FileSystem needed!');
        }
        this.fs = fileSystem;
    }

    readFile(fileName) {
        this.throwWhenNoFile(fileName);

        return this.fs.readFileSync(fileName, {encoding: 'UTF8'});
    }

    throwWhenNoFile(fileName) {
        if (!this.fs.existsSync(fileName)) {
            throw new Error('File does not exists!');
        }
    }
}
