# ctgplayer
To solve puzzles in Calculator: The Game.

## Install

Install via `npm`:

```shell
$ npm install -g ctgplayer
```

or simply clone this repo via `git clone`.

## Usage

```shell
$ ctgplay (setting)+
```

where `setting` is one of:

| setting         | function                            | number           |
| :-------------- | :---------------------------------- | :--------------- |
| `s=<start>`     | to give the **start number**        | 1                |
| `e=<end>`       | to give the **end number** (goal)   | 1                |
| `m=<max_steps>` | to give the **max number of steps** | 1                |
| `o=<operation>` | to give *one* of the **operations** | 1 or more than 1 |

### Operation Notation

- calculating
    - `+<x>`
    - `-<x>`
    - `*<x>` (need to be escaped in shell)
    - `/<x>`
- `<x>`: add number at the end
- `rev`: reverse
- `<<`: <<, shift (need to be escaped in shell)
- `x^2`: $x^2$, square
- `<pat>=><aft>`: pat=>aft, replace (need to be escaped in shell)
- `+/-`: +/-, positive<=>negative

When escaping an operation in shell, put the `o=<operation>` part in a pair of quotation marks:

```shell
'o=12=>34'
```

## Example

### Level 72

Level 72 in Calculator: The Game:

```shell
$ ctgplay s=0 e=28 m=7 o=+6 o=-3 o=rev 'o=<<'
```

Output:

```shell
[
  '+6', '+6',
  '<<', '+6',
  '+6', 'rev',
  '-3'
]
```

which means

```flow
s=>start: 0
o1=>operation: +6
o2=>operation: +6
o3=>operation: <<
o4=>operation: +6
o5=>operation: +6
o6=>operation: rev
o7=>operation: -3
e=>end: 28

s(right)->o1(right)->o2(right)->o3(right)->o4(right)->o5(right)->o6(right)->o7(right)->e
```

### Level 52

Level 52 in Calculator: The Game:

```shell
$ ctgplay s=25 e=4 m=5 o=-4 'o=*-4' o=/3 o=/8 o=+/-
```

Output:

```shell
[ '-4', '/3', '-4', '-4', '*-4' ]
```

### Level 36

Level 36 in Calculator: The Game:

```shell
$ ctgplay s=0 e=-85 m=4 o=+6 o=5 o=-7
```

Output:

```shell
[ '+6', '-7', '-7', '5' ]
```

### Level 29

Level 29 in Calculator: The Game:

```shell
$ ctgplay s=0 e=93 m=4 o=+6 'o=*7' 'o=6=>9'
```

Output:

```shell
[ '+6', '6=>9', '*7', '6=>9' ]
```

