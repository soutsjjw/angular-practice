import { Component, OnInit } from '@angular/core';

import { AntiMotivationalQuotesServicesService } from '../services/anti-motivational-quotes-services.service';
import { GetQuotesResponseModel } from '../interfaces/get-quotes-response-model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-anti-motivational-quotes',
  templateUrl: './anti-motivational-quotes.component.html',
  styleUrls: ['./anti-motivational-quotes.component.scss']
})
export class AntiMotivationalQuotesComponent implements OnInit {

  public quoteResponse: GetQuotesResponseModel;
  public quoteResponseInfo: HttpResponse<GetQuotesResponseModel>;
  public textResponse: string;

  constructor(private services: AntiMotivationalQuotesServicesService) { }

  ngOnInit(): void {
  }

  /**
   * 獲取毒雞湯
   */
  getQuotes() {
    this.services.getAntiMotivationalQuotes().subscribe((response: GetQuotesResponseModel) => {
      this.quoteResponse = response;
    }, error => {
      console.error(error);
    });
  }

  /**
   * 獲取毒雞湯接口完整的請求信息
   */
  getQuotesResponse() {
    this.services.getAntiMotivationalQuotesResponse().subscribe((response: HttpResponse<GetQuotesResponseModel>) => {
      this.quoteResponseInfo = response;
      this.quoteResponse = response.body;
    });
  }

  getYuiterSitemap() {
    this.services.getYuiterSitemap().subscribe((response: string) => {
      this.textResponse = response;
    });
  }

}
