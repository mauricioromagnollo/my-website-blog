import { getYearsAndMonthsPassed } from '@/helpers'

const MONTHS = {
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  DECEMBER: 11
}

const DATE_THIS_TEST_WAS_WRITTEN = new Date(2023, MONTHS.DECEMBER, 1)
const DATE_OF_MY_FIRST_JOB_AS_DEVELOPER = new Date(2021, MONTHS.MAY, 1)

describe('getYearsAndMonthsPassed', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should return 0 months if the month and day is the same', () => {
    jest.setSystemTime(new Date(2024, MONTHS.DECEMBER, 14))

    const { months, years } = getYearsAndMonthsPassed(new Date(1994, MONTHS.DECEMBER, 14))

    expect(months).toEqual(0)
    expect(years).toEqual(30)
  })

  it('should return months and years to different dates', () => {
    jest.setSystemTime(new Date(2024, MONTHS.APRIL, 13))

    const { months, years } = getYearsAndMonthsPassed(new Date(2021, MONTHS.MAY, 1))

    expect(months).toEqual(1)
    expect(years).toEqual(3)
  })
})
