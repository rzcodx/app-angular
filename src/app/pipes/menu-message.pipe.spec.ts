import { MenuMessagePipe } from './menu-message.pipe'

describe('MenuMessagePipe', () => {
  it('create an instance', () => {
    const pipe = new MenuMessagePipe()
    expect(pipe).toBeTruthy()
  })

  it('message when sending a dish', () => {
    const pipe = new MenuMessagePipe()
    const dish = 'Ceviche'
    const expectedResult = 'El platillo seleccionado es: Ceviche'
    const result = pipe.transform(dish)
    expect(result).toBe(expectedResult)
  })
})
