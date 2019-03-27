/**
 * @fileoverview Disallow usage of functions
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-use-function"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-use-function", rule, {
  valid: [
    {
      code: "const identity = x => x;",
      parserOptions: { ecmaVersion: 6 }
    }
  ],

  invalid: [
    {
      code: "const identity = function(x) { return x; };",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Please use lambda notation",
          type: "FunctionExpression"
        }
      ]
    }
  ]
});
