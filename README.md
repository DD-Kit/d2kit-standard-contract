## D2Kit Dex Smart Contract Boilerplate

This repository includes standard cryptocurrency exchange protocol based on Uniswap V2 of UniswapLabs and NFT exchange protocol based on Niftyswap of 0xsequence.

### D2Kit V2 exchange Inheritance Map
<a href="https://raw.githubusercontent.com/DD-Kit/standard-dex-contract/83d7c960a49dfa84a260198fbcbd07fc26b3f9c1/graph/v2.svg" download>
<img src="https://raw.githubusercontent.com/DD-Kit/standard-dex-contract/83d7c960a49dfa84a260198fbcbd07fc26b3f9c1/graph/v2.svg" />
</a>

 ### D2Kit NFT exchange Inheritance Map
<a href="https://raw.githubusercontent.com/DD-Kit/standard-dex-contract/83d7c960a49dfa84a260198fbcbd07fc26b3f9c1/graph/nft-exchange.svg" download>
<img src="https://raw.githubusercontent.com/DD-Kit/standard-dex-contract/83d7c960a49dfa84a260198fbcbd07fc26b3f9c1/graph/nft-exchange.svg" />
</a>

### Key Change on D2Kit V2
 Original [pairFor() ](https://github.com/DD-Kit/standard-dex-contract/blob/83d7c960a49dfa84a260198fbcbd07fc26b3f9c1/contracts/dex-standard/v2/D2KitV2Router.sol#L691) method was commented to elastic deployment on dev environment in [D2kitV2Library](https://github.com/DD-Kit/standard-dex-contract/blob/83d7c960a49dfa84a260198fbcbd07fc26b3f9c1/contracts/dex-standard/v2/D2KitV2Router.sol#L680).
 Alternative [pairFor()](https://github.com/DD-Kit/standard-dex-contract/blob/83d7c960a49dfa84a260198fbcbd07fc26b3f9c1/contracts/dex-standard/v2/D2KitV2Router.sol#L701) method was provided.
```solidity
function pairFor(address factory, address tokenA, address tokenB) internal view returns (address pair) 
{
  pair = ID2KitFactory(factory).getPair(tokenA,tokenB);
}
```