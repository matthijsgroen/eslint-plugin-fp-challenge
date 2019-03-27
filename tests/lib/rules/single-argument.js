/**
 * @fileoverview Promote currying by only allowing a single argument for functions
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/single-argument"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("single-argument", rule, {
  valid: [
    {
      code: "const add = a => b => a + b;",
      parserOptions: { ecmaVersion: 6 }
    }
  ],

  invalid: [
    {
      code: "const add = (a, b) => a + b;",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Only use single argument, or use currying",
          type: "ArrowFunctionExpression"
        }
      ]
    },
    {
      code: "const add = function(a, b) { return  a + b; };",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Only use single argument, or use currying",
          type: "FunctionExpression"
        }
      ]
    }
  ]
});
