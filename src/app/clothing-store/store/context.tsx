import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  ClothingStoreState,
  DispatchClothingStore,
} from "../domain/clothing-store";
import { clothingStoreInitialState, clothingStoreReducer } from "./reducer";

type ClothingStoreProviderType = PropsWithChildren<{
  extraState?: Partial<ClothingStoreState>;
}>;

const ClothingStoreStateContext = createContext<ClothingStoreState | undefined>(
  undefined
);
const ClothingStoreDispatchContext = createContext<
  DispatchClothingStore | undefined
>(undefined);

const ClothingStoreProvider: FC<ClothingStoreProviderType> = ({
  children,
  extraState,
}) => {
  const [state, dispatch] = useReducer(clothingStoreReducer, {
    ...clothingStoreInitialState,
    ...extraState,
  });

  return (
    <ClothingStoreStateContext.Provider value={state}>
      <ClothingStoreDispatchContext.Provider value={dispatch}>
        {children}
      </ClothingStoreDispatchContext.Provider>
    </ClothingStoreStateContext.Provider>
  );
};

const useClothingStoreState = (): ClothingStoreState => {
  const context = useContext(ClothingStoreStateContext) as ClothingStoreState;

  if (!context) {
    throw new Error(
      "useClothingStore must be use within a ClothingStoreContext"
    );
  }

  return context;
};

const useClothingStoreDispatch = (): DispatchClothingStore => {
  const context = useContext(
    ClothingStoreDispatchContext
  ) as DispatchClothingStore;

  if (!context) {
    throw new Error(
      "useClothingStoreDispatch must be use with a ClotingStoreDispatchContext"
    );
  }
  return context;
};

export {
  ClothingStoreProvider,
  useClothingStoreState,
  useClothingStoreDispatch,
};
