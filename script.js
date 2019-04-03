function spinalCase(str) {
  
  return str.toLowerCase().split(/(?=[A-Z])|[\W_]|\s/).join("-");
}

spinalCase('This Is Spinal Tap');