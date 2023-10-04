export const Recomendations = (): JSX.Element => {
  const recomendationItems = [
    {
      genre: "політика",
      title: "Косово",
      postsCount: 2356
    },
    {
      genre: "технології",
      title: "Майбутнє штучного інтелекту",
      postsCount: 1248
    },
    {
      genre: "мистецтво",
      title: "Сучасні тренди у візуальному мистецтві",
      postsCount: 789
    },
    {
      genre: "здоров'я",
      title: "Психічне здоров'я та стрес",
      postsCount: 1502
    },
    {
      genre: "природа",
      title: "Екосистеми та їх важливість",
      postsCount: 1034
    },
    {
      genre: "наука",
      title: "Секрети космосу: темні матерії та енергія",
      postsCount: 2098
    }
  ]
  return <aside className="flex flex-col justify-center w-1/3 h-screen place-items-center border-l-2 border-light">
    <div className="flex flex-row">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
      </svg>
      <input type="text" className="rounded-3xl placeholder:text-gray px-5 py-5 cursor-pointer transition ease cursor-pointer">

      </input>
    </div>

    <div className="bg-gray rounded-3xl">
      <div className="text-3xl font-bold p-5">
        Тренди для вас
      </div>
      {recomendationItems.map((recomendation) => {
        return <div className="leading-tight pb-2 hover:bg-gray-hover w-full transition ease cursor-pointer">
          <div className="px-5  align-middle flex flex-col">
            <div className="text-light-gray">{recomendation.genre}</div>
            <div>{recomendation.title}</div>
            <div className="text-light-gray">{recomendation.postsCount} posts</div>
          </div>
        </div>
      })}
      <div className="rounded-b-3xl hover:bg-gray-hover w-full px-5 py-5 cursor-pointer transition ease cursor-pointer">
        Показати більше
      </div>
    </div>

  </aside>
}