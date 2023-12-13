import { getHowManyYearsHavePassed } from '@/helpers'

const MONTHS = {
  MAY: 4,
  JUNE: 5,
  DECEMBER: 11
}

const DATE_THIS_TEST_WAS_WRITTEN = new Date(2023, MONTHS.DECEMBER, 1)
const MY_BIRTH_DATE = new Date(1994, MONTHS.DECEMBER, 14)
const DATE_OF_MY_FIRST_JOB_AS_DEVELOPER = new Date(2021, MONTHS.MAY, 1)

describe('getHowManyYearsHavePassed', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('should be able calculate how many years have passed since my birth date', () => {
    jest.setSystemTime(DATE_THIS_TEST_WAS_WRITTEN)
    const result = getHowManyYearsHavePassed(MY_BIRTH_DATE)
    expect(result).toEqual(28)
  })

  test('should be able calculate how many years have passed in my birthday', () => {
    jest.setSystemTime(new Date(2023, MONTHS.DECEMBER, 14))
    const result = getHowManyYearsHavePassed(MY_BIRTH_DATE)
    expect(result).toEqual(29)
  })

  test('should be able calculate how many years have passed since my first job', () => {
    jest.setSystemTime(DATE_THIS_TEST_WAS_WRITTEN)
    const result = getHowManyYearsHavePassed(DATE_OF_MY_FIRST_JOB_AS_DEVELOPER)
    expect(result).toEqual(2)
  })
})
