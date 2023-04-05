// Imports
// ========================================================
import { GreeterContract } from './contract';
import { createPublicClient, http } from 'viem';
import { polygonZkEvmTestnet } from 'viem/chains';
import dotenv from 'dotenv';

// Config
// ========================================================
dotenv.config();
const publicClient = createPublicClient({
    chain: polygonZkEvmTestnet,
    transport: http(),
});

// Main Function
// ========================================================
(async () => {
    console.group('Main Function');

    // Read from contract
    const result = await publicClient.readContract({
        ...GreeterContract,
        address: `${process.env.CONTRACT_ADDRESS}` as `0x${string}`,
        functionName: "getGreeting"
    });
    console.log({ result });

    console.groupEnd();
})();