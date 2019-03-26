/**
 * @fileoverview No call to self reference
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-self-reference"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("fp-challenge", rule, {
  valid: [
    {
      code: "const Y = f => (x => x(x))(y => f(x => y(y)(x)));",
      parserOptions: { ecmaVersion: 6 }
    }
  ],

  invalid: [
    {
      code: "const fib = n => n <= 1 ? 1 : fib(n - 1) + fib(n - 2);",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Not allowed to self reference: fib",
          type: "CallExpression"
        },
        {
          message: "Not allowed to self reference: fib",
          type: "CallExpression"
        }
      ]
    }
  ]
});
