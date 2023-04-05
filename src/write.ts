// Imports
// ========================================================
import { GreeterContract } from './contract';
import { createPublicClient, http, createWalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { polygonZkEvmTestnet } from 'viem/chains';
import dotenv from 'dotenv';

// Config
// ========================================================
dotenv.config();
const account = privateKeyToAccount(`0x${process.env.WALLET_PRIVATE_KEY}`);
const publicClient = createPublicClient({
    chain: polygonZkEvmTestnet,
    transport: http(),
});
const walletClient = createWalletClient({
    account,
    chain: polygonZkEvmTestnet,
    transport: http(),
});

// Main Function
// ========================================================
(async () => {
    console.group('Main Function');

    // Sumulate request for contract
    const { request } = await publicClient.simulateContract({
        ...GreeterContract,
        address: `${process.env.CONTRACT_ADDRESS}` as `0x${string}`,
        functionName: 'setGreeting',
        account,
        args: ['Another greeting!']
    });

    // Write to contract
    const hash = await walletClient.writeContract(request);
    console.log({ hash });

    // Get receipt of transaction successfully completed
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log({ receipt });

    // Read from contract for confirmation
    const result = await publicClient.readContract({
        ...GreeterContract,
        address: `${process.env.CONTRACT_ADDRESS}` as `0x${string}`,
        functionName: "getGreeting"
    });
    console.log({ result });

    console.groupEnd();
})();

