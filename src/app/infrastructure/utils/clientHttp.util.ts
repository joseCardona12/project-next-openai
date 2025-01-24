import { ClientHttpPort } from "@/app/core/application/ports";

export class ClientHttpUtil implements ClientHttpPort {
  private protocol: string = "http";
  private host: string = "localhost:3000"; 
  private baseUrl: string;

  constructor(protocolClient?: string, hostClient?: string) {
    this.protocol = protocolClient || this.protocol;
    this.host = hostClient || this.host;
    this.baseUrl = `${this.protocol}://${this.host}/api`;
  };

  private getHeaders(headers: Record<string, string> = {}): Record<string, string> {
    return {
      "Content-Type": "application/json",
      ...headers
    };
  };

  private async managementError<T>(response: Response): Promise<T> {
      if (!response.ok) {
        return ({
          message: "Opps. There is an Error with response",
          code: response.status
        }) as T;
      }
      return await response.json();
  };

  public fetchApi = async <B>(
    path: string,
    headers: Record<string, string>,
    method: string,
    bodyClient?: B
  ): Promise<Response> => {
    console.log('Making request to:', `${this.baseUrl}/${path}`);
    console.log('Request headers:', headers);
    console.log('Request method:', method);
    console.log('Request body:', bodyClient);

    const response = await fetch(`${this.baseUrl}/${path}`, {
      headers,
      method,
      body: bodyClient ? JSON.stringify(bodyClient) : undefined,
      cache: "no-store",
    });
    console.log('Response:', response);
    return response;
  };

  public async get<T>(path: string): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
    const response = await this.fetchApi(path, headers, "GET");
    return await this.managementError(response);
  };

  public async post<T, B>(path: string, body: B, headersClient?: Record<string, string>): Promise<T> {
    const headers: Record<string, string> = this.getHeaders(headersClient);
    console.log(headers);
    const response = await this.fetchApi(path, headers, "POST", body);
    return await this.managementError(response);
  };

  public async put<T, B>(path: string, body: B): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
    const response = await this.fetchApi(path, headers, "PUT", body);
    return await this.managementError(response);
  };

  public async delete<T>(path: string): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
    const response = await this.fetchApi(path, headers, "DELETE");
    return await this.managementError(response);
  };
};
