import React, {
  FC, createContext, useState, useContext,
  Dispatch, SetStateAction
} from 'react';


interface SidebarContextReturnType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextReturnType>({
  isOpen: false,
  setIsOpen(){}
});

export const SidebarProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { Provider } = SidebarContext;

  return (
    <Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Provider>
  )
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}