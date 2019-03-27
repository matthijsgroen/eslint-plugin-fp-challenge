/**
 * @fileoverview Promote currying by only allowing a single argument for functions
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        "Promote currying by only allowing a single argument for functions",
      category: "FP",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    const checkArguments = node => {
      if (node.params.length > 1) {
        context.report({
          node,
          message: "Only use single argument, or use currying"
        });
      }
    };

    return {
      ArrowFunctionExpression: checkArguments,
      FunctionExpression: checkArguments
    };
  }
};
