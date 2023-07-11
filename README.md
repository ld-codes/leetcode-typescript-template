# Leetcode Typescript Template

## About ℹ️

A template to use for Leetcode Typescript grinding.

## What's included 📦

**For Typescript**

- [Google's Typescript style guide](https://github.com/google/gts)
- ts-node with swc for 10x speed
- [@swc/jest](https://swc.rs/docs/usage/jest) for 10x speed

**For Leetcode**

[Official doc for JavaScript/Typescript runtime environment](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-)

- `@datastructures-js/priority-queue` library installed with typings!
- `@datastructures-js/queue` library installed
- `lodash.js` installed
- Script to generate a custom test case and copy it to clipboard

**For Developer Experience**

- `.editorconfig` and prettier config setup
- eslint auto fix and auto import organizing
- Debugging in vscode

## Usage 📝

**Development**

1. Install dependencies

```console
$ npm i
```

2. Edit `src/index.ts`

3. Run

```console
$ npm run start
```

**Test**

```console
$ npm run test
```

**Test Generation**

```console
$ npm run testgen
```

**Debug**

1. Click "Run and Debug" menu in vscode
2. Select "Debug Jest" option, or "Debug Jest Win" if you're a windows user
3. Click "Start Debugging" button or hit "F5" key
