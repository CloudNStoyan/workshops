import { MenuItem } from '../components/MenuItem';
import { connect } from 'react-redux';
import { removeMenuItem } from '../store/items/actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      remove: () => removeMenuItem(ownProps.uuid)
    },
    dispatch
  );
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
