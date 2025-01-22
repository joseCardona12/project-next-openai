import { ClientHttpPort } from "@/app/core/application/ports";

export class ClientHttpUtil implements ClientHttpPort {
  private protocol: string = "http";
  private host: string = "localhost:3000"; //Change host

  constructor(protocolClient?: string, hostClient?: string) {
    this.protocol = protocolClient || this.protocol;
    this.host = hostClient || this.host;
  };

  private getHeaders(apikey?:string): Record<string, string> {
    return {
      "Content-Type": "application/json",
    };
  };

  private managementError = async <T>(response: Response): Promise<T> => {
    const errorData = await response.json();
    if (!response.ok)
      throw new Error(errorData.message || "Opps. There is an Error");
    return errorData as T;
  };

  public fetchApi = async <B>(
    path: string,
    headers: Record<string, string>,
    method: string,
    bodyClient?: B
  ): Promise<Response> => {
    return await fetch(`${this.protocol}://${this.host}/api/${path}`, {
      headers,
      method,
      body: bodyClient ? JSON.stringify(bodyClient) : undefined,
      cache: "no-store",
    });
  };

  public async get<T>(path: string): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
    const response = await this.fetchApi(path, headers, "GET");
    return await this.managementError(response);
  };

  public async post<T, B>(path: string, body: B): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
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
