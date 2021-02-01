"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedState = exports.updateState = exports.state = void 0;
const setInitialState = {
    actualSearch: null,
    actualPartnerInSearch: null
};
exports.state = setInitialState;
const updateState = (data) => {
    exports.state = data;
};
exports.updateState = updateState;
const SharedState = () => {
    return Object.assign({}, exports.state);
};
exports.SharedState = SharedState;
