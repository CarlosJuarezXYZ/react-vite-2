import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutStyled } from "./Checkout.styled";

const {  CheckoutContainer,
  Section,
  FormGroup,
  Label,
  Input,
  ErrorText,
  PaymentMethodContainer,
  PaymentOption,
  RadioInput,
  Button} = CheckoutStyled;

// Validación con Yup
const validationSchema = Yup.object().shape({
  address: Yup.string().required("Dirección es obligatoria"),
  city: Yup.string().required("Ciudad es obligatoria"),
  zip: Yup.string().required("Código Postal es obligatorio"),
  paymentMethod: Yup.string().required("Selecciona un método de pago"),
  cardNumber: Yup.string().when("paymentMethod", {
    is: "creditCard",
    then: Yup.string().required("Número de tarjeta es obligatorio"),
  }),
  expiryDate: Yup.string().when("paymentMethod", {
    is: "creditCard",
    then: Yup.string().required("Fecha de expiración es obligatoria"),
  }),
  cvv: Yup.string().when("paymentMethod", {
    is: "creditCard",
    then: Yup.string().required("CVV es obligatorio"),
  }),
});

const CheckoutPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    trigger
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange", // Esto permite la validación al escribir en los inputs
    defaultValues: {
      address: "",
      city: "",
      zip: "",
      paymentMethod: "creditCard",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Checkout completado");
  };

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <h2>Dirección de Envío</h2>
          <FormGroup>
            <Label htmlFor="address">Dirección</Label>
            <Input
              id="address"
              {...register("address")}
              placeholder="Ingrese su dirección"
              onFocus={() => trigger("address")}
            />
            {  errors.address ? <ErrorText>{errors?.address?.message}</ErrorText> : undefined }
          </FormGroup>
          <FormGroup>
            <Label htmlFor="city">Ciudad</Label>
            <Input
              id="city"
              {...register("city")}
              placeholder="Ingrese su ciudad"
              onFocus={(e) => e.target.value && e.target.reportValidity()}
            />
            {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="zip">Código Postal</Label>
            <Input
              id="zip"
              {...register("zip")}
              placeholder="Ingrese su código postal"
              onFocus={(e) => e.target.value && e.target.reportValidity()}
            />
            {errors.zip && <ErrorText>{errors.zip.message}</ErrorText>}
          </FormGroup>
        </Section>

        <Section>
          <h2>Método de Pago</h2>
          <PaymentMethodContainer>
            <PaymentOption>
              <RadioInput
                type="radio"
                id="creditCard"
                value="creditCard"
                {...register("paymentMethod")}
              />
              <Label htmlFor="creditCard">Tarjeta de Crédito</Label>
            </PaymentOption>
            <PaymentOption>
              <RadioInput
                type="radio"
                id="paypal"
                value="paypal"
                {...register("paymentMethod")}
              />
              <Label htmlFor="paypal">PayPal</Label>
            </PaymentOption>
          </PaymentMethodContainer>

          {errors.paymentMethod && (
            <ErrorText>{errors.paymentMethod.message}</ErrorText>
          )}

          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) =>
              field.value === "creditCard" && (
                <>
                  <FormGroup>
                    <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                    <Input
                      id="cardNumber"
                      {...register("cardNumber")}
                      placeholder="Ingrese el número de su tarjeta"
                      onFocus={(e) =>
                        e.target.value && e.target.reportValidity()
                      }
                    />
                    {errors.cardNumber && (
                      <ErrorText>{errors.cardNumber.message}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="expiryDate">Fecha de Expiración</Label>
                    <Input
                      id="expiryDate"
                      {...register("expiryDate")}
                      placeholder="MM/AA"
                      onFocus={(e) =>
                        e.target.value && e.target.reportValidity()
                      }
                    />
                    {errors.expiryDate && (
                      <ErrorText>{errors.expiryDate.message}</ErrorText>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      {...register("cvv")}
                      placeholder="Ingrese el CVV"
                      onFocus={(e) =>
                        e.target.value && e.target.reportValidity()
                      }
                    />
                    {errors.cvv && <ErrorText>{errors.cvv.message}</ErrorText>}
                  </FormGroup>
                </>
              )
            }
          />
        </Section>

        <Button type="submit" disabled={!isValid}>
          Confirmar Compra
        </Button>
      </form>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
