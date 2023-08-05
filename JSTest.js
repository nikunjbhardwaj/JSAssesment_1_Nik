class NFT {
  constructor(nftId, name, hair_color, age) {
    this.nftId = nftId;
    this.name = name;
    this.hair_color = hair_color;
    this.age = age;
  }
}

class NFTCollection {
  constructor() {
    this.nfts = [];
  }

  mintNFT(nftId, name, hair_color, age) {
    const newNFT = new NFT(nftId, name, hair_color, age);
    this.nfts.push(newNFT);
    console.log(`Minted NFT ${nftId}: ${name}`);
  }


  printNFTDetails(nftId) {
    const nft = this.nfts.find((nft) => nft.nftId === nftId);
    if (nft) {
      console.log(`\n--- NFT ${nftId} ---`);
      console.log(`Name: ${nft.name}`);
      console.log(`Hair Color: ${nft.hair_color}`);
      console.log(`Age: ${nft.age}`);

    } else {
      console.log(`Error: NFT with ID ${nftId} not found.`);
    }
  }

  printTotalSupply() {
    console.log(`\nTotal supply of NFTs: ${this.nfts.length}`);
  }
}

// Sample Usage:
const nftCollection = new NFTCollection();

nftCollection.mintNFT(1, "Nick", "Grey", "32");
nftCollection.mintNFT(2, "Bob", "Black", "21");
nftCollection.mintNFT(3, "Kim", "Brown", "27");
nftCollection.mintNFT(4, "Lee", "Golden", "24");

nftCollection.printNFTDetails(1);
nftCollection.printNFTDetails(2);
nftCollection.printNFTDetails(3);
nftCollection.printNFTDetails(4);

nftCollection.printTotalSupply();
