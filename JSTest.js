/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _hairColor, _age, _outfit) {
    const NFT={
        "name": _name,
        "hairColor": _hairColor,
        "age": _age,
        "outfit": _outfit,
    }
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++){
        console.log("\nID: "+ (i+1));
        console.log("Name: "+ NFTs[i].name);
        console.log("Hair Color: " + NFTs[i].hairColor);
        console.log("Age: " + NFTs[i].age);
        console.log("Outfit: " + NFTs[i].outfit);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal entries are " + NFTs.length);
}

// call your functions below this line

mintNFT("Nikunj", "Black", "20", "Shirt");
mintNFT("Mike", "Black", "25", "Shirt");
mintNFT("Ron", "Brown", "23", "Jeans");
mintNFT("Kim", "Grey", "22", "Formals");
listNFTs();
getTotalSupply();
