import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router) { }

  public sign (payLoad: {email: string, password:string}): Observable<any> {
      return this.http.post<{token: string}>(`${this.url}/sign`, payLoad).pipe(
        map((res) => {
          //Na linha 19 e 20 estou inserindo no miniBanco  de dados no navegador!
          localStorage.removeItem('access_token');
          localStorage.setItem('access_token', res.token);
          return this.router.navigate(['admin']);
        }),
        catchError((e) => {
          //Se houver problema com o login, virá essa mensagem!
          if (e.error.message) return throwError(() => e.error.message);
          //Caso o servidor caia, vai vir esta mensagem!
          return throwError (() => "No momento nao estamos conseguindo validar estes dados, tente novamente mais tarde!"

        );
        })
      );
  }
    public logout () {
      localStorage.removeItem('access_token');
      return this.router.navigate(['']);
    }


}
