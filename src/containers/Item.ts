import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Item } from '../types';
import ItemComponent, { Props as ItemProps } from '../components/Item';
import { ReducerState, getItemById, isItemLoading } from '../store/root';

interface StateProps {
  item: Item;
  isLoading: boolean;
}

interface DispatchProps {}

interface OwnProps {
  id: number;
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state: ReducerState, ownProps: OwnProps) => ({
  item: getItemById(state, ownProps.id),
  isLoading: isItemLoading(state, ownProps.id),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {};

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps): ItemProps => (
  Object.assign({}, stateProps, dispatchProps)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ItemComponent);
