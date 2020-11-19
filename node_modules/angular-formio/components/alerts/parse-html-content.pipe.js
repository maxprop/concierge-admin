/**
 * @fileoverview added by tsickle
 * Generated from: components/alerts/parse-html-content.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var ParseHtmlContentPipe = /** @class */ (function () {
    function ParseHtmlContentPipe() {
    }
    /*
      Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
      And then render in template.
    */
    /*
        Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
        And then render in template.
      */
    /**
     * @param {?} content
     * @return {?}
     */
    ParseHtmlContentPipe.prototype.transform = /*
        Some messages that are come from formiojs have hex codes. So the main aim of this pipe is transform this messages to html.
        And then render in template.
      */
    /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var parsedContent = new DOMParser().parseFromString(content, 'text/html').body.childNodes[0];
        return parsedContent.textContent;
    };
    ParseHtmlContentPipe.decorators = [
        { type: Pipe, args: [{ name: 'parseHtmlContent', pure: false },] },
    ];
    return ParseHtmlContentPipe;
}());
export { ParseHtmlContentPipe };
