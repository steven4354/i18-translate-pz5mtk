import React, { Suspense } from 'react';
import { render } from 'react-dom';
import './style.css';
import { useTranslation } from 'react-i18next'
import i18n from './i18n'
import Selector from './selector'

import Header from './header'
import Genre from './genre'
import Hero from './info'
import Actor from './actor'
import List from './utils/actorList'

const arr = [{title: 'New', year: 2011, rating: 9.0, vote_count: 924},{title: 'Old', rating: 5, vote_count: 6224}]

const genres = ['horror','action']
const App = () => {
  const { t } = useTranslation()
  return(
    <div>
        <button onClick={() => {i18n.changeLanguage('en')}}>En</button>
        <button onClick={() => {i18n.changeLanguage('ru')}}>Ru</button>
        <h1>{t('one.title')}</h1>
        <p>{t('one.text')}</p>
        <Selector />
        {
          arr.map(props => (
            <Header {...props}/>  
          ))
        }
        <Hero backDrop={'/RhUxjzNojIJsdZSYTn0CQvdKsn.jpg'} />
        {
          List.map(props => (<Actor {...props} />))
        }
    </div>
  )
}

render(
<Suspense fallback={<div>Loading...</div>}>
  <App />
</Suspense>, document.getElementById('root'));
