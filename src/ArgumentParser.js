export class ArgumentParser {
    constructor(args) {
        this.args = args;
    }

    getFileName() {
        return this.args[2];
    }

    getPageSize() {
        return this.args[3];
    }
}
