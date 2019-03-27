"use strict";

module.exports = {
  globals: {
    Symbol: "readonly",
    Array: "readonly",
    String: "readonly",
    Number: "readonly"
  },
  rules: {
    "no-use-before-define": ["error", { functions: true, classes: true }],
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-param-reassign": "error",
    "max-statements": ["error", 1, { ignoreTopLevelFunctions: false }],
    complexity: ["error", { max: 3 }],
    "arrow-body-style": ["error", "as-needed"],
    "fp-challenge/no-self-reference": "error",
    "fp-challenge/no-calling-object-members": "error",
    "fp-challenge/no-mutable-state": "error",
    "fp-challenge/no-use-function": "error",
    "fp-challenge/single-argument": "error"
  }
};
