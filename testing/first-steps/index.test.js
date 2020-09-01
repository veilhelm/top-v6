const {sum, multiply, person, map, isWorking} = require('./index');

afterEach(() => {
  console.log('running test')
})

describe('Sum', () => {
  it('should add 1 and 2 correctly', () => {
    const result = sum(1,2);

    expect(result).toBe(3);
  });

  it('should add 347348975 and 543897342875 correctly', () => {
    const result = sum(347348975,543897342875)
    
    expect(result).toBe(544244691850);
  })
})

describe('Multiply', () => {
  it('should multiply 5 and 2 correctly', () => {
    const result = multiply(5, 2);

    expect(result).toBe(10)
  })
})

describe('Person', () => {
  it('should create a persone with name Maria and age 24', () => {
    const maria = person('maria', 24)

    expect(maria.name).toBe('maria')
    expect(maria.age).toBe(24)
    expect(maria).toMatchObject({ name: 'maria', age: 24 }) // Matcher
  })

  it('should greet correctly', () => {
    const juan = person('juan', 28)

    expect(juan.greet()).toMatch('hola')
  })
})

describe('Map', () => {
  it('should call callback', () => {
    const fn = jest.fn();
    map(fn)

    expect(fn).toHaveBeenCalled();
  })
})

describe('Is Working', () => {
  it('should return that I am working', () => {
    const result = isWorking(true)

    expect(result).toMatch('working')
  })

  it('should return that I am free', () => {
    const result = isWorking(false)

    expect(result).toMatch('free')
  })
})

