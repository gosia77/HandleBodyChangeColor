import { fireEvent, render, screen } from "@testing-library/react";
import ChangeColorButton from "./ChangeColorButton";
import React from "react";

test('change body background color after click', () => {
    const el = <ChangeColorButton />;
    render(el);

    const bodyColorInitial = getComputedStyle(screen.getByTestId('wrapper')).backgroundColor;

    const button = screen.getByTestId('change-color-button');
    fireEvent.click(button);

    const bodyColorAfterClick = getComputedStyle(screen.getByTestId('wrapper')).backgroundColor;


    expect(bodyColorAfterClick).not.toBe(bodyColorInitial)
})