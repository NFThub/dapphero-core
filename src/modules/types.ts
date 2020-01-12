export interface Request {
  requestString: string[];
  element: HTMLElement;
  arg: string;
  index: number;
}

export interface Network {
  networkId?: number;
  address?: string;
  abi?: {[key: string]: any};
}

export interface DappHeroConfig {
  contracts: any[],
  contractName?: string,
  network?: Network;
}

export type EthContractProps = {
  method: any; // add type
  element: HTMLElement;
  request: Request;
  injected: { [key: string]: any };
  signifiers: { [key: string]: string };
  instance: any; // build this type
  mock?: {
    abi: any[],
    contractAddress: string
  }
}

export enum FunctionTypes {
  VIEW = 'view',
  NONPAYABLE = 'nonpayable',
  PAYABLE = 'payable'
}

export enum Signifiers {
  IDENTIFY_RETURN_VALUE = '*',
  // EVENT_TRIGGER = '#', // TODO: revisit
  UNIT ='%',
  DECIMAL = '>',
  PAYABLE = '$'
}

export enum RequestString {
  ETH_PARENT_TYPE = 2,
  ETH_CONTRACT_FUNCTION = 3,
  ETH_CONTRACT_ARGS = 4
}
