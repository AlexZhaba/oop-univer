import { HandleOrderTemplate, PaymentMethod } from "./handle-order-template";

export class NonAlcoholicCocktailOrderTemplate extends HandleOrderTemplate {
  protected getReceipt() {
    return `
      Приготовление безалкогольного коктейля очень простой.
    `;
  }

  protected shouldWaterHeating() {
    return false;
  }

  protected getDishName() {
    return "Стакан";
  }

  protected getPaymentMethods(): PaymentMethod[] {
    return ["cash", "qr"];
  }
}
