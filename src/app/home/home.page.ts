import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cep: string = '';
  endereco: any;
  uf: string = '';

  constructor(private http: HttpClient) {}

  consultarCEP() {
    if (this.cep) {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;

      this.http.get(url).subscribe((data: any) => {
        this.endereco = data;
      });
    };
  }
    consultarSigla() {
      if (this.uf) {
        const url = `https://viacep.com.br/ws/${this.uf}/json/`;
  
        this.http.get(url).subscribe((data: any) => {
          this.endereco = data;
        });
      };
  }}
