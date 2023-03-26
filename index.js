function findModifications(original, updated) {
    const newElements = [];
    const removedElements = [];
  
    // Find new elements
    for (const elem of updated) {
      if (!original.includes(elem)) {
        newElements.push(elem);
      }
    }
  
    // Find removed elements
    for (const elem of original) {
      if (!updated.includes(elem)) {
        removedElements.push(elem);
      }
    }
  
    return [newElements, removedElements];
  }

const originalArray = [1, 2, 3, 4, 5];
const updatedArray = [3, 4, 5, 6, 7];

const [newElements, removedElements] = findModifications(originalArray, updatedArray);

console.log("New elements:", newElements);
console.log("Removed elements:", removedElements);