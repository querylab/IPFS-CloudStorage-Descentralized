export const ALCHEMY_API_URL = "URL ALCHEMY_API_URL";
export const PRIVATE_KEY ="wallet Metamask Private Key";
export const contractAddress = "0x74789Ec821B1a0f6342d201C533dA8d2efd19D6D";
export const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fileName",
				"type": "string"
			}
		],
		"name": "getIPFSHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fileName",
				"type": "string"
			}
		],
		"name": "isFileStored",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fileName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"name": "upload",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];