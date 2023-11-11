import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv'

dotenv.config()

const config: HardhatUserConfig = {
	solidity: {
		compilers: [
			{
				version: "0.4.18",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.5.0",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.5.16",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.6.0",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.6.2",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.6.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.6.12",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
			{
				version: "0.7.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
			{
				version: "0.8.0",
				settings: {
					optimizer: {
						enabled: true,
						runs: 10,
					},
				},
			},
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.8.8",
				settings: {
					optimizer: {
						enabled: true,
						runs: 1000,
					},
				},
			},
			{
				version: "0.8.11",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			},
			{
				version: "0.8.20",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				},
			}
		],
		settings: {
			optimizer: {
				enabled: true,
				runs: 1000,
			},
		},
	},
	mocha: {
		timeout: 200000
	},
	networks: {
		polygon: {
			url: process.env.POLYGON_URL || "",
			accounts: process.env.POLYGON_PRIVATE_KEY !== undefined ? [process.env.POLYGON_PRIVATE_KEY] : [],
			timeout: 600000
		},
		bscmainnet: {
			url: process.env.BSC_URL || "https://bsc-dataseed4.bnbchain.org",
			accounts: [process.env.PRIVATE_KEY_3 as string],
			timeout: 600000
		},
		ropsten: {
			url: process.env.ROPSTEN_URL || "",
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
		rinkeby: {
			url: process.env.RINKEBY_URL || "",
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
		bsctest: {
			url: process.env.BSCTEST_URL || "https://data-seed-prebsc-2-s2.bnbchain.org:8545",
			accounts: [process.env.PRIVATE_KEY_1 as string],
			timeout: 60000,
		},
		snowtrace: {
			url: "https://api.avax-test.network/ext/bc/C/rpc",
			chainId: 43113,
			accounts: ['']
		},
		goerli: {
			url: 'https://goerli.infura.io/v3/60d0fc034847460da68aa4501df5fe57',
			chainId: 5,
			accounts: [process.env.PRIVATE_KEY_1 as string, '']
		},
		mumbai: {
			url: 'https://rpc.ankr.com/polygon_mumbai',
			chainId: 80001,
			accounts: [process.env.PRIVATE_KEY_1 as string]
		},
		optimismGoerli: {
			url: 'https://optimism-goerli.blockpi.network/v1/rpc/public',
			chainId: 420,
			accounts: [process.env.PRIVATE_KEY_1 as string]
		},
		moonbaseAlpha: {
			url: 'https://moonbase-alpha.public.blastapi.io',
			chainId: 1287,
			accounts: [process.env.PRIVATE_KEY_1 as string]
		},
		arbitrumGoerli: {
			url: 'https://endpoints.omniatech.io/v1/arbitrum/goerli/public',
			chainId: 421613,
			accounts: [process.env.PRIVATE_KEY_1 as string]
		},
		alfajores: {
			url: 'https://alfajores-forno.celo-testnet.org',
			chainId: 44787,
			accounts: [process.env.PRIVATE_KEY_1 as string]
		},
		localnode: {
			url: process.env.LOCALNET_URL,
			accounts: [
			],
			blockGasLimit: 0x1fffffffffffff
		}
	},
	etherscan: {
		apiKey: ""
	}
};

export default config;
