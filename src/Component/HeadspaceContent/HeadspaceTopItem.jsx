import React from "react";
import { IoIosLock } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function HeadspaceTopItem() {
  const { data, isSubscribed } = useSelector((state) => state.data);

  return (
    <div className="topitem-box">
      <div className="topitem-img-cont">
        <img className="top-item-img" src={data.MainCard?.url} alt="" />
      </div>
      <div className="topitem-txt-cont">
        <div className="featured">
          <p>Featured</p>
        </div>
        <div className="topitem-head box-head">
          {!isSubscribed ? <IoIosLock /> : <></>}

          {data.MainCard?.name}
          <p></p>
        </div>
        <div className="topitem-info">
          {data.MainCard?.type == "meditate" ? (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              width="1.3em"
              height="1.3em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="css-lnnzhi"
            >
              <path
                d="M12.53 12.97c-.12 0-.25-.03-.36-.09l-1.78-.99a.753.753 0 01-.29-1.02c.2-.36.66-.49 1.02-.29l1.77.98a.753.753 0 01-.36 1.41zM10.76 5.62a.753.753 0 01-.42-1.38l1.71-1.12c.35-.23.81-.13 1.04.22.23.35.13.81-.22 1.04l-1.7 1.12c-.13.08-.27.12-.41.12zM7.51 12.9a4.84 4.84 0 01-4.12-2.28H1.75c-.41 0-.75-.33-.75-.75V6.49c0-.41.34-.75.75-.75h1.44c.84-1.6 2.48-2.61 4.32-2.61.42 0 .75.34.75.75v8.26c0 .42-.34.76-.75.76zM2.5 9.12h1.32c.28 0 .54.16.67.41.46.92 1.29 1.56 2.27 1.78V4.72c-1.07.24-1.97.99-2.39 2.05-.11.29-.39.47-.7.47H2.5v1.88zM13.58 8.83h-2.83c-.42 0-.75-.33-.75-.75s.34-.75.75-.75h2.83c.41 0 .75.34.75.75s-.34.75-.75.75z"
                fill="#3A3938"
              ></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              width="1.3em"
              height="1.3em"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="css-lnnzhi"
            >
              <path
                d="M13.68 6.26a3 3 0 01-2.53-3.4.75.75 0 00-.57-.84.74.74 0 00-.88.49L7.83 7.96a3.687 3.687 0 00-1.88-1.44c-.4-.13-.8-.2-1.2-.2-1.57 0-3.03.99-3.55 2.55-.66 1.96.39 4.09 2.36 4.75.4.13.8.2 1.2.2 1.57 0 3.03-.99 3.55-2.55l1.93-5.7a4.525 4.525 0 003.23 2.18c.41.05.79-.22.85-.63.05-.42-.23-.8-.64-.86zm-8.93 6.07c-.24 0-.48-.04-.72-.12a2.243 2.243 0 01-1.41-2.85 2.246 2.246 0 012.85-1.41 2.25 2.25 0 01-.72 4.38z"
                fill="#3A3938"
              ></path>
            </svg>
          )}

          {data.MainCard?.info}
          <p></p>
        </div>
        {isSubscribed ? (
          <Link style={{ textDecoration: "none" }} to="/myHeadspace/music">
            <button className="topitem-button">Listen Music</button>
          </Link>
        ) : (
          <button className="topitem-button">
            <IoIosLock />
            Start My Free Trail
          </button>
        )}
      </div>
    </div>
  );
}
