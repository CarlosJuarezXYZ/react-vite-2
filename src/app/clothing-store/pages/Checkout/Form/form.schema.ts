import { object as yupObject, string as yupString } from "yup";

export default yupObject({
  address: yupString().required("Dirección es obligatoria"),
  city: yupString().required("Ciudad es obligatoria"),
  zip: yupString().required("Código Postal es obligatorio"),
  paymentMethod: yupString().required("Selecciona un método de pago"),
  cardNumber: yupString().when("paymentMethod", {
    is: "creditCard",
    then: yupString().required("Número de tarjeta es obligatorio"),
  }),
  expiryDate: yupString().when("paymentMethod", {
    is: "creditCard",
    then: yupString().required("Fecha de expiración es obligatoria"),
  }),
  cvv: yupString().when("paymentMethod", {
    is: "creditCard",
    then: yupString().required("CVV es obligatorio"),
  }),
});
