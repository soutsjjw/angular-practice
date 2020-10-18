import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() { }

  /**
   * 請求攔截
   * @param req http請求
   * @param next 下一個攔截器
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // 開始時間
    const started = Date.now();

    let msg: string;

    // 列印原始的請求訊息
    console.log(`原始的請求訊息：${JSON.stringify(req.headers)}`);

    // 獲取請求中的 token 訊息
    const token = req.headers.get('Authorization') || '';

    // 克隆請求訊息
    const authReq = req.clone({
      headers: token === '' ? req.headers.set('Authorization', '123456') : req.headers
    });

    // 列印修改後的請求訊息
    console.log(`克隆後的請求訊息：${JSON.stringify(authReq.headers)}`);

    // 將 http 請求信息傳遞給下一個攔截器
    return next.handle(req)
      .pipe(
        tap(
          // 捕獲當前請求是否成功 or 失敗

          // 1、通過判斷響應的類型是否為 HttpResponse 來判斷請求是否成功
          event => msg = event instanceof HttpResponse ? '請求成功' : '請求失敗',

          // 2、如果存在了 error 回調，則請求失敗
          error => msg = '請求失敗'
        ), finalize(() => {
          const elapsed = Date.now() - started;
          console.log(`請求方式：${req.method} 請求地址：${req.urlWithParams} 響應耗時：${elapsed} ms 請求結果：${msg}`);
        })
      );
  }
}
