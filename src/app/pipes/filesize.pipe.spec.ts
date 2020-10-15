import { FilesizePipe } from './filesize.pipe';

describe('FilesizePipe', () => {
  it('create an instance', () => {
    const pipe = new FilesizePipe();
    expect(pipe).toBeTruthy();
  });

  it('value with mb', () => {
    const pipe = new FilesizePipe();
    const size = 30;
    const expectedResult = '30 MB';
    const result = pipe.transform(size);
    expect(result).toBe(expectedResult);
  });
});
