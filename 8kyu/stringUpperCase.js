String.prototype.isUpperCase = function () {
  return String(this.toUpperCase()) === String(this);
};
