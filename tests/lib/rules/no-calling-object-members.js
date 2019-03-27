/**
 * @fileoverview Disallow object member calls, only use plain functions
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-calling-object-members"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-calling-object-members", rule, {
  valid: [
    {
      code: "map(x => x + 1)([1, 2, 3]);",
      parserOptions: { ecmaVersion: 6 }
    },
    {
      code: 'console.log("hello");',
      parserOptions: { ecmaVersion: 6 },
      options: ["never"]
    },
    {
      code: 'console.log("hello");',
      parserOptions: { ecmaVersion: 6 },
      options: ["always", { ignore: ["console.log"] }]
    },
    {
      code: "[1, 2, 3].map(x => x + 1);",
      parserOptions: { ecmaVersion: 6 },
      options: ["always", { ignore: [".map"] }]
    }
  ],

  invalid: [
    {
      code: "[1, 2, 3].map(x => x + 1);",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Not allowed to call object members",
          type: "CallExpression"
        }
      ]
    },
    {
      code: 'reporter.log(12, "status");',
      parserOptions: { ecmaVersion: 6 },
      options: ["never", { except: ["reporter.log"] }],
      errors: [
        {
          message: "Not allowed to call object members",
          type: "CallExpression"
        }
      ]
    },
    {
      code: 'reporter.log(12, "status");',
      parserOptions: { ecmaVersion: 6 },
      options: ["always", { ignore: ["console.log"] }],
      errors: [
        {
          message: "Not allowed to call object members",
          type: "CallExpression"
        }
      ]
    }
  ]
});
