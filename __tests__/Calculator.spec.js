import { Calculator } from '../src/lib/Calculator.js'

describe('Calculator_class', () => {
  let calculator

  beforeAll(() => {
    calculator = new Calculator()
  })

  // Tests that the convertToSeconds method returns the correct number of seconds for a valid input
  it('test_convertToSeconds_validInput', () => {
    const input = '01:30:45'
    const expectedOutput = 5445

    const result = calculator.convertToSeconds(input)

    expect(result).toBe(expectedOutput)
  })

  // Tests that secondsToSchedule returns the correct time string for a valid input
  it('test_secondsToSchedule_validInput', () => {
    const result = calculator.secondsToSchedule(3661)
    expect(result).toBe('01:01:01')
  })

  // Tests that the sub method returns the correct time difference for valid inputs
  it('test_sub_valid_inputs', () => {
    const result = calculator.sub('10:30:00', '08:45:00')
    expect(result).toBe('01:45:00')
  })

  // Tests that the sum method returns the correct time sum for valid inputs
  it('test_sum_valid_inputs', () => {
    const result = calculator.sum('01:30:00', '02:45:30')
    expect(result).toBe('04:15:30')
  })
})
