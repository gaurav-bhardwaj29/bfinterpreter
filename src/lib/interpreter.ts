// Brainfuck interpreter implementation
export class BrainfuckInterpreter {
  private tape: number[];
  private pointer: number;
  private code: string;
  private codePointer: number;
  private output: string;
  private bracketMap: Map<number, number>;

  constructor(code: string) {
    this.tape = new Array(30000).fill(0);
    this.pointer = 0;
    this.code = code.replace(/[^><+\-.,\[\]]/g, ''); // Remove non-Brainfuck characters
    this.codePointer = 0;
    this.output = '';
    this.bracketMap = this.buildBracketMap();
  }

  private buildBracketMap(): Map<number, number> {
    const map = new Map<number, number>();
    const stack: number[] = [];

    for (let i = 0; i < this.code.length; i++) {
      if (this.code[i] === '[') {
        stack.push(i);
      } else if (this.code[i] === ']') {
        if (stack.length === 0) {
          throw new Error('Unmatched closing bracket at position ' + i);
        }
        const openPos = stack.pop()!;
        map.set(openPos, i);
        map.set(i, openPos);
      }
    }

    if (stack.length > 0) {
      throw new Error('Unmatched opening bracket at position ' + stack[stack.length - 1]);
    }

    return map;
  }

  public execute(): string {
    while (this.codePointer < this.code.length) {
      const command = this.code[this.codePointer];

      switch (command) {
        case '>':
          if (this.pointer >= 29999) throw new Error('Pointer out of bounds');
          this.pointer++;
          break;
        case '<':
          if (this.pointer <= 0) throw new Error('Pointer out of bounds');
          this.pointer--;
          break;
        case '+':
          this.tape[this.pointer] = (this.tape[this.pointer] + 1) % 256;
          break;
        case '-':
          this.tape[this.pointer] = (this.tape[this.pointer] - 1 + 256) % 256;
          break;
        case '.':
          this.output += String.fromCharCode(this.tape[this.pointer]);
          break;
        case '[':
          if (this.tape[this.pointer] === 0) {
            this.codePointer = this.bracketMap.get(this.codePointer)!;
          }
          break;
        case ']':
          if (this.tape[this.pointer] !== 0) {
            this.codePointer = this.bracketMap.get(this.codePointer)!;
          }
          break;
      }

      this.codePointer++;
    }

    return this.output;
  }
}