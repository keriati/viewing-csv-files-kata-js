export class KeyBoardHandler {
    constructor(process) {
        const stdin = process.stdin;
        this.handlers = {};
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.setRawMode(true);
        stdin.on(
            'data',
            this.handleKeyPress.bind(this),
        );
    }

    addHandler(handlers) {
        this.handlers = handlers;
    }

    handleKeyPress(key) {
        if (typeof this.handlers[key] !== 'function') {
            return;
        }

        const handler = this.handlers[key];

        handler();
    }
}
