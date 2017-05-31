import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import ItemList from '../components/ItemList';
import { ReducerState, getTopStoryIds } from '../store/root';

interface StateProps {
  itemIds: number[];
}

interface DispatchProps {}

interface OwnProps {}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state: ReducerState) => ({
  itemIds: getTopStoryIds(state),
  limit: Infinity,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
