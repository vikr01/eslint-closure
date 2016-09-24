/** @const */
const Mocha = {};


/** @type {(!Mocha.ContextDefinition|Mocha.ContextRunnable)} */
let describe;

/** @type {(!Mocha.ContextDefinition|Mocha.ContextRunnable)} */
let xdescribe;

/** @type {(!Mocha.TestDefinition|Mocha.TestRunnable)} */
let it;

/** @type {(!Mocha.TestDefinition|Mocha.TestRunnable)} */
let xit;


/*
 * @param {string} description
 * @param {function()} spec
 * @return {void}
 */
Mocha.ContextRunnable = (description, spec) => {};

/** @record */
Mocha.ContextDefinition = function() {};
/*
 * @param {string} description
 * @param {function()} spec
 * @return {void}
 */
Mocha.ContextDefinition.prototype.only = (description, spec) => {};
/*
 * @param {string} description
 * @param {function()} spec
 * @return {void}
 */
Mocha.ContextDefinition.prototype.skip = (description, spec) => {};
/*
 * @param {number} ms
 * @return {void}
 */
Mocha.ContextDefinition.prototype.timeout = (ms) => {};

/*
 * @param {string} expectation
 * @param {!ActionFunction=} assertion
 * @return {void}
 */
Mocha.TestRunnable = (expectation, assertion) => {};


/** @record */
Mocha.TestDefinition = function() {};

/*
 * @param {string} expectation
 * @param {!ActionFunction=} assertion
 * @return {void}
 */
Mocha.TestDefinition.prototype.only = (expectation, assertion) => {};

/*
 * @param {string} expectation
 * @param {!ActionFunction=} assertion
 * @return {void}
 */
Mocha.TestDefinition.prototype.skip = (expectation, assertion) => {};

/*
 * @param {number} ms
 * @return {void}
 */
Mocha.TestDefinition.prototype.timeout = (ms) => {};

/** @type {string} */
Mocha.TestDefinition.prototype.state;

/*
 * @param {!Mocha.ActionFunction} action
 * @return {void}
 */
let setup = (action) => {};
/*
 * @param {!Mocha.ActionFunction} action
 * @return {void}
 */
let teardown = (action) => {};
/*
 * @param {!Mocha.ActionFunction} action
 * @return {void}
 */
let suiteSetup = (action) => {};
/*
 * @param {!Mocha.ActionFunction} action
 * @return {void}
 */
let suiteTeardown = (action) => {};
/*
 * @param {!Mocha.ActionFunction} action
 * @param {string=} description
 * @return {void}
 */
let before = (action, description) => {};

/*
 * @param {!Mocha.ActionFunction} action
 * @param {string=} description
 * @return {void}
 */
let after = (action, description) => {};

/*
 * @param {!Mocha.ActionFunction} action
 * @param {string=} description
 * @return {void}
 */
let beforeEach = (action, description) => {};

/*
 * @param {!Mocha.ActionFunction} action
 * @param {string=} description
 * @return {void}
 */
let afterEach = (action, description) => {};

/*
 * @param {*?} error
 * @return {*}
 */
Mocha.Done = (error) => {};

/*
 * @param {!Mocha.Done} done
 * @return {*}
 */
Mocha.ActionFunction = (done) => {};