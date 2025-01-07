import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutStyled } from "./Checkout.styled";
import formValid, { FormFieldName } from "./Form/form.schema";
import SuccessModal from "../../components/SuccessModal/SuccessModal";

const {
  CheckoutContainer,
  Section,
  FormGroup,
  Label,
  Input,
  ErrorText,
  PaymentMethodContainer,
  PaymentOption,
  RadioInput,
  Button,
} = CheckoutStyled;

const { Adress, City, Zip, PaymentMethod, CardNumber, ExpiryDate, CVV } =
  FormFieldName;

const CheckoutPage: React.FC = () => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(formValid),
    mode: "all", // Esto permite la validación al escribir en los inputs
    defaultValues: {
      [Adress]: "",
      [City]: "",
      [Zip]: "",
      [PaymentMethod]: "creditCard",
      [CardNumber]: "",
      [ExpiryDate]: "",
      [CVV]: "",
    },
  });

  const [showModal, setShowModal] = useState(false);
  const showCampsCreditCard = getValues(PaymentMethod) === "creditCard";

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <Section>
        <h2>Dirección de Envío</h2>
        <FormGroup>
          <Label htmlFor="address">Dirección</Label>
          <Input
            id="address"
            type="email"
            {...register(Adress)}
            {...{ autoComplete: "off" }}
            placeholder="Ingrese su dirección"
            onChange={(event: any) => {
              console.log(event.target.value);
              setValue(Adress, event.target.value, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            value={getValues(Adress)}
          />
          {touchedFields[Adress] ? (
            <ErrorText>{errors?.address?.message}</ErrorText>
          ) : undefined}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">Ciudad</Label>
          <Input
            id="city"
            {...register(City)}
            placeholder="Ingrese su ciudad"
            onChange={(event: any) =>
              setValue(City, event.target.value, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            value={getValues(City)}
          />
          {touchedFields[City] && (
            <ErrorText>{errors?.city?.message}</ErrorText>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="zip">Código Postal</Label>
          <Input
            id="zip"
            {...register(Zip)}
            placeholder="Ingrese su código postal"
            onChange={(event: any) =>
              setValue(Zip, event.target.value, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            value={getValues(Zip)}
          />
          {touchedFields[Zip] && <ErrorText>{errors?.zip?.message}</ErrorText>}
        </FormGroup>
      </Section>
      <Section>
        <h2>Método de Pago</h2>
        <PaymentMethodContainer>
          <PaymentOption>
            <RadioInput
              type="radio"
              id="creditCard"
              {...register(PaymentMethod)}
              onChange={(event: any) => {
                console.log(event, "value");
                setValue(PaymentMethod, event.target.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              value={"creditCard"}
            />
            {touchedFields[PaymentMethod] && (
              <ErrorText>{errors?.paymentMethod?.message}</ErrorText>
            )}
            <Label htmlFor="creditCard">Tarjeta de Crédito</Label>
          </PaymentOption>
          <PaymentOption>
            <RadioInput
              type="radio"
              id="paypal"
              {...register(PaymentMethod)}
              onChange={(event: any) =>
                setValue(PaymentMethod, event.target.value, {
                  shouldValidate: true,
                  shouldDirty: true,
                })
              }
              value={"paypal"}
            />
            <Label htmlFor="paypal">PayPal</Label>
          </PaymentOption>
        </PaymentMethodContainer>

        {touchedFields[PaymentMethod] && (
          <ErrorText>{errors?.paymentMethod?.message}</ErrorText>
        )}

        {showCampsCreditCard && (
          <>
            <FormGroup>
              <Label htmlFor="cardNumber">Número de Tarjeta</Label>
              <Input
                id="cardNumber"
                {...register(CardNumber)}
                placeholder="Ingrese el número de su tarjeta"
                maxLength={16}
                value={getValues(CardNumber)}
                onChange={(event) =>
                  setValue(CardNumber, event.target.value, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
              {touchedFields[CardNumber] && (
                <ErrorText>{errors?.cardNumber?.message}</ErrorText>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="expiryDate">Fecha de Expiración</Label>
              <Input
                id="expiryDate"
                {...register(ExpiryDate)}
                placeholder="MM/AA"
                onChange={(event) =>
                  setValue(ExpiryDate, event.target.value, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
              {touchedFields[ExpiryDate] && (
                <ErrorText>{errors?.expiryDate?.message}</ErrorText>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                {...register(CVV)}
                placeholder="Ingrese el CVV"
                onChange={(event) =>
                  setValue(CVV, event.target.value, {
                    shouldDirty: true,
                    shouldValidate: true,
                  })
                }
              />
              {touchedFields[CVV] && (
                <ErrorText>{errors?.cvv?.message}</ErrorText>
              )}
            </FormGroup>
          </>
        )}
      </Section>

      <Button onClick={() => setShowModal(true)} disabled={!isValid}>
        Confirmar Compra
      </Button>
      <SuccessModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </CheckoutContainer>
  );
};

export default CheckoutPage;
