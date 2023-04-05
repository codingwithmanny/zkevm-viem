// Imports
// ========================================================
import Greeter from './Greeter.json'; // retrieving typical hardhat compile abi

// Main Greeter Contract
// ========================================================
export const GreeterContract = { 
  abi: Greeter.abi, 
  bytecode: Greeter.bytecode as `0x${string}` 
} as const;