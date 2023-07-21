import { useEffect, useState } from 'react'

import '@styles/_form.scss'
import api from '@api'

function Form() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg'
  })
  const [allMemes, setAllMemes] = useState({})
  const getMemeImage = () => {
    const { memes } = allMemes.data
    const randomNumber = Math.floor(Math.random() * memes.length)
    const { url } = memes[randomNumber]

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url
    }))
  };

  const fetchMemes = async () => {
    const { data } = await api.getMemes()
    setAllMemes(data)
  }

  useEffect(() => fetchMemes, [])

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <>
      <section className='form'>
        <input
          className='form__input'
          type='text'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='form__input'
          type='text'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button onClick={getMemeImage} className='form__button' type='button'>
          Get a new meme image 🖼
        </button>
      </section>
      <section className='meme'>
        <img className='meme__image' src={meme.randomImage} alt='meme' />
        <h2 className='meme__text meme__text--top'>{meme.topText}</h2>
        <h2 className='meme__text meme__text--bottom'>{meme.bottomText}</h2>
      </section>
    </>
  )
}

export default Form
