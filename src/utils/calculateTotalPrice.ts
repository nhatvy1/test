function calculateTotalPrice(products: any): number {
  return products.reduce((total: any, product: any) => {
    const price = product.trongluong?.price || product.price || 0;
    return total + price * product.quantity;
  }, 0);
}

export default calculateTotalPrice