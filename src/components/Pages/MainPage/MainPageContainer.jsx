import { connect } from "react-redux";
import {
  toggleIsFavourite,
  toggleSortCards,
  fetchToggle,
} from "../../../Redux/actions";
import MainPage from "./MainPage";
import requestHandler from "../../../Redux/Middleware/request";

const mapStateToProps = (state) => {
  return {
    headerLinks: state.mainPage.headerLinks,
    cards: state.mainPage.cards,
    sortButtons: state.mainPage.sortButtons,
    catsCount: state.mainPage.catsCount,
    isFetching: state.mainPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSortCards: (id) => dispatch(toggleSortCards(id)),
    toggleIsFavourite: (value, id) => dispatch(toggleIsFavourite(value, id)),
    requestHandler: () => dispatch(requestHandler()),
    fetchToggle: (value) => dispatch(fetchToggle(value)),
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainContainer;