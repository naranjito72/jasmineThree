

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

describe('Returns', function(){
  it('Returns an array of numbers if there are different matches', function(){
    expect(findSameElementsArray).toHaveMethod('tellMeIfAnyMatch');
  });
  it('Returns only one number if there is only one match', function(){
    // findAllMatches()
    expect(findSameElementsArray).toHaveMethod('findAllMatches')
  });
  it('Returns one number despite having multiple matches', function(){
    // findOnlyOne()
    expect(findSameElementsArray).toHaveMethod('findOnlyOneMatch')
  });
});
describe('Returns from different functions', function(){
  // code
  let arrNum = [1, 2, 3, 4, 5]
const undefinedCases = [
  {case: findSameElementsArray.tellMeIfAnyMatch(arrNum), answer: false},
  {case: findSameElementsArray.findAllMatches(arrNum), answer: undefined},
  {case: findSameElementsArray.findOnlyOneMatch(arrNu), answer: undefined}
]
undefinedCases.forEach((e, i) => {
  it(`Returns "undefined" or "false" if there is not a match in the array case number${i + 1} return ${e.case}`, () => {
    expect(e.case).toEqual(e.answer);
  });
});
});
