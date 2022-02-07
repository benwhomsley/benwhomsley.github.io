import { render, screen } from '@testing-library/react';
import Level from './Level';

test('renders learn react link', () => {
	render(<Level />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
