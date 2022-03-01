import { InMemorySigner } from '@taquito/signer'
import { TezosToolkit } from '@taquito/taquito'
export class App {
    private tezos: TezosToolkit

    constructor(rpcUrl: string) {
      this.tezos = new TezosToolkit(rpcUrl)
      this.tezos.setProvider({
          signer: new InMemorySigner('edskS6znhmwt788gXq6fQjn5u6LfpHmewWhiJiuGc47VUeQNd4F3hU1EUmGhPV3o7jUPyx6dSame5SiaZPSGYuoiqi9qXBeu4m')
      })
    }

    public async main() {}
    public async createOption(contract: string){
        this.tezos
            .contract
            .at(contract)
            .then((contract) => {
                const params = {
                    address: 'tz1TeendByS9QA9kPsuJtVeJEVPxQZkDYHTY',
                    expiry: new Date('2022-03-01T10:20:10Z'),
                    type_: 'Call',
                    size: 1,
                    strike: 4,
                 };

               return contract.methods.write_option(params).send();
            })
            .catch((error) => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
    }
}