/**
 * @fileoverview Disallow assignments
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-mutable-state"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-mutable-state", rule, {
  valid: [
    {
      code: 'const a = "foo";',
      parserOptions: { ecmaVersion: 6 }
    }
  ],

  invalid: [
    {
      code: 'let a = "foo";',
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "No mutable state allowed. Please declare a const",
          type: "VariableDeclaration"
        }
      ]
    },
    {
      code: 'const a = { name: "foo" }; a.name = "bar";',
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Values cannot be re-assigned",
          type: "AssignmentExpression"
        }
      ]
    },
    {
      code: "const a = (x = 5) => x;",
      parserOptions: { ecmaVersion: 6 },
      errors: [
        {
          message: "Values cannot be re-assigned",
          type: "AssignmentPattern"
        }
      ]
    }
  ]
});
