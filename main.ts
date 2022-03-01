import { App } from './app'
const RPC_URL = 'https://hangzhounet.api.tez.ie';
const contracAddress = 'KT1UPTjmiaV8fE7RaxWzKvm3d2dmGr4aTjZy';
new App(RPC_URL).createOption(contracAddress);

/// for test command:
/// npx ts-node main.ts