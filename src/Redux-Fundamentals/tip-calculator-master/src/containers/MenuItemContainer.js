import { MenuItem } from '../components/MenuItem';
import { connect } from 'react-redux';
import {
  removeMenuItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      remove: () => removeMenuItem(ownProps.uuid),
      updatePrice: (price) => updatePrice(ownProps.uuid, price),
      updateQuantity: (quantity) => updateQuantity(ownProps.uuid, quantity)
    },
    dispatch
  );
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
