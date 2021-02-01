"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateState = exports.useSharedState = void 0;
const state_1 = require("./state");
exports.useSharedState = state_1.SharedState;
exports.useUpdateState = state_1.updateState;
