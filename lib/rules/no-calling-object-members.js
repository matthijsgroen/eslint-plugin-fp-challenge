/**
 * @fileoverview Disallow object member calls, only use plain functions
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Disallow object member calls, only use plain functions",
      category: "FP",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      { enum: ["never", "always"] },
      {
        type: "object",
        properties: {
          ignore: {
            type: "array",
            items: {
              type: "string"
            },
            uniqueItems: true
          },
          except: {
            type: "array",
            items: {
              type: "string"
            },
            uniqueItems: true
          }
        },
        additionalProperties: false
      }
    ]
  },

  create: function(context) {
    const alwaysMode = context.options[0] !== "never";
    const blockList = ((context.options[1] || {}).except || []).map(e =>
      e.split(".")
    );
    const safeList = ((context.options[1] || {}).ignore || []).map(e =>
      e.split(".")
    );

    const isInvalid = (objectName, propName) => ([obj, prop]) =>
      obj === "" ? prop !== propName : objectName !== obj || propName !== prop;

    return {
      CallExpression: node => {
        if (node.callee.type === "MemberExpression") {
          const objectName = node.callee.object.name;
          const propName = node.callee.property.name;

          const failure = alwaysMode
            ? safeList.every(isInvalid(objectName, propName))
            : !blockList.every(isInvalid(objectName, propName));

          if (failure) {
            context.report({
              node,
              message: "Not allowed to call object members"
            });
          }
        }
      }
    };
  }
};
