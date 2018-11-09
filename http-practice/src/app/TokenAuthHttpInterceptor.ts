import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenAuthHttpInterceptor implements HttpInterceptor {
  constructor() { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({ setHeaders: {Authotization: 'Bearer 123456'}});
    return next.handle(newRequest);
  }
}
