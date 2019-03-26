/**
 * @fileoverview Enforce rules of Functional Programming challenge
 * @author Matthijs Groen
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
// import all rules in lib/configs
module.exports.configs = requireIndex(__dirname + "/configs");
