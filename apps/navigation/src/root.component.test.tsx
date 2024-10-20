import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByTestId } = render(<Root />);

    const appTitleElem = getByTestId("app-title");

    expect(appTitleElem).toBeInTheDocument();
    expect(appTitleElem).toHaveTextContent("Micro-Frontend");
  });
});
