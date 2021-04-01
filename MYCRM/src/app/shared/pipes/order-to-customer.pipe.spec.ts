import { OrderToCustomerPipe } from './order-to-customer.pipe';

describe('OrderToCustomerPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderToCustomerPipe();
    expect(pipe).toBeTruthy();
  });
});
