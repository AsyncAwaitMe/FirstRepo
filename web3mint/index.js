import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

const phantomPublicKey = new PublicKey('5ngxqWqQXPcrUvxqoZ4GMqcXz75QqmPtS2sb6oVS5zY1');

const connection = new Connection(clusterApiUrl('devnet'),'confirmed');

(async ()=> {
    //Airdrop 5 sol
    const airdropSignature = await connection.requestAirdrop(
        phantomPublicKey,
        5*LAMPORTS_PER_SOL
    );

    await connection.confirmTransaction(airdropSignature);

    const balance = await connection.getBalance(phantomPublicKey)
    console.log(`Wallet balance: ${balance/LAMPORTS_PER_SOL} `)
})();