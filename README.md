# Brainfuck Interpreter
![Socialify Image](https://socialify.git.ci/gaurav-bhardwaj29/bfinterpreter/image?custom_description=execute+esoteric+code&description=1&font=Source+Code+Pro&language=1&name=1&pattern=Signal&stargazers=1&theme=Light)

Simple Brainfuck interpreter with 30,000 8-bit cells and standard operations (`+-<>[],.`).

## Install & Run

```bash
git clone https://github.com/gaurav-bhardwaj29/bfinterpreter
cd bfinterpreter
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



```

## License

MIT
