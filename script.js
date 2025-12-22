function convertToRoman(num) {
  // 1. Create a map of values and their symbols
  // We include special cases like 4 (IV) and 9 (IX) for easier calculation
  const romanMap = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let result = '';

  // 2. Loop through the map
  for (const item of romanMap) {
    // 3. While the number is larger than the current symbol value
    while (num >= item.value) {
      result += item.symbol; // Add the symbol (e.g., 'X')
      num -= item.value;    // Subtract the value (e.g., 10)
    }
  }

  return result;
}

// Test the function
console.log(convertToRoman(36)); // Output: XXXVI
console.log(convertToRoman(9));  // Output: IX

module.exports = convertToRoman;