import { EmptyPipe } from './empty.pipe';

describe('EmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyPipe();
    expect(pipe).toBeTruthy();
  });

  it('message when sending an empty string', () => {
    const pipe = new EmptyPipe();
    const value = '';
    const expectResult = '****';
    const result = pipe.transform(value);
    expect(result).toBe(expectResult);
  });

  it('message when sending a non empty string', () => {
    const pipe = new EmptyPipe();
    const value = 'test text';
    const expectResult = undefined;
    const result = pipe.transform(value);
    expect(result).toBe(expectResult);
  });
});
