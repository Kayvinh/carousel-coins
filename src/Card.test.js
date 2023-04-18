import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import photos from "./photos";

it("smoketest - renders without crashing", function () {
    render(<Card 
        caption={photos[0].caption} 
        src={photos[0].src} 
        currNum={1} 
        totalNum={3} 
    />);
});
  // end

it("matches snapshot", function () {
    const { container } = render(
    <Card 
        caption={photos[0].caption} 
        src={photos[0].src} 
        currNum={1} 
        totalNum={3} 
    />);
    expect(container).toMatchSnapshot();
});