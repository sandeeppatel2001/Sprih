import { useState, useEffect } from "react";

export default function App({
  search,
  category,
  setCategory,
  setSearch,
  users,
}) {
  function Clickeddrop(e) {
    e.target.classList.toggle("active");
    const dm = document.querySelector(".dropdown-menu");
    dm.classList.toggle("notactive");
  }

  function clickeddrop(cat) {
    setCategory(cat);
    const dm = document.querySelector(".dropdown-menu");
    dm.classList.toggle("notactive");
    const dt = document.querySelector(".dropdown-toggle");
    dt.classList.toggle("active");
  }

  const [CategoryList, setCategoryList] = useState({
    All: users.length,
  });
  useEffect(() => {
    const ft = () => {
      let clist = {};

      users.forEach((user) => {
        let keys = Object.keys(clist);
        if (
          keys.indexOf(user.designation) === -1 &&
          user.designation !== "Director"
        ) {
          clist[user.designation] = users.filter(
            (use) => use.designation === user.designation
          ).length;
        }
      });
      setCategoryList({ All: users.length, ...clist });
    };
    ft();
  }, [users]);

  return (
    <div className="Drop_search">
      <div className="Drop">
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={Clickeddrop}>
            {category}
          </button>
          <div className="dropdown-menu notactive">
            {CategoryList &&
              Object.keys(CategoryList).map((cat) => {
                return (
                  <p
                    key={cat}
                    style={{ cursor: "pointer" }}
                    onClick={() => clickeddrop(cat)}
                  >
                    {cat}({CategoryList[cat]})
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="Search">
        <input
          type="text"
          placeholder="SearchbyName..."
          value={search}
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
