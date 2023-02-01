import { TestSum, OwmYrIcon } from "../OwmYrIcon"

import React from "react";
import { render, screen } from '@testing-library/react';

//  https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library
//  https://robertmarshall.dev/blog/test-images-in-react-with-jest/


// let container = null

// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });


// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });


it("renders icon", () => {
    render(<OwmYrIcon owmCode={200}/> );
    const icon = screen.getByRole("img")
    console.log(icon)
});


it('sums numbers', () => {
    expect(TestSum(1, 2)).toEqual(3)
    expect(TestSum(2, 2)).toEqual(4)
})