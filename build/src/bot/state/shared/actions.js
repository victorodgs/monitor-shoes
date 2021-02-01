"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("./state");
exports.default = () => {
    return { updateState: state_1.updateState, SharedState: state_1.SharedState, state: state_1.state };
};
