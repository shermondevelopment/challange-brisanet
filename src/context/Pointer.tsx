import React, { createContext, useState, useEffect } from 'react'

type PointerType = {
  lat: number | undefined
  lng: number | undefined
  img: string
  title: string
}

type ContextType = {
  pointers: PointerType[]
  setPointers: React.Dispatch<React.SetStateAction<PointerType[]>>
}

export const PointerContext = createContext<ContextType>({
  pointers: [],
  setPointers: () => null
})

type Props = { children: React.ReactNode }

export const PointerProvider: React.FC<Props> = ({ children }) => {
  const localState = JSON.parse(localStorage.getItem('pointers') || '[]')

  const [pointers, setPointers] = useState<PointerType[]>(localState)

  useEffect(() => {
    localStorage.setItem('pointers', JSON.stringify(pointers))
  }, [pointers])

  return (
    <PointerContext.Provider value={{ pointers, setPointers }}>
      {children}
    </PointerContext.Provider>
  )
}
