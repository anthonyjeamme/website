import { expect } from '@jest/globals'
import React from 'react'

import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('button', () => {
	beforeEach(cleanup)
	it('trigger click', async () => {
		const handleClick = jest.fn()
		render(<Button handleClick={handleClick} />)
		fireEvent.click(screen.getAllByText(/xxx/i)[0])
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
