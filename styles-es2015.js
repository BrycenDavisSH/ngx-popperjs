(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/easyPhp/eds-www/git/ngx-popperjs/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!C:/easyPhp/eds-www/git/ngx-popperjs/node_modules/postcss-loader/src??embedded!C:/easyPhp/eds-www/git/ngx-popperjs/node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "code[class*=language-], pre[class*=language-] {\n  font-family: Consolas, Menlo, Monaco, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Courier New, Courier, monospace;\n  line-height: 1.5;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\n\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6; }\n\ncode[class*=language-]::selection, code[class*=language-] ::selection, pre[class*=language-]::selection, pre[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6; }\n\npre[class*=language-] {\n  padding: 10px 15px;\n  margin: 1em -15px;\n  overflow: auto;\n  background: #281e36;\n  color: #ffe69d;\n  font-size: 14px;\n  border-radius: 0; }\n\n@media (min-width: 600px) {\n  pre[class*=language-] {\n    font-size: 16px;\n    border: 1px solid rgba(255, 255, 255, 0.05);\n    margin-left: 0;\n    margin-right: 0;\n    border-radius: 10px; } }\n\n:not(pre) > code[class*=language-] {\n  color: #ff6b81;\n  font-weight: 700;\n  white-space: pre-wrap; }\n\n:not(pre) > code[class*=language-]::-moz-selection, :not(pre) > code[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff; }\n\n:not(pre) > code[class*=language-]::selection, :not(pre) > code[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff; }\n\n.token-line {\n  min-height: 1em; }\n\n.token.cdata, .token.comment, .token.doctype, .token.prolog {\n  color: #95b2db; }\n\n.token.keyword, .token.punctuation {\n  color: #4edee5; }\n\n.token.namespace {\n  opacity: .7; }\n\n.token.boolean, .token.number, .token.operator, .token.tag {\n  color: #ed655e; }\n\n.token.function, .token.property {\n  color: #b886fd; }\n\n.token.atrule-id, .token.selector, .token.tag-id {\n  color: #f3ebff; }\n\n.token.attr-name, code.language-javascript {\n  color: #d6b9fe; }\n\n.language-css .token.string, .language-scss .token.string, .style .token.string, .token.atrule, .token.attr-value, .token.control, .token.directive, .token.entity, .token.placeholder, .token.regex, .token.statement, .token.string, .token.unit, .token.url, .token.variable, code.language-css, code.language-scss {\n  color: #ffb6b3; }\n\n.token.dom {\n  color: #a5c8ff; }\n\n.token.deleted {\n  text-decoration: line-through; }\n\n.token.inserted {\n  border-bottom: 1px dotted #f3ebff;\n  text-decoration: none; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.bold, .token.important {\n  font-weight: 700; }\n\n.token.important {\n  color: #d6b9fe; }\n\n.token.entity {\n  cursor: help; }\n\npre > code.highlight {\n  outline: .4em solid #aa75f5;\n  outline-offset: .4em; }\n\n.line-numbers .line-numbers-rows {\n  border-right-color: #372f42; }\n\n.line-numbers-rows > span:before {\n  color: #372f42; }\n\n.line-highlight {\n  background: rgba(237, 101, 94, 0.2);\n  background: linear-gradient(90deg, rgba(237, 101, 94, 0.2) 70%, rgba(237, 101, 94, 0)); }\n\n.gatsby-highlight-code-line {\n  background-color: #1c1425;\n  display: block;\n  margin-right: -1em;\n  margin-left: -1em;\n  padding-right: 1em;\n  padding-left: .75em;\n  border-left: .25em solid #ff6b81; }\n\n/* You can add global scss to this file, and also import other style files */\n\n@font-face {\n  font-family: Luckiest Guy;\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: local(\"Luckiest Guy Regular\"), local(\"LuckiestGuy-Regular\"), url(/assets/fonts/luckiest-guy-latin-400.woff2) format(\"woff2\"), url(/assets/fonts/luckiest-guy-latin-400.woff) format(\"woff\"); }\n\nbody {\n  line-height: 1.6;\n  background: #2f263c;\n  color: #f4e0f1;\n  font-family: -apple-system, Helvetica Neue, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, sans-serif;\n  margin: 0;\n  box-sizing: border-box; }\n\nbody *, body :after, body :before {\n    box-sizing: inherit; }\n\nbody h1,\n  body h2,\n  body h3,\n  body h4,\n  body h5,\n  body h6 {\n    margin: 8px 0; }\n\nbody p {\n    margin: 0; }\n\nbody a.pop-link-yellow {\n    color: #ffe69d;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    padding-bottom: 1px;\n    border-bottom: 2px solid rgba(255, 228, 148, 0.25);\n    transition: border-bottom-color 0.15s ease-in-out; }\n\nbody a.pop-link-yellow:hover {\n      border-bottom: 2px solid #ffe494; }\n\nbody ul {\n    padding-left: 20px;\n    margin: 0; }\n\nbody ul.pop-list {\n      list-style: none; }\n\nbody ul.pop-list > li > svg {\n        display: inline-block;\n        top: 6px;\n        left: 2px;\n        margin-right: 6px;\n        position: relative;\n        color: #ff6b81;\n        height: 25px;\n        margin-left: -30px; }\n\nbody .ngxp__container {\n    background: white;\n    color: #642f45;\n    border: 0;\n    max-width: 250px;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);\n    z-index: 999;\n    font-family: 'Roboto', sans-serif; }\n\nbody .ngxp__container > .ngxp__arrow:before {\n      background: #FFF; }\n\nbody [pop-theming] div.ngxp__container {\n    background: #777;\n    color: #fff1e0;\n    border: 0;\n    max-width: 250px;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);\n    z-index: 999; }\n\nbody [pop-theming] div.ngxp__container > .ngxp__arrow:before {\n      background-color: #777; }\n\nbody .pop-title-light {\n    font-family: 'Luckiest Guy', sans-serif;\n    -webkit-letter-spacing: 0.5px;\n    -moz-letter-spacing: 0.5px;\n    -ms-letter-spacing: 0.5px;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    font-size: 30px;\n    -webkit-font-smoothing: antialiased;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    line-height: 1.1;\n    color: #f4e0f1; }\n\nbody .pop-button-white {\n    display: inline-block;\n    background: white;\n    padding: 10px 16px;\n    border-radius: 4px;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    font-size: 16px;\n    font-weight: 700;\n    color: #c83b50;\n    box-shadow: 0 8px 16px -4px rgba(200, 59, 80, 0.5);\n    transition: all 0.2s ease-in-out;\n    text-transform: uppercase;\n    margin: 5px; }\n\nbody .pop-button-white > svg {\n      vertical-align: -7px;\n      margin-right: 5px; }\n\nbody .pop-text-center {\n    text-align: center; }\n\nbody .pop-text-bold {\n    font-weight: bold; }\n\nbody .pop-lucky-font {\n    font-family: 'Luckiest Guy', sans-serif; }\n\nbody .pop-color-primary {\n    color: #c83b50; }\n\nbody .pop-code-box {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background: #642f45;\n    border-radius: 4px;\n    color: #ffd3f8;\n    font-family: Menlo, SFMono-Regular, Consolas, Liberation Mono, monospace;\n    font-size: 14px;\n    overflow: hidden;\n    font-weight: normal;\n    margin: 5px;\n    max-width: 100%;\n    overflow-x: auto; }\n\nbody .pop-code-box > div {\n      padding: 10px 15px;\n      white-space: nowrap;\n      display: flex;\n      background: #642f45;\n      border-radius: 4px;\n      color: #ffd3f8;\n      font-family: Menlo, SFMono-Regular, Consolas, Liberation Mono, monospace;\n      font-size: 14px;\n      overflow: hidden;\n      font-weight: normal;\n      margin: 5px;\n      max-width: 100%;\n      overflow-x: auto; }\n\nbody .pop-code-box > div:first-child {\n        display: flex;\n        -webkit-align-items: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        background: rgba(0, 0, 0, 0.25);\n        text-align: center;\n        padding: 0 15px;\n        color: white; }\n\nbody .pop-code-box .pop-code-box-icon {\n      max-width: 50px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wb3BwZXJqcy1yZXBvL3NyYy9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtcG9wcGVyanMvcHJvamVjdHNcXG5neC1wb3BwZXJqcy1yZXBvXFxzcmNcXHNjc3NcXGNvZGUtaGlnaGxpZ2h0LnNjc3MiLCJwcm9qZWN0cy9uZ3gtcG9wcGVyanMtcmVwby9zcmMvQzpcXGVhc3lQaHBcXGVkcy13d3dcXGdpdFxcbmd4LXBvcHBlcmpzL3Byb2plY3RzXFxuZ3gtcG9wcGVyanMtcmVwb1xcc3JjXFxzdHlsZXMuc2NzcyIsInByb2plY3RzL25neC1wb3BwZXJqcy1yZXBvL3NyYy9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtcG9wcGVyanMvcHJvamVjdHNcXG5neC1wb3BwZXJqcy1yZXBvXFxzcmNcXHNjc3NcXHZhcnMuc2NzcyIsInByb2plY3RzL25neC1wb3BwZXJqcy1yZXBvL3NyYy9DOlxcZWFzeVBocFxcZWRzLXd3d1xcZ2l0XFxuZ3gtcG9wcGVyanMvcHJvamVjdHNcXG5neC1wb3BwZXJqcy1yZXBvXFxzcmNcXHNjc3NcXHBvcHBlci10aGVtZS5zY3NzIiwicHJvamVjdHMvbmd4LXBvcHBlcmpzLXJlcG8vc3JjL0M6XFxlYXN5UGhwXFxlZHMtd3d3XFxnaXRcXG5neC1wb3BwZXJqcy9wcm9qZWN0c1xcbmd4LXBvcHBlcmpzXFxzcmNcXGxpYlxcc2Nzc1xcdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNOQUFzTjtFQUN0TixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFDRixFQUFBOztBQUhBO0VBQ0UsaUJBQWlCO0VB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Y3NzIiwic291cmNlc0NvbnRlbnQiOlsiY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSwgcHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNZW5sbywgTW9uYWNvLCBBbmRhbGUgTW9ubyBXVCwgQW5kYWxlIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBMdWNpZGEgU2FucyBUeXBld3JpdGVyLCBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIExpYmVyYXRpb24gTW9ubywgTmltYnVzIE1vbm8gTCwgQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIC1vLXRhYi1zaXplOiA0O1xuICB0YWItc2l6ZTogNDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBub25lO1xuICAtbXMtaHlwaGVuczogbm9uZTtcbiAgaHlwaGVuczogbm9uZVxufVxuXG5jb2RlW2NsYXNzKj1sYW5ndWFnZS1dOjpzZWxlY3Rpb24sIGNvZGVbY2xhc3MqPWxhbmd1YWdlLV0gOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXTo6c2VsZWN0aW9uLCBwcmVbY2xhc3MqPWxhbmd1YWdlLV0gOjpzZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogIzhmNTFlNlxufVxuXG5wcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbjogMWVtIC0xNXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogIzI4MWUzNjtcbiAgY29sb3I6ICNmZmU2OWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgcHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMTAwJSwgLjA1KTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxuICB9XG59XG5cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPWxhbmd1YWdlLV0ge1xuICBjb2xvcjogI2ZmNmI4MTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwXG59XG5cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPWxhbmd1YWdlLV06OnNlbGVjdGlvbiwgOm5vdChwcmUpID4gY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSA6OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjOGY1MWU2O1xuICBjb2xvcjogI2ZmZlxufVxuXG4udG9rZW4tbGluZSB7XG4gIG1pbi1oZWlnaHQ6IDFlbVxufVxuXG4udG9rZW4uY2RhdGEsIC50b2tlbi5jb21tZW50LCAudG9rZW4uZG9jdHlwZSwgLnRva2VuLnByb2xvZyB7XG4gIGNvbG9yOiAjOTViMmRiXG59XG5cbi50b2tlbi5rZXl3b3JkLCAudG9rZW4ucHVuY3R1YXRpb24ge1xuICBjb2xvcjogIzRlZGVlNVxufVxuXG4udG9rZW4ubmFtZXNwYWNlIHtcbiAgb3BhY2l0eTogLjdcbn1cblxuLnRva2VuLmJvb2xlYW4sIC50b2tlbi5udW1iZXIsIC50b2tlbi5vcGVyYXRvciwgLnRva2VuLnRhZyB7XG4gIGNvbG9yOiAjZWQ2NTVlXG59XG5cbi50b2tlbi5mdW5jdGlvbiwgLnRva2VuLnByb3BlcnR5IHtcbiAgY29sb3I6ICNiODg2ZmRcbn1cblxuLnRva2VuLmF0cnVsZS1pZCwgLnRva2VuLnNlbGVjdG9yLCAudG9rZW4udGFnLWlkIHtcbiAgY29sb3I6ICNmM2ViZmZcbn1cblxuLnRva2VuLmF0dHItbmFtZSwgY29kZS5sYW5ndWFnZS1qYXZhc2NyaXB0IHtcbiAgY29sb3I6ICNkNmI5ZmVcbn1cblxuLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLCAubGFuZ3VhZ2Utc2NzcyAudG9rZW4uc3RyaW5nLCAuc3R5bGUgLnRva2VuLnN0cmluZywgLnRva2VuLmF0cnVsZSwgLnRva2VuLmF0dHItdmFsdWUsIC50b2tlbi5jb250cm9sLCAudG9rZW4uZGlyZWN0aXZlLCAudG9rZW4uZW50aXR5LCAudG9rZW4ucGxhY2Vob2xkZXIsIC50b2tlbi5yZWdleCwgLnRva2VuLnN0YXRlbWVudCwgLnRva2VuLnN0cmluZywgLnRva2VuLnVuaXQsIC50b2tlbi51cmwsIC50b2tlbi52YXJpYWJsZSwgY29kZS5sYW5ndWFnZS1jc3MsIGNvZGUubGFuZ3VhZ2Utc2NzcyB7XG4gIGNvbG9yOiAjZmZiNmIzXG59XG5cbi50b2tlbi5kb20ge1xuICBjb2xvcjogI2E1YzhmZlxufVxuXG4udG9rZW4uZGVsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXG59XG5cbi50b2tlbi5pbnNlcnRlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2YzZWJmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG59XG5cbi50b2tlbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWNcbn1cblxuLnRva2VuLmJvbGQsIC50b2tlbi5pbXBvcnRhbnQge1xuICBmb250LXdlaWdodDogNzAwXG59XG5cbi50b2tlbi5pbXBvcnRhbnQge1xuICBjb2xvcjogI2Q2YjlmZVxufVxuXG4udG9rZW4uZW50aXR5IHtcbiAgY3Vyc29yOiBoZWxwXG59XG5cbnByZSA+IGNvZGUuaGlnaGxpZ2h0IHtcbiAgb3V0bGluZTogLjRlbSBzb2xpZCAjYWE3NWY1O1xuICBvdXRsaW5lLW9mZnNldDogLjRlbVxufVxuXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzM3MmY0MlxufVxuXG4ubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XG4gIGNvbG9yOiAjMzcyZjQyXG59XG5cbi5saW5lLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM3LCAxMDEsIDk0LCAuMik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMzcsIDEwMSwgOTQsIC4yKSA3MCUsIHJnYmEoMjM3LCAxMDEsIDk0LCAwKSlcbn1cblxuLmdhdHNieS1oaWdobGlnaHQtY29kZS1saW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMTQyNTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogLTFlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAuNzVlbTtcbiAgYm9yZGVyLWxlZnQ6IC4yNWVtIHNvbGlkICNmZjZiODFcbn0iLCJAaW1wb3J0IFwic2Nzcy92YXJzXCI7XG5AaW1wb3J0IFwic2Nzcy9jb2RlLWhpZ2hsaWdodFwiO1xuQGltcG9ydCBcInNjc3MvcG9wcGVyLXRoZW1lXCI7XG5AaW1wb3J0IFwiLi4vLi4vbmd4LXBvcHBlcmpzL3NyYy9saWIvc2Nzcy90aGVtZVwiO1xuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc2NzcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMdWNraWVzdCBHdXk7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKFwiTHVja2llc3QgR3V5IFJlZ3VsYXJcIiksIGxvY2FsKFwiTHVja2llc3RHdXktUmVndWxhclwiKSwgdXJsKC9hc3NldHMvZm9udHMvbHVja2llc3QtZ3V5LWxhdGluLTQwMC53b2ZmMikgZm9ybWF0KFwid29mZjJcIiksIHVybCgvYXNzZXRzL2ZvbnRzL2x1Y2tpZXN0LWd1eS1sYXRpbi00MDAud29mZikgZm9ybWF0KFwid29mZlwiKVxufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgYmFja2dyb3VuZDogbWFwLWdldCgkcG9wLWNvbG9ycywgYmFja2dyb3VuZCk7XG4gIGNvbG9yOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBhY2NlbnQpO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhIE5ldWUsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICosIDphZnRlciwgOmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgfVxuXG4gIC8vIENPTU1PTiBFTEVNRU5UUyAtIFNUQVJUXG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGEge1xuICAgICYucG9wLWxpbmsteWVsbG93IHtcbiAgICAgIGNvbG9yOiAjZmZlNjlkO1xuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyMjgsIDE0OCwgMC4yNSk7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyMjgsIDE0OCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICAmLnBvcC1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgID4gbGkgPiBzdmcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBwcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ09NTU9OIEVMRU1FTlRTIC0gRU5EXG5cbiAgQGluY2x1ZGUgcG9wLWN1c3RvbS10aGVtZSgpO1xuXG4gIFtwb3AtdGhlbWluZ10ge1xuXG4gICAgQGluY2x1ZGUgbmd4LXBvcHBlcmpzLXRoZW1lKCM3NzcsICNmZmYxZTApO1xuICB9XG5cbiAgLnBvcC10aXRsZS1saWdodCB7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBzYW5zLXNlcmlmO1xuICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIC1tcy1sZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIGNvbG9yOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBhY2NlbnQpO1xuICB9XG5cbiAgLnBvcC1idXR0b24td2hpdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogbWFwLWdldCgkcG9wLWNvbG9ycywgcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAtNHB4IHJnYmEoMjAwLCA1OSwgODAsIDAuNSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogNXB4O1xuXG4gICAgPiBzdmcge1xuICAgICAgdmVydGljYWwtYWxpZ246IC03cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cblxuICAvLyBUWVBPR1JBUEhZIC0gU1RBUlRcblxuICAucG9wLXRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucG9wLXRleHQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAucG9wLWx1Y2t5LWZvbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5Jywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5wb3AtY29sb3ItcHJpbWFyeSB7XG4gICAgY29sb3I6IG1hcC1nZXQoJHBvcC1jb2xvcnMsIHByaW1hcnkpO1xuICB9XG5cbiAgLy8gVFlQT0dSQVBIWSAtIEVORFxuXG4gIC5wb3AtY29kZS1ib3gge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjNjQyZjQ1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZDNmODtcbiAgICBmb250LWZhbWlseTogTWVubG8sIFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgID4gZGl2IHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6ICM2NDJmNDU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjb2xvcjogI2ZmZDNmODtcbiAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucG9wLWNvZGUtYm94LWljb24ge1xuICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG4gIH1cblxufVxuIiwiJHBvcC1jb2xvcnM6IChcbiAgICAgICAgYmFja2dyb3VuZDogIzJmMjYzYyxcbiAgICAgICAgdmlvbGV0OiAjMzYyYzRmLFxuICAgICAgICBwcmltYXJ5OiAjYzgzYjUwLFxuICAgICAgICBwcmltYXJ5LWxpZ2h0OiAjZmY2YjgxLFxuICAgICAgICBhY2NlbnQ6ICNmNGUwZjEsXG4gICAgICAgIHRleHQ6ICNkMmNiZTRcbik7XG5cbiRwb3AtYW5ndWxhci1sb2dvLXNpemU6IDQwcHg7XG4iLCJAbWl4aW4gcG9wLWN1c3RvbS10aGVtZSB7XG4gIC5uZ3hwX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjNjQyZjQ1O1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuICAgID4gLm5neHBfX2Fycm93OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIH1cbiAgfVxufSIsIkBtaXhpbiBuZ3gtcG9wcGVyanMtdGhlbWUoJGJhY2tncm91bmQsICR0ZXh0LCAkbWF4LXdpZHRoOiAyNTBweCwgJHotaW5kZXg6IDk5OSkge1xuXG4gIGRpdi5uZ3hwX19jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkdGV4dDtcbiAgICBib3JkZXI6IDA7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgei1pbmRleDogJHotaW5kZXg7XG5cbiAgICA+IC5uZ3hwX19hcnJvdyB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************************************!*\
  !*** C:/easyPhp/eds-www/git/ngx-popperjs/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\easyPhp\eds-www\git\ngx-popperjs\projects\ngx-popperjs-repo\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map