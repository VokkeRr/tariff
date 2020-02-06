import React from 'react'
import Tariff from './components/tarifes/Tariff'

export default function App() {
    const tariffs = [
        { title: "Мой онлайн+", price: 700, unlim: "безлимит на Tele2 России", min: 800, mintitle: "минут на остальные номера России", gb: 30, gbtitle: "гигабайт интернета" },
        { title: "Везде онлайн", price: 500, unlim: "безлимит на Tele2 России", min: 500, mintitle: "минут на остальные номера России", gb: 40, gbtitle: "гигабайт интернета" },
        { title: "Мой онлайн", price: 400, unlim: "безлимит на Tele2 России", min: 500, mintitle: "минут на остальные номера России", gb: 15, gbtitle: "гигабайт интернета" }
    ]
    return (
        <div>
            <Tariff title={tariffs[0].title} price={tariffs[0].price} unlim={tariffs[0].unlim} min={tariffs[0].min} mintitle={tariffs[0].mintitle} gb={tariffs[0].gb} gbtitle={tariffs[0].gbtitle} />
            <Tariff title={tariffs[1].title} price={tariffs[1].price} unlim={tariffs[1].unlim} min={tariffs[1].min} mintitle={tariffs[1].mintitle} gb={tariffs[1].gb} gbtitle={tariffs[1].gbtitle} />
            <Tariff title={tariffs[2].title} price={tariffs[2].price} unlim={tariffs[2].unlim} min={tariffs[2].min} mintitle={tariffs[2].mintitle} gb={tariffs[2].gb} gbtitle={tariffs[2].gbtitle} />
        </div>
    )
}

