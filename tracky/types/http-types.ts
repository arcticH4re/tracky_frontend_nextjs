// request types

export interface requestConfig {
  url: string;
  data?: {};
  headers?: {};
  config?: {};
}

//

export interface TokenResponseData {
  access: string;
  refresh: string;
}

export interface UserLoginResponse {
  data: TokenResponseData;
  config: {};
  headers: {};
  request: {};
  status: number;
  statusText: string;
}

export interface DatasetListResponse {
  data: [];
  config: {};
  headers: {};
  request: {};
  status: number;
  statusText: string;
}

export interface Response {
  data: {} | [];
  config: {};
  headers: {};
  request: {};
  status: number;
  statusText: string;
}
