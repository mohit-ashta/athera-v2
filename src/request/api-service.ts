export type Method = "HEAD" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type Body = object | any[];
export type Headers = Record<string, string>;
export type Params = Record<string, any>;
export type AuthConfig = {
	token?: string;
};

interface BaseRequestProps {
	url: string;
	method: Method;
	body?: Body;
	params?: Params;
	headers?: Headers;
	auth?: AuthConfig;
}

type RequestOptions = Omit<BaseRequestProps, "url" | "method">;

export class Fetcher {
	private _baseUrl: string;
	constructor() {
		this._baseUrl =
			process.env.NEXT_PUBLIC_BASE_API_URL || "http://192.168.29.87:3000";
	}

	private readonly request = <T>(options: BaseRequestProps) => {
		return this._fetch<T>(options);
	};

	readonly head = this._method("HEAD");
	readonly get = this._method("GET");
	readonly post = this._method("POST");
	readonly put = this._method("PUT");
	readonly patch = this._method("PATCH");
	readonly delete = this._method("DELETE");

	private _createUrl(options: BaseRequestProps) {
		if (!options.url.startsWith("/")) {
			options.url = `/${options.url}`;
		}
		const apiUrl = `${this._baseUrl}${options.url}`;
		const url = new URL(apiUrl);
		if (options.params && Object.values(options.params).length > 0) {
			for (const item in Object.entries(options.params)) {
				url.searchParams.set(item[0], item[1]);
			}
		}
		return url.toString();
	}

	private _getData(options: BaseRequestProps) {
		if (options.body instanceof FormData) {
			return options.body;
		}
		if (options.body && Object.values(options.body).length > 0) {
			return JSON.stringify(options.body);
		}
		return null;
	}

	private _method(method: Method) {
		return <T>(url: string, options?: RequestOptions) => {
			return this.request<T>({
				...options,
				method,
				url,
			});
		};
	}

	private _createHeaders(options: BaseRequestProps) {
		let headers = {} as Record<string, string>;
		if (!(options.body instanceof FormData)) {
			headers["Content-Type"] = "application/json";
		}

		if (options.auth?.token) {
			headers.Authorization = `Bearer ${options.auth.token}`;
		}
		if (options.headers && Object.values(options.headers).length > 0) {
			headers = {
				...headers,
				...options.headers,
			};
		}
		return headers;
	}

	private _createFetchOptions(options: BaseRequestProps) {
		const fetchOptions = {
			method: options.method,
		} as RequestInit;
		const items: Method[] = ["POST", "PUT", "PATCH"];
		if (items.includes(options.method) && options.body) {
			fetchOptions.body = this._getData(options);
		}

		fetchOptions.headers = this._createHeaders(options);

		return fetchOptions;
	}

	private async _handleResponse<T>(
		response: Response,
		_options: BaseRequestProps,
	) {
		const jsonResponse = await response.json();
		if (response.status > 399) {
			throw new Error(jsonResponse.message);
		}
		if ("success" in jsonResponse && !jsonResponse?.success) {
			throw new Error("Failed to fetch");
		}
		if ("data" in jsonResponse) {
			return jsonResponse.data as T;
		}
		return jsonResponse as T;
	}

	private async _fetch<T>(options: BaseRequestProps) {
		const url = this._createUrl(options);
		const fetchOptions = this._createFetchOptions(options);
		const response = await fetch(url, fetchOptions);
		return this._handleResponse<T>(response, options);
	}
}
