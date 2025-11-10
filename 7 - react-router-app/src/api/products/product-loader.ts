export const productsLoader = async () => {
  // Simulate an API call
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Product A", price: 29.99 },
        { id: "2", name: "Product B", price: 45.5 },
        { id: "3", name: "Product C", price: 12.0 },
        { id: "4", name: "Product D", price: 75.25 },
        { id: "5", name: "Product E", price: 99.99 },
      ]);
    }, 1000);
  });

  return response;
};
