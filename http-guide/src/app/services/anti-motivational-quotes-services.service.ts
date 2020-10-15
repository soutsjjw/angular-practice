import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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
      .pipe(catchError(this.handleError));
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
