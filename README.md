# Brainfuck Interpreter

Simple Brainfuck interpreter with 30,000 8-bit cells and standard operations (`+-<>[],.`).

## Install & Run

```bash
git clone https://github.com/yourusername/brainfuck-interpreter
cd brainfuck-interpreter
make
./bf program.bf
```

## Features

- 30,000 memory cells (8-bit, wrapping 0-255)
- Standard Brainfuck commands
- Error handling for unmatched brackets
- Input/output via stdin/stdout

## Example

Hello World:
```brainfuck
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.
```

## Test

```bash
make test
```

## License

MIT
