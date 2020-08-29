function add_Numbers(...nums: number[]) {
  var total = 0;
  for (var i = 0; i < nums.length; i++) {
    total = total + nums[i];
  }
  console.log(total);
}

add_Numbers(10, 20, 30, 40);
