export const requestAnimFrame = 
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (f) {
        return setTimeout(f, 1000 / 60);
    };

export const cancelAnimFrame =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    function (requestID) {
        clearTimeout(requestID);
    };

export const {
    forEach,
    slice: arrSlice,
    map: arrMap,
    reduce: arrReduce
} = Array.prototype;
/* eslint-disable no-console */
export const { warn } = console;
/* eslint-disable no-console */

export const isDef = (val) => {
    return val !== undefined && val !== null;
};

export const isUndef = (val) => {
    return val === undefined || val === null;
};

export const isFunc = (val) => {
    return typeof val === 'function';
};

export const createMethod = (fn) => {
    return isFunc(fn)
        ? function () {
            fn.call(this, ...arguments);
        }
        : () => { };
};

export const rotateCoordinates = function(x, y, xm, ym, a) {
    let cos = Math.cos, sin = Math.sin;
    a = a * Math.PI / 180; // Convert to radians
    // Subtract midpoints, so that midpoint is translated to origin
    // and add it in the end again
    let xr = (x - xm) * cos(a) - (y - ym) * sin(a) + xm,
        yr = (x - xm) * sin(a) + (y - ym) * cos(a) + ym;

    return {x: xr, y: yr};
};