import { object as yupObject, string as yupString } from "yup";

export enum FormFieldName {
  Adress = "address",
  City = "city",
  Zip = "zip",
  PaymentMethod = "paymentMethod",
  CardNumber = "cardNumber",
  ExpiryDate = "expiryDate",
  CVV = "cvv",
}

const { Adress, City, Zip, PaymentMethod, CardNumber, ExpiryDate, CVV } =
  FormFieldName;

export default yupObject({
  [Adress]: yupString().required("Dirección es obligatoria"),
  [City]: yupString().required("Ciudad es obligatoria"),
  [Zip]: yupString()
    .matches(/^\d{5}$/, "Código Postal debe tener 5 dígitos")
    .required("Código Postal es obligatorio"),
  [PaymentMethod]: yupString().required("Selecciona un método de pago"),
  [CardNumber]: yupString().when(PaymentMethod, ([paymentMethod], schema) => {
    if (paymentMethod === "creditCard") {
      return schema
        .required("Número de tarjeta es obligatorio")
        .matches(/^\d{16}$/, "El número de tarjeta debe tener 16 dígitos");
    }
    return schema;
  }),
  [ExpiryDate]: yupString().when(PaymentMethod, ([paymentMethod], schema) => {
    if (paymentMethod === "creditCard") {
      return schema
        .required("Fecha de expiración es obligatoria")
        .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "La fecha debe ser MM/AA");
    }
    return schema;
  }),
  [CVV]: yupString().when(PaymentMethod, ([paymentMethod], schema) => {
    if (paymentMethod === "creditCard") {
      return schema
        .required("CVV es obligatorio")
        .matches(/^\d{3}$/, "El CVV debe tener 3 dígitos");
    }
    return schema;
  }),
});
