import React, { useEffect, useState } from 'react'

/* style */
import * as S from './style'

/* components */
import Header from '../../components/Header'
import Main from '../../components/Main'
import InputSearch from '../../components/InputSearch'
import CardCommics from '../../components/CardCommics'
import Modal from '../../components/Modal'

/* axios */
import axios from 'axios'

/* md5 */
import md5 from 'md5'

/* fns */
import { format } from 'date-fns'

interface ComicsType {
  id: number
  title: string
  description?: string
  image: string
  date: string
  price: string
}

const Commics: React.FC = (): React.ReactElement => {
  const [commics, setCommics] = useState<Array<ComicsType>>([])
  const [commicSearch, setCommicSearch] = useState<string>('')

  const ammountCommicsWithDataOfApi = (commicApi: any) => {
    const commicsIterator = commicApi.map((item: any) => {
      return {
        id: item.id,
        description: item.description,
        title: item.title,
        image: `${item.thumbnail.path ?? 'default'}/portrait_uncanny.${
          item.thumbnail.extension
        }`,
        date:
          item.dates[0]?.date &&
          format(new Date(item.dates[0]?.date), 'dd/MM/yyyy'),
        price: item.prices[0]?.price
      }
    })
    setCommics(commicsIterator)
  }

  const fetchComics = async () => {
    const time = Number(new Date())
    const hash = md5(
      time + import.meta.env.VITE_PRIVATE_KEY + import.meta.env.VITE_PUBLIC_KEY
    )

    const ammountUrl = `https://gateway.marvel.com:443/v1/public/comics?limit=60&apikey=${
      import.meta.env.VITE_PUBLIC_KEY
    }&hash=${hash}${commicSearch != '' ? `&title=${commicSearch}` : ''}`

    try {
      const { data } = await axios.get(ammountUrl)
      ammountCommicsWithDataOfApi(data.data.results)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchComics()
  }, [commicSearch])

  return (
    <>
      <Header />
      <Modal />
      <Main>
        <S.ContentMain>
          <S.InputArea>
            <InputSearch
              commicSearch={commicSearch}
              setCommicSearch={setCommicSearch}
            />
          </S.InputArea>
          <S.CardsCommicsArea>
            {commics.map((item) => (
              <CardCommics
                id={item.id}
                img={item.image}
                title={item.title}
                price={item.price}
                description={item?.description}
                date={item.date}
                key={item.id}
              />
            ))}
          </S.CardsCommicsArea>
        </S.ContentMain>
      </Main>
    </>
  )
}

export default Commics
