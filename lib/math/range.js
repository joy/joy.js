/**
 * @module Joy
 */
(function(J){
  /**
   * @class Range
   * @constructor
   * @param {Number} min
   * @param {Number} max
   */
  var Range = function(min, max) {
    if (typeof(min)==="object") {
      min = min.min;
      max = min.max;
    }

    this.min = min || 0;
    this.max = max || this.min || 0;
  };

  /**
   * Get a random value between this range.
   * @method random
   * @return {Number}
   */
  Range.prototype.random = function () {
    return this.min + (Math.random() * (this.max - this.min));
  };

  Range.random = function (min, max) {
    return ((Math.random() * (max - min + 1)) + min);
  };

  Range.randomInt = function (min, max) {
    return (Math.floor((Math.random() * (max - min + 1)) + min));
  };

  J.Range = Range;
})(Joy);