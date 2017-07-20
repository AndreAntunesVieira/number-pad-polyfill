if(typeof(Number.prototype.pad) === 'undefined'){
  Number.prototype.pad = function(n) {
    if(typeof(n) === 'undefined') n = 2;
    var zeros = new Array(n).join('0');
    return (zeros + this).slice(-n);
  };
}