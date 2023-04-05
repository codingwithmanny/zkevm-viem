# zkEVM Viem

This repository demonstrates how you can deploy, read, write, and view logs from zkEVM Testnet using viem.

---

## Requirements

- NVM or Node v18.15.0 (Mandatory for fetch requests)
- Wallet with zkEVM Testnet token (use [http://wallet.polygon.technology](http://wallet.polygon.technology) for briding)

---

## Getting Started

Install your dependencies:

```bash
# FROM: ./

pnpm install; # npm install;
```

### Set Wallet Private Key

```bash
# FROM: ./

cp .env.example .env;
```

**File:** `./env`

```toml
WALLET_PRIVATE_KEY="<YOUR_WALLET_PRIVATE_KEY>"
```

### Deploy Contract

```bash
# FROM: ./

pnpm contract:deploy; # npm run contract:deploy;

# Expected Output:
# Main Function
#   {
#     hash: '0xa6de910c8c215c5a3c974f6d611113186f88fc0f112a5d1a2aac0fddc82e166d'
#   }
#   {
#     receipt: {
#       root: '0xa9962c7da4d1e42a00b155099c9914a36f56f68da2c042f70f815c181ec958a2',
#       cumulativeGasUsed: 497507n,
#       logsBloom: '0x00000000000000000000000000000000008000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000',
#       logs: [ [Object] ],
#       status: 'success',
#       transactionHash: '0xa6de910c8c215c5a3c974f6d611113186f88fc0f112a5d1a2aac0fddc82e166d',
#       transactionIndex: 0,
#       blockHash: '0x3dc7a407088b5e6e5e07c961d27580ab37eda69f2fb4a3ec806ac812ed010161',
#       blockNumber: 538891n,
#       gasUsed: 497507n,
#       from: '0xb3f03b93f0bd65b960ee950d9afc6867d461c33f',
#       to: null,
#       contractAddress: '0xd375621d9fce7f04f971e696ed7f851a7cba0bc2',
#       type: 'legacy',
#       effectiveGasPrice: null
#     }
#   }
#   Contract successfully deployed to 0xd375621d9fce7f04f971e696ed7f851a7cba0bc2
```

Update your `.env` file with the deployed contract address.

**File:** `./env`

```toml
WALLET_PRIVATE_KEY="<YOUR_WALLET_PRIVATE_KEY>"
CONTRACT_ADDRESS="0xd375621d9fce7f04f971e696ed7f851a7cba0bc2"
```

### Read Contract

```bash
# FROM: ./

pnpm contract:read; # npm run contract:read;

# Expected Output:
# Main Function
#   { result: 'Hello from @codingwithmanny' }
```

### Write Contract

```bash
# FROM: ./

pnpm contract:write; # npm run contract:write;

# Expected Output:
# Main Function
#   {
#     hash: '0xc311ffb939286a1fe94413f24a749ca798f1d17e677fdc853524ac8f4c4bb75c'
#   }
#   {
#     receipt: {
#       root: '0xc02d96263ce56e822e0860f4e93fdcd8ed7c783660ef7c89200b44e3d878c48d',
#       cumulativeGasUsed: 30669n,
#       logsBloom: '0x00000000000000000000000000000000008000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000',
#       logs: [ [Object] ],
#       status: 'success',
#       transactionHash: '0xc311ffb939286a1fe94413f24a749ca798f1d17e677fdc853524ac8f4c4bb75c',
#       transactionIndex: 0,
#       blockHash: '0x9a2adb19e1ebeee0723362b3d746275c3e6473931a6483e4ced4976e3c9ca709',
#       blockNumber: 538900n,
#       gasUsed: 30669n,
#       from: '0xb3f03b93f0bd65b960ee950d9afc6867d461c33f',
#       to: '0xd375621d9fce7f04f971e696ed7f851a7cba0bc2',
#       contractAddress: null,
#       type: 'legacy',
#       effectiveGasPrice: null
#     }
#   }
#   { result: 'Another greeting!' }
```

### Contract Logs

```bash
# FROM: ./

pnpm contract:logs; # npm run contract:logs;

# Expected Output:
# Main Function
#   { blockNumber: 538905n }
#   {
#     logs: [
#       {
#         address: '0xd375621d9fce7f04f971e696ed7f851a7cba0bc2',
#         topics: [Array],
#         data: '0x000000000000000000000000b3f03b93f0bd65b960ee950d9afc6867d461c33f0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001b48656c6c6f2066726f6d2040636f64696e67776974686d616e6e790000000000',
#         blockNumber: 538891n,
#         transactionHash: '0xa6de910c8c215c5a3c974f6d611113186f88fc0f112a5d1a2aac0fddc82e166d',
#         transactionIndex: 0n,
#         blockHash: '0x3dc7a407088b5e6e5e07c961d27580ab37eda69f2fb4a3ec806ac812ed010161',
#         logIndex: 0n,
#         removed: false,
#         args: [Object],
#         eventName: 'NewGreeting'
#       },
#       {
#         address: '0xd375621d9fce7f04f971e696ed7f851a7cba0bc2',
#         topics: [Array],
#         data: '0x000000000000000000000000b3f03b93f0bd65b960ee950d9afc6867d461c33f00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000011416e6f74686572206772656574696e6721000000000000000000000000000000',
#         blockNumber: 538900n,
#         transactionHash: '0xc311ffb939286a1fe94413f24a749ca798f1d17e677fdc853524ac8f4c4bb75c',
#         transactionIndex: 0n,
#         blockHash: '0x9a2adb19e1ebeee0723362b3d746275c3e6473931a6483e4ced4976e3c9ca709',
#         logIndex: 0n,
#         removed: false,
#         args: [Object],
#         eventName: 'NewGreeting'
#       }
#     ]
#   }
#   {
#     topics: {
#       eventName: 'NewGreeting',
#       args: {
#         sender: '0xB3f03B93F0bd65B960EE950d9aFC6867D461C33f',
#         message: 'Hello from @codingwithmanny'
#       }
#     }
#   }
```

---

built by [@codingwithmanny](https://twitter.com/codingwithmanny)