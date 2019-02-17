export class CSVFile {
    constructor(csv = '') {
        const csvLines = csv.split('\n');
        this.parseHeaders(csvLines);
        this.parseContent(csvLines);
    }

    parseHeaders(csvLines) {
        this.headers = csvLines[0].split(';');
    }

    parseContent(csvLines) {
        const content = csvLines.slice(1);

        this.content = content.map(this.parseContentLine);
    }

    parseContentLine(line) {
        return line.split(';');
    }

    getHeader() {
        return this.headers;
    }

    getContent(fromIndex, count) {
        const start = Number.parseInt(fromIndex) - 1;
        const end = (Number.parseInt(fromIndex) - 1) + Number.parseInt(count);

        return this.content.slice(start, end);
    }

    getContentLength() {
        return this.content.length;
    }
}
