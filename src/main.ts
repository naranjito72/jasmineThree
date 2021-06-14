const findSameElementsArray = {

  tellMeIfAnyMatch(arrElem: any[]): boolean{
    return new Set(arrElem).size !== arrElem.length
  },
  findAllMatches(arrElem: any[]): any[] | undefined{
   let elementsFound: any [] = [...new Set(arrElem)].filter((value: any) => arrElem.indexOf(value) !== arrElem.lastIndexOf(value)).sort();
   (elementsFound.length == 0) ? elementsFound = undefined : elementsFound;
   return elementsFound;
 },
  findOnlyOneMatch(arrElem: any []): any[] | undefined {
    return arrElem.sort((a, b) => a - b).find((value, indx, arrTwo) => arrTwo[indx] == arrTwo[indx + 1]);
  }
}
