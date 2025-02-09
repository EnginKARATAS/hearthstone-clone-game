import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import RotateScreen from '../RotateScreen.jsx'

describe('RotateScreen', () => {
  it('renders rotate screen message', () => {
    render(<RotateScreen />)
    
    expect(screen.getByText('İlk önce ekranı çevirmen lazım')).toBeInTheDocument()
  })

  it('renders rotate device image with correct attributes', () => {
    render(<RotateScreen />)
    
    const image = screen.getByAltText('rotate device')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/menu/menu/rotate.png')
    expect(image).toHaveAttribute('width', '100')
  })

  it('has correct CSS classes', () => {
    const { container } = render(<RotateScreen />)
    
    expect(container.firstChild).toHaveClass('rotate-screen')
    expect(container.querySelector('.rotate-screen-content')).toBeInTheDocument()
  })
}) 