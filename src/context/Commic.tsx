import React, { createContext, useState } from 'react'

const initialValues = {
  id: 0,
  date: '',
  image: '',
  price: '',
  title: '',
  description: ''
}

type ComicsType = {
  id: number
  title: string
  description?: string
  image: string
  date: string
  price: string
}

type ContextType = {
  commic: ComicsType
  setCommic: React.Dispatch<React.SetStateAction<ComicsType>>
}

export const CommicContext = createContext<ContextType>({
  commic: initialValues,
  setCommic: () => null
})

type Props = { children: React.ReactNode }

export const CommicProvider: React.FC<Props> = ({ children }) => {
  const [commic, setCommic] = useState<ComicsType>(initialValues)

  return (
    <CommicContext.Provider value={{ commic, setCommic }}>
      {children}
    </CommicContext.Provider>
  )
}
