

describe('findSameElementsArray', function(){
  it('Describes findSameElementsArray as an Object', function(){
    expect(findSameElementsArray).toEqual(jasmine.any(Object));
  });
  it('Has methods', function(){
    // code
  });
  it('Has properties', function(){
    // code here
  });
});

  describe('Returns from numbers no match', function(){
    // code
    let arrNum = [1, 2, 3, 4, 5]
  const undefinedCases = [
    {case: findSameElementsArray.tellMeIfAnyMatch(arrNum), answer: false},
    {case: findSameElementsArray.findAllMatches(arrNum), answer: undefined},
    {case: findSameElementsArray.findOnlyOneMatch(arrNum), answer: undefined}
  ]
  undefinedCases.forEach((e, i) => {
    it(`Returns "undefined" or "false" if there is not a match in the array case number${i + 1} return ${e.case}`, function() {
      expect(e.case).toEqual(e.answer)
    });
  });
});

describe('Returns from numbers match', function(){
  // code
  let arrNum = [1, 2, 3, 4, 5, 1, 2, 3, 4]
const undefinedCases = [
  {case: findSameElementsArray.tellMeIfAnyMatch(arrNum), answer: true},
  {case: findSameElementsArray.findAllMatches(arrNum), answer: [1, 2, 3, 4]},
  {case: findSameElementsArray.findOnlyOneMatch(arrNum), answer: 1}
]
undefinedCases.forEach((e, i) => {
  it(`Returns array numbers, array one number or "true" if there is a match in the array case number${i + 1} return ${e.case}`, function() {
    expect(e.case).toEqual(e.answer)
  });
});
});

  describe('Returns from no strings matches', function(){
    // code
    let arrNum = ["ab", "bc", "cd", "de"];
  const undefinedCases = [
    {case: findSameElementsArray.tellMeIfAnyMatch(arrNum), answer: false},
    {case: findSameElementsArray.findAllMatches(arrNum), answer: undefined},
    {case: findSameElementsArray.findOnlyOneMatch(arrNum), answer: undefined}
  ]
  undefinedCases.forEach((e, i) => {
    it(`Returns "undefined" or "false" if there is not a match in the array of strings case number${i + 1} return ${e.case}`, function() {
      expect(e.case).toEqual(e.answer)
    });
  });
});

describe('Returns from strings matches', function(){
  // code
  let arrNum = ["ab", "bc", "cd", "de", "ef", "de", "bc", "cd", "de"];
const undefinedCases = [
  {case: findSameElementsArray.tellMeIfAnyMatch(arrNum), answer: true},
  {case: findSameElementsArray.findAllMatches(arrNum), answer: ["bc", "cd", "de"]},
  {case: findSameElementsArray.findOnlyOneMatch(arrNum), answer: undefined}
]
undefinedCases.forEach((e, i) => {
  it(`Returns "undefined" or "false" if there is not a match in the array of strings case number${i + 1} return ${e.case}`, function() {
    expect(e.case).toEqual(e.answer)
  });
});
});
