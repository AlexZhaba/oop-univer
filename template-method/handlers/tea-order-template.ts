import { HandleOrderTemplate, PaymentMethod } from "./handle-order-template";

export class TeaOrderTemplate extends HandleOrderTemplate {
  protected getReceipt() {
    return `
      Приготовление чая очень простой.
    `;
  }

  protected shouldWaterHeating() {
    return true;
  }

  protected getDishName() {
    return "Чашка";
  }

  protected getPaymentMethods(): PaymentMethod[] {
    return ["card", "qr"];
  }
}
