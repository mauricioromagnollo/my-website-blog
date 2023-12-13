import { fireEvent, render, screen, within } from '@testing-library/react'

import { SocialButton } from '@/ui'

describe('SocialButton', () => {
  it('should be render with default props', () => {
    render(<SocialButton name="github" url="http://foo.com" />)

    const socialButtonElement = screen.getByTestId('social-button')
    const iconElement = within(socialButtonElement).getByTestId('github-icon')

    expect(socialButtonElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
  })

  it('should be able click', () => {
    render(<SocialButton name="github" url="http://foo.com" />)

    const socialButtonElement = screen.getByTestId('social-button')

    const canClick = fireEvent.click(socialButtonElement)

    expect(canClick).toBe(true)
    expect(socialButtonElement).toBeInTheDocument()
    expect(socialButtonElement).toHaveAttribute('href', 'http://foo.com')
  })
})
