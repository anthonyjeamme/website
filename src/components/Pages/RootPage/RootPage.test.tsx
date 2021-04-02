import React from 'react'
import { expect } from '@jest/globals'
import { render, cleanup, screen } from '@testing-library/react'
import RootPage from './RootPage'

describe('root page', () => {
	afterEach(cleanup)
	it('display title', () => {
		render(<RootPage />)

		expect(screen.getByText(/Hello/i)).toBeTruthy()
	})
})
