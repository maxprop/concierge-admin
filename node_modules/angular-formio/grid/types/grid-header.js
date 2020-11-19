/**
 * @fileoverview added by tsickle
 * Generated from: grid/types/grid-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function GridHeader() { }
if (false) {
    /** @type {?|undefined} */
    GridHeader.prototype.component;
    /** @type {?} */
    GridHeader.prototype.key;
    /** @type {?|undefined} */
    GridHeader.prototype.sort;
    /** @type {?} */
    GridHeader.prototype.label;
    /**
     * @param {?} cellValue
     * @param {?=} component
     * @return {?}
     */
    GridHeader.prototype.renderCell = function (cellValue, component) { };
}
/** @enum {string} */
var SortType = {
    ASC: "asc",
    DESC: "desc",
};
export { SortType };
