import { Context, useContext } from "react";
import { NavigateProps, Outlet, Navigate as Redirect,RouteProps } from "react-router-dom";

type FunctionType = () => any;

interface PrivateRouteUsingContext<T> {
  context: Context<T>;
  accesWith: (context: T) => boolean;
  otherwiseRedirectTo?: FunctionType | NavigateProps;
}

export default function createPrivateRouteUsingContext<T>({
  context,
  accesWith,
  otherwiseRedirectTo = { to : "/" },
}: PrivateRouteUsingContext<T>): React.FC<RouteProps> {
  return function PrivateRoute() {
    const ctx = useContext(context);

    if (accesWith(ctx)) {
      return <Outlet />;
    }

    if (typeof otherwiseRedirectTo === "function") {
      return otherwiseRedirectTo();
    }

    return <Redirect {...otherwiseRedirectTo} replace />;
  };
}
