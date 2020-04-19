// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public static readonly API_ENDPOINT: string = 'http://localhost:3000/api';
	public static readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
	public static readonly PROJECT_NAME:string = "MTSAAS";
}