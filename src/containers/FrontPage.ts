import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import ItemPage from '../components/ItemPage';
import { ReducerState, getTopStoryIds } from '../store/root';

interface StateProps {
  itemIds: number[];
}

interface DispatchProps {}

interface OwnProps {}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state: ReducerState) => ({
  itemIds: getTopStoryIds(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);
