# eslint-plugin-fp-challenge

Enforce rules of Functional Programming challenge

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fp-challenge`:

```
$ npm install eslint-plugin-fp-challenge --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `eslint-plugin-fp-challenge` globally.

## Usage

Add `fp-challenge` to the plugins section of your `.eslintrc` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["fp-challenge"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "fp-challenge/no-self-reference": "error",
    "fp-challenge/no-calling-object-members": [
      "error",
      { "except": ["console.log"] }
    ],
    "fp-challenge/no-use-function": "error",
    "fp-challenge/no-mutable-state": "error",
    "fp-challenge/single-argument": "error"
  }
}
```

## Supported Rules

- `no-self-reference` prevents recursion to itself by name.
- `no-calling-object-members` prevents usage of `.map`, `.sort`, `.reduce`. To
  force using plain functions instead (and prevent side-effects)
- `no-use-function` promote using lambda's since they are more readable when
  using a single statement and a single argument.
- `no-mutable-state` prevent assigning new values.
- `single-argument` promote currying instead of using multiple arguments.

## Use the whole challenge configuration

```json
{
  "plugins": ["fp-challenge"],
  "extends": ["plugin:fp-challenge/recommended"]
}
```
