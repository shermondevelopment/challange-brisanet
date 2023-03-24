import React, { createContext, useState } from 'react'

type ContextType = {
  opened: boolean
  setOpenedModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ContextType>({
  opened: false,
  setOpenedModal: () => null
})

type Props = { children: React.ReactNode }

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [opened, setOpenedModal] = useState(false)

  return (
    <ModalContext.Provider value={{ opened, setOpenedModal }}>
      {children}
    </ModalContext.Provider>
  )
}
