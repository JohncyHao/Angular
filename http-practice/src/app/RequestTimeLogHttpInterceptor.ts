import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable, pipe  } from "rxjs";
import { tap } from 'rxjs/operators';


export class RequestTimeLogHttpInterceptor implements HttpInterceptor {
  constructor() { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
      .handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`存取網址： ${req.urlWithParams}`);
          console.log(`花費時間： ${elapsed} ms`);
        }
      }));
  }
}
