import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { GetQuotesResponseModel } from '../interfaces/get-quotes-response-model';
import { SetQuotesResponseModel } from '../interfaces/set-quotes-response-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AntiMotivationalQuotesServicesService {

  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token'
    })
  };

  /**
   * 通過 get 請求獲取毒雞湯信息
   */
  getAntiMotivationalQuotes(): Observable<GetQuotesResponseModel> {
    return this.http.get<GetQuotesResponseModel>(environment.url)
      .pipe(
        retry(3), // 重試三次
        catchError(this.handleError)
      );
  }

  /**
   * 錯誤信息捕獲處理
   * @param error 錯誤信息
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // 客戶端本身引起的錯誤信息
      console.log(`客戶端錯誤：${error.error.message}`);
    } else {
      // 服務端返回的錯誤信息
      console.log(`服務端錯誤：HTTP狀態碼。${error.status} \r\n 錯誤訊息：${JSON.stringify(error.error)}`);
    }

    // 反饋給用戶的錯誤信息（用於組件中使用 error 回調時的錯誤提示）
    return throwError('不好的事情發生了，畢竟我們都有不順利的時候。。。');
  }

  /**
   * 獲取完整的接口請求信息
   */
  getAntiMotivationalQuotesResponse(): Observable<HttpResponse<GetQuotesResponseModel>> {
    return this.http.get<GetQuotesResponseModel>(environment.url, { observe: 'response' });
  }

  /**
   * 獲取響應類型非 json 對象的信息
   */
  getYuiterSitemap() {
    const url = 'https://yuiter.com/sitemap.xml';
    return this.http.get(url, { responseType: 'text' });
  }

  /**
   * 提交毒雞湯信息
   * @param content 毒雞湯
   */
  submitAntiMotivationalQuote(content: string): Observable<SetQuotesResponseModel> {
    const url = 'https://api.tryto.cn/djt/submit';
    return this.http.post<SetQuotesResponseModel>(url, {
      content
    });
  }

  /**
   * 修改請求頭信息
   */
  submitWithOptions() {
    const url = '';
    return this.http.post(url, {
      data: ''
    }, this.httpOptions);
  }
}
