function spinalCase(str) {
  
  return str.split(/(?=[A-Z])|[\W_]|\s/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
