if(Number.prototype.pad === undefined){
  Number.prototype.pad = function(n = 2) {
    const zeros = new Array(n).join('0');
    return (zeros + this).slice(-n);
  };
}