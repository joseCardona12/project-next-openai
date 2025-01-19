class ClientHttpUtil {
  private protocol: string = "http";
  private host: string = "";

  constructor(protocolClient?: string, hostClient?: string) {
    this.protocol = protocolClient || this.protocol;
    this.host = hostClient || this.host;
  }

  private getHeaders(): Record<string, string> {
    return {
      "Content-Type": "application/json",
    };
  }

  private managementError = async (response: Response) => {
    const errorData = await response.json();
    if (!response.ok)
      throw new Error(errorData.message || "Opps. There is an Error");
    return errorData;
  };

  public fetchApi = async <B>(
    path: string,
    headers: Record<string, string>,
    method: string,
    bodyClient?: B
  ): Promise<Response> => {
    return await fetch(`${this.protocol}://${this.host}/${path}`, {
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
  }
}
