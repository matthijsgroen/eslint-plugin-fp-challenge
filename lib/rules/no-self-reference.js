/**
 * @fileoverview No call to self reference
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "No self reference",
      category: "Functional Programming",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    return {
      // give me methods
      "CallExpression:exit": node => {
        const identifier = node.callee.name;
        let parent = node.parent;
        let found = false;
        while (parent && !found) {
          found =
            parent.type === "VariableDeclarator" &&
            parent.id.name === identifier;
          parent = parent.parent;
        }
        if (found) {
          context.report({
            node,
            message: "Not allowed to self reference: {{ identifier }}",
            data: {
              identifier
            }
          });
        }
      }
    };
  }
};
