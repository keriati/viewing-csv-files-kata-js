import { KeyBoardHandler } from 'src/KeyBoardHandler';

const fakeProcess = {
    stdin: {
        resume: () => {},
        setEncoding: () => {},
        setRawMode: () => {},
        on: () => {}
    }
};

describe('KeyBoardHandler', () => {
    describe('#addHandler()', () => {
        it('sets the handler property on the instance', () => {
            const keyBoardHandler = new KeyBoardHandler(fakeProcess);

            keyBoardHandler.addHandler({
                a: 'a',
            });

            expect(keyBoardHandler.handlers).toEqual({ a: 'a' });
        });
    });
    describe('#handleKeyPress()', () => {
        it('invokes the handler for a give key', () => {
            const keyBoardHandler = new KeyBoardHandler(fakeProcess);
            const keyString = 'a';
            const mockHandler = jest.fn();
            const handlers = {};
            handlers[keyString] = mockHandler;
            keyBoardHandler.addHandler(handlers);

            keyBoardHandler.handleKeyPress(keyString);

            expect(mockHandler.mock.calls.length).toEqual(1);
        });
    });
});
