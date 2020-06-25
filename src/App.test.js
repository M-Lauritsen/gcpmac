import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Paragraph test", () => {
  test("render the paragraph on the page", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("p").text()).toContain(
      "React + Google Cloud + GCP cloud build"
    );
  });
});

describe("Classname test", () => {
  test("checks for classname App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").hasClass("App"));
  });
});

// describe("Paragraph test", () => {
//   test("render the paragraph on the page", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText("React + Google Cloud + GCP cloud build");
//     expect(linkElement).toBeInTheDocument();
//   });
// });
