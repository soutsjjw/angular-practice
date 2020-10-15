export interface GetQuotesResponseModel {
    /**
     * 接口響應碼
     */
    code: number;
    /**
     * 響應信息
     */
    msg: string;
    /**
     * 響應數據
     */
    data: ResponseData;
    /**
     * 作者內容
     */
    author: Author;
}

/**
 * 接口響應的內容信息
 */
interface ResponseData {
    /**
     * 毒雞湯
     */
    title: string;
}

interface Author {
    /**
     * 作者
     */
    name: string;
    /**
     * 說明
     */
    desc: string;
}