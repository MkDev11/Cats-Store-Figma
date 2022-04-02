import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { changeNavDisplay } from "../../Redux/Actions/headerActions";
import { RootState } from "../../Redux/store";
import "./Header.scss";

const Header: React.FC = () => {
  const { headerLinks, isBurgerHidden, isBurgerOpen, isHomePage, isOverviewPage } =
    useSelector((state: RootState) => state.headerReducer);
  const { isFetching, isFetchError, cards, likedCardsData } = useSelector((state: RootState) => state.cardReducer);
  const [textCount, setTextCount] = useState<string>("cats");
  const dispatch = useDispatch();
  //
  const defineBurgerStatus = (): void => {
    if (window.innerWidth < 800) {
      dispatch(changeNavDisplay(false));
    } else if (window.innerWidth > 800) {
      dispatch(changeNavDisplay(true));
    }
  };
  //
  useLayoutEffect(() => {
    window.addEventListener("resize", defineBurgerStatus);
    window.addEventListener("load", defineBurgerStatus);
    return () => {
      window.removeEventListener("resize", defineBurgerStatus);
      window.removeEventListener("load", defineBurgerStatus);
    };
  }, []);

  useEffect(() => {
    if (likedCardsData.length === 1) {
      setTextCount("cat")
    }
    if (likedCardsData.length >= 2) {
      setTextCount("cats")
    }
  }, [isFetchError, likedCardsData])
  // 
  return (
    <header className={isOverviewPage ? "header header--minimized" : "header"}>
      <div className="container">
        <div className="header__section">
          <span className="icon">
            <SvgTemplate id="logo" />
          </span>
          <>
            {isBurgerHidden ? (
              <HeaderNav
                headerLinks={headerLinks}
                isBurgerHidden={isBurgerHidden}
              />
            ) : (
              <BurgerMenu
                headerLinks={headerLinks}
                isBurgerOpen={isBurgerOpen}
              />
            )}
          </>
          <div className="header__telephone telephone">
            <a className="telephone__number" href="tel:+544 3490 00000">
              +544 3490 00000
            </a>
            <span className="telephone__description">Call soon!</span>
          </div>
        </div>
        <>
          <>
            {isFetching ? (
              <h1 className="header__text header__text--loading">
                Loading
                <span className="header__text_dot"></span>
                <span className="header__text_dot"></span>
                <span className="header__text_dot"></span>
              </h1>
            ) : (
              <>
                {isOverviewPage ? <></>
                  :
                  <>
                    {isHomePage
                      ? <h1 className="header__text">Found {isFetchError ? "0" : cards.length} cats</h1>
                      : <h1 className="header__text">Selected {isFetchError ? "0" : likedCardsData.length} cats</h1>
                    }
                  </>
                }
              </>
            )}
          </>
        </>
      </div>
    </header>
  );
};

export default Header;
