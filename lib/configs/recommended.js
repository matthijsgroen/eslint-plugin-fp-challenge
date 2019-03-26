"use strict";

module.exports = {
  "no-use-before-define": ["error", { functions: true, classes: true }],
  "no-eval": ["error"],
  "no-implied-eval": ["error"],
  "no-param-reassign": ["error"],
  "max-statements": ["error", 1, { ignoreTopLevelFunctions: false }],
  complexity: ["error", { max: 3 }],
  "arrow-body-style": ["error", "as-needed"],
  "fp-challenge/no-self-reference": ["error"],
  "no-restricted-syntax": [
    "error",
    {
      selector: "FunctionExpression",
      message: "Please use Lambda notation () =>"
    },
    {
      selector: "SequenceExpression",
      message: "Only 1 statement is allowed"
    },
    {
      selector: "ArrowFunctionExpression[params.length > 1]",
      message: "Only 1 argument allowed. Please use currying"
    },
    {
      selector: "IfStatement",
      message: "Try using ternary operator: true ? 1 : 2"
    },
    {
      selector:
        "CallExpression[callee.type=MemberExpression][callee.property.name!='log']",
      message: "Not allowed to call object members, except console.log()"
    },
    {
      selector: "AssignmentPattern,AssignmentExpression",
      message: "State must be immutable"
    },
    {
      selector: "VariableDeclaration[kind=let],VariableDeclaration[kind=var]",
      message: "Only use constants"
    }
  ]
};
