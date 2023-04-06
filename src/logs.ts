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

    const filter = await publicClient.createContractEventFilter({
        ...GreeterContract,
        address: `${process.env.CONTRACT_ADDRESS}` as `0x${string}`,
        eventName: 'NewGreeting',
        fromBlock: blockNumber - 100n,
        toBlock: blockNumber,
    })
    const logs = await publicClient.getFilterLogs({ filter });
    
    console.log('decoded topics (args)', logs[0].args)


    console.groupEnd();
})();
