import { CountryButtonPipe } from './country-button.pipe';

describe('CountryButtonPipe', () => {
  it('create an instance', () => {
    const pipe = new CountryButtonPipe();
    expect(pipe).toBeTruthy();
  });

  it('message when show json is true', () => {
    const pipe = new CountryButtonPipe();
    const show = true;
    const expectedResult = 'Ocultar países';
    const result = pipe.transform(show);
    expect(result).toBe(expectedResult);
  });

  it('message when show json is false', () => {
    const pipe = new CountryButtonPipe();
    const show = false;
    const expectedResult = 'Mostrar países';
    const result = pipe.transform(show);
    expect(result).toBe(expectedResult);
  });
});
