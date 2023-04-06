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

    // Deploy contract and get transaction hash
    const hash = await walletClient.deployContract({
        ...GreeterContract,
        args: ["Hello from @codingwithmanny"]
    });
    console.log({ hash });

    // Get receipt of transaction successfully completed
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log({ receipt });

    // Get deployed contract address
    console.log(`Contract successfully deployed to ${receipt.contractAddress}`);

    console.groupEnd();
})();

