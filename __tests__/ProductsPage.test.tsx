import { render, screen, waitFor } from "@testing-library/react";
import ProductsPage from "@/app/page";
import { fetchProducts } from "../src/app/Services/ProductService";
import { ProductModel } from "@/app/Models/ProductModel";

jest.mock("../src/app/Services/ProductService", () => ({
  fetchProducts: jest.fn(() => Promise.resolve([])),
}));

describe("ProductsPage", () => {
  it("should render page", () => {
    render(<ProductsPage />);
    const loaderElementById = screen.getByTestId("loader");
    const loaderElementByText = screen.getByText("Loading...");

    expect(loaderElementById).toBeInTheDocument();
    expect(loaderElementByText).toBeInTheDocument();
  });

  it("fetches and displays products", async () => {
    const mockProducts: ProductModel[] = [
      {
        id: 1,
        name: "Product 1",
        price: 1.1,
        currency: "EUR",
        category: "TestFruit",
        description: "Test Description",
      },
      {
        id: 2,
        name: "Product 2",
        price: 1.1,
        currency: "TUBRIK",
        category: "Testingus",
        description: "Test disco ball",
      },
    ];

    (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);

    render(<ProductsPage />);

    const loaderElement = screen.getByTestId("loader");

    await waitFor(() => {
      expect(loaderElement).not.toBeInTheDocument();
    });

    const product1Element = screen.getByText("Product 1");
    const product2Element = screen.getByText("Product 2");
    expect(product1Element).toBeInTheDocument();
    expect(product2Element).toBeInTheDocument();
  });

  it("fetches and there is no products", async () => {
    const mockProducts: never[] = [];

    (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);

    render(<ProductsPage />);

    const loaderElement = screen.getByTestId("loader");

    await waitFor(() => {
      expect(loaderElement).not.toBeInTheDocument();
    });

    const text = screen.getByTestId("nothingFound");
    expect(text).toBeInTheDocument();
  });
});
