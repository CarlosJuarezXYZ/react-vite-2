import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  ClothesStoreState,
  DispatchClothesStore,
} from "../domain/clothes-store";
import { clothesStoreInitialState, clothesStoreReducer } from "./reducer";

type ClothesStoreProviderType = PropsWithChildren<{
  extraState?: Partial<ClothesStoreState>;
}>;

const ClothesStoreStateContext = createContext<ClothesStoreState | undefined>(
  undefined
);
const ClothesStoreDispatchContext = createContext<
  DispatchClothesStore | undefined
>(undefined);

const ClothesStoreProvider: FC<ClothesStoreProviderType> = ({
  children,
  extraState,
}) => {
  const [state, dispatch] = useReducer(clothesStoreReducer, {
    ...clothesStoreInitialState,
    ...extraState,
  });

  return (
    <ClothesStoreStateContext.Provider value={state}>
      <ClothesStoreDispatchContext.Provider value={dispatch}>
        {children}
      </ClothesStoreDispatchContext.Provider>
    </ClothesStoreStateContext.Provider>
  );
};

const useClothesStoreState = (): ClothesStoreState => {
  const context = useContext(ClothesStoreStateContext) as ClothesStoreState;

  if (!context) {
    throw new Error(
      "useClothesStore must be use within a ClothesStoreContext"
    );
  }

  return context;
};

const useClothesStoreDispatch = (): DispatchClothesStore => {
  const context = useContext(
    ClothesStoreDispatchContext
  ) as DispatchClothesStore;

  if (!context) {
    throw new Error(
      "useClothesStoreDispatch must be use with a ClotingStoreDispatchContext"
    );
  }
  return context;
};

export {
  ClothesStoreProvider,
  useClothesStoreState,
  useClothesStoreDispatch,
};
