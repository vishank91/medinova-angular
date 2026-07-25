import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    apiURL = environment.backendServerURL
    constructor(private http: HttpClient) { }

    getData(collection: string) {
        return this.http.get(`${this.apiURL}/${collection}`)
    }
    getSingleData(collection: string, id: any) {
        return this.http.get(`${this.apiURL}/${collection}/${id}`)
    }
    createData(collection: string, data: any) {
        return this.http.post(`${this.apiURL}/${collection}`, data)
    }
    updateData(collection: string, data: any) {
        return this.http.put(`${this.apiURL}/${collection}/${data.id}`, data)
    }
    deleteData(collection: string, id: any) {
        return this.http.delete(`${this.apiURL}/${collection}/${id}`)
    }
}
