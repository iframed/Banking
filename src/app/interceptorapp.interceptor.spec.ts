import { TestBed } from '@angular/core/testing';

import { InterceptorappInterceptor } from './interceptorapp.interceptor';

describe('InterceptorappInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorappInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorappInterceptor = TestBed.inject(InterceptorappInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
