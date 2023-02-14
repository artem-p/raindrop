import { OwmYrIcon } from "../OwmYrIcon"

import React from "react";
import { queryByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

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
    render(<OwmYrIcon owmCode={200} isDay={false} cloudiness={85} /> );
    let icon = screen.getByRole("img")
    
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', 'lightrainandthunder.svg')

    render(<OwmYrIcon owmCode={221} isDay={true} cloudiness={35}/> );
    icon = screen.getAllByRole("img")[1]
    
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', 'rainshowersandthunder_day.svg')
});


it("doesn't renders icon with null code", () => {
    const {queryByRole} = render (<OwmYrIcon owmCode={null} />)

    expect(queryByRole(/img/)).toBeNull()
})