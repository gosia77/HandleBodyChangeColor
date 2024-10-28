import { fireEvent, render, screen } from "@testing-library/react";
import ChangeColorButton from "./ChangeColorButton";
import React from "react";

jest.mock('./getRandomColor', () => {
    return { 
        getRandomColor: () => {
            return '#000'
        }
    }
})

test('change body background color after click - mock', () => {
    

    const el = <ChangeColorButton />;
    render(el);

    const button = screen.getByTestId('change-color-button');
    fireEvent.click(button);

    const bodyColorAfterClick = getComputedStyle(screen.getByTestId('wrapper')).backgroundColor;

    expect(bodyColorAfterClick).toBe('rgb(0, 0, 0)')
})