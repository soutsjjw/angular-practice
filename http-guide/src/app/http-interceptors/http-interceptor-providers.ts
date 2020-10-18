import { HTTP_INTERCEPTORS } from '@angular/common/http';

// 需要添加的攔截器
import { LoggingInterceptor } from './logging.interceptor';

// 返回的攔截器數組
export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
];