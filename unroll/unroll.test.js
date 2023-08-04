const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  const letters =[
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k"],
  ["l", "m", "n"]
];
  it("should give me back one array with all elements inside", ()=>{

      expect(unroll(square)).toEqual([
        1,  2,  3,  4,  5,  6,
        7,  8,  9, 10, 11, 12,
       13, 14, 15, 16
     ]
     )
      expect(unroll(letters)).toEqual([
        'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l',
        'm', 'n'
      ])
  })
});



