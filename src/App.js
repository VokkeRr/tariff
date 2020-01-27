import React from 'react'
import Tariff from './components/tarifes/Tariff'

export default function App() {
    const tariffs = [
        {title: "Мой онлайн+", price: 700, unlim:"безлимит на Tele2 России",min:"800 минут на остальные номера России",gb:"30 гигабайт интернета"},
        {title: "Везде онлайн", price: 500, unlim:"безлимит на Tele2 России",min:"500 минут на остальные номера России",gb: "40 гигабайт интернета"},
        {title: "Мой онлайн", price: 400, unlim:"безлимит на Tele2 России",min:"500 минут на остальные номера России",gb:"15 гигабайт интернета"}
    ]
    return (
        <div>
            <Tariff title={tariffs[0].title} price={tariffs[0].price} unlim={tariffs[0].unlim} min={tariffs[0].min} gb={tariffs[0].gb} />
            <Tariff title={tariffs[1].title} price={tariffs[1].price} unlim={tariffs[1].unlim} min={tariffs[1].min} gb={tariffs[1].gb} />
            <Tariff title={tariffs[2].title} price={tariffs[2].price} unlim={tariffs[2].unlim} min={tariffs[2].min} gb={tariffs[2].gb} />
        </div>
    )
}

