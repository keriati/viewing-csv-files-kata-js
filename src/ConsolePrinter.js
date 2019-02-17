export class ConsolePrinter {
    print(printable) {
        process.stdout.write('\x1B[2J\x1B[0f');
        console.log(printable);
    }

}
