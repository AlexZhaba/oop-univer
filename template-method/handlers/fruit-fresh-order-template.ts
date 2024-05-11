import { HandleOrderTemplate, PaymentMethod } from "./handle-order-template";

export class FruitFreshOrderTemplate extends HandleOrderTemplate {
  protected getReceipt() {
    return `
      Приготовление фруктового фреша очень простой.
    `;
  }

  protected shouldWaterHeating() {
    return false;
  }

  protected getDishName() {
    return "Стакан";
  }

  protected getPaymentMethods(): PaymentMethod[] {
    return ["cash", "qr", "card"];
  }
}
