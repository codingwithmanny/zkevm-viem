// Imports
// ========================================================
import { GreeterContract } from './contract';
import { createPublicClient, decodeEventLog, GetLogsParameters, http } from 'viem';
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

    // Get current block number (adjust as needed)
    const blockNumber = await publicClient.getBlockNumber();
    console.log({ blockNumber });

    // Read logs from contract
    const logs = await publicClient.getLogs({
        ...GreeterContract,
        address: `${process.env.CONTRACT_ADDRESS}` as `0x${string}`,
        // Retrieve specific log event object
        event: GreeterContract.abi.find((func) => func.type === "event" && func.name === "NewGreeting"),
        // adjust fromBlock as needed
        fromBlock: blockNumber - 100n,
        toBlock: blockNumber,
    } as GetLogsParameters);
    console.log({ logs });

    // Decode first log from array retrieved
    const topics = decodeEventLog({
        abi: GreeterContract.abi,
        topics: logs?.[0]?.topics,
        data: `${logs?.[0]?.data.toString()}` as `0x${string}`
    });
    console.log({ topics });

    console.groupEnd();
})();