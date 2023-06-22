import { DomSanitizer } from '@angular/platform-browser';
import { VideoPipe } from './video.pipe';

describe('VideoPipe', () => {
  it('create an instance', () => {
    const sanitizerMock = {
      bypassSecurityTrustResourceUrl: () => {}
    };
    const pipe = new VideoPipe(sanitizerMock as any as DomSanitizer);
    expect(pipe).toBeTruthy();
  });
});
