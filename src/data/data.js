import googlePlay from "./../img/google-play.svg"
import appStore from "./../img/app-store.svg"
import r1 from "./../img/r1.png"
import r2 from "./../img/r2.png"
import r3 from "./../img/r3.png"
import r4 from "./../img/r4.png"
export const statistics = [
    { id: 1, title: '20k+', subtitle: 'subscribes' },
    { id: 2, title: '19,5k', subtitle: 'successful cases' },
    { id: 3, title: '4.8/5', subtitle: 'rating' }
]

export const links = [
    { img: googlePlay, text: 'get it on', title: 'Google play' },
    { img: appStore, text: 'available on', title: 'App Store' }
]

export const reviews = [
    {
        id: 1,
        user: {
            photo: r1,
            name: 'lorenzo',
            username: '@lorenzoo'
        },
        text: 'Amazing Telegram bot! Provides real-time' +
            ' crypto prices and news'
    },
    {
        id: 2,
        user: {
            photo: r2,
            name: 'adalina',
            username: '@ada'
        },
        text: 'Must-have bot for crypto traders. Accurate signals and analysis'
    },
    {
        id: 3,
        user: {
            photo: r3,
            name: 'alexander',
            username: '@alex_x'
        },
        text: 'Superb cryptocurrency bot! Quick updates and reliable data'
    },
    {
        id: 4,
        user: {
            photo: r4,
            name: 'rushana',
            username: '@Hana'
        },
        text: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'
    }

]