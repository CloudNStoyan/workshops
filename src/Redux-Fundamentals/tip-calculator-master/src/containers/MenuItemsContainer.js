import { MenuItems } from '../components/MenuItems';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export const MenuItemContainer = connect(mapStateToProps)(MenuItems);
