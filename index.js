/**
 * @file mofron-respsv-dev/index.js
 * @author simpart
 */

/**
 * @class xxx
 * @brief responsive class
 */
mofron.respsv = class extends mofron.Respsv {
    
    constructor (po) {
        try {
            super();
            this.name('xxx');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.respsv.xxx;
