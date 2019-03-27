/**
 * @fileoverview Disallow usage of functions
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Disallow usage of functions",
      category: "FP",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: context => ({
    FunctionExpression: node =>
      context.report({
        node,
        message: "Please use lambda notation"
      })
  })
};
