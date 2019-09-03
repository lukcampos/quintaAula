import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url: string = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) {
  }


  //lista de usuários
  async list() {
    return await this.http.get(this.url).toPromise()
  }

  //pegar um usuário pelo id
  async getOne(id: string) {
    return await this.http.get(`${this.url}/${id}`).toPromise()
  }

  //deletar usuário pelo id
  async delete(id: string) {
    return await this.http.delete(`${this.url}/{${id}}`).toPromise()
  }

  //atualizar usuário pelo id
  async update(id: string, user: object) {
    return await this.http.put(`${this.url}/{${id}}`, user).toPromise()
  }

  //criar novo usuário
  async create(user: object) {
    return await this.http.post(this.url, user).toPromise()
  }
}
