/**
 * @fileoverview Disallow assignments
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Disallow assignments",
      category: "FP",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    const reportAssignment = node =>
      context.report({ node, message: "Values cannot be re-assigned" });

    return {
      VariableDeclaration: node => {
        if (node.kind === "let" || node.kind === "var") {
          context.report({
            node,
            message: "No mutable state allowed. Please declare a const"
          });
        }
      },
      AssignmentPattern: reportAssignment,
      AssignmentExpression: reportAssignment
    };
  }
};
