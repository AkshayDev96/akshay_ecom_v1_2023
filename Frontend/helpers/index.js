

exports.numberWithCommas=(x)=>{
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

exports.truncateString=(str)=>{
    num = 50
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }