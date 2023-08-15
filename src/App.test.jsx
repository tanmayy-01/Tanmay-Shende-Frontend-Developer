import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import matchers from '@testing-library/jest-dom';
import App from './App';
import Header from './layout/header';
expect.extend(matchers);

describe('App', () => {
    it('should have the tagline in document', () => {
        render(<App />);
        expect(screen.getByText('BEYOND SPACE & COSMOS')).toBeInTheDocument();
    });
    it('should have header initially', () => {
        render(<App />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    })
    it('should have footer ', () => {
        render(<App />);
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    })
    it('should have not have header after scrooling 600px ', () => {
        render(<App />);
        fireEvent.scroll(window, { target: { scrollY: 600 } });
        const headerElement = screen.queryByTestId('header');
        expect(headerElement).not.toBeInTheDocument();
    })
    it('should have header after scrooling 600px and then scrooling back to top ', () => {
        render(<App />);
        fireEvent.scroll(window, { target: { scrollY: 600 } });
        fireEvent.scroll(window, { target: { scrollY: 0 } });
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeInTheDocument();
    })
})

describe('Header', () => {
    it('shows modal when "Login" button is clicked', () => {
        render(<Header />);

        const loginButton = screen.getByText('Login');
        fireEvent.click(loginButton);

        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
    });

    it('shows modal when "Register" button is clicked', () => {
        render(<Header />);
        const registerButton = screen.getByText('Register');
        fireEvent.click(registerButton);
        const modal = screen.getByTestId('modal');
        expect(modal).toBeInTheDocument();
    });

    it('closes modal when "Close" button is clicked', () => {
        render(<Header />);
        const loginButton = screen.getByText('Login');
        fireEvent.click(loginButton);
        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);
        const modal = screen.queryByTestId('modal');
        expect(modal).not.toBeInTheDocument();
    });
})

// 