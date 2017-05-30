import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import StoryList from '../components/StoryList';
import { ReducerState, getTopStoryIds } from '../store/root';

interface StateProps {
  storyIds: number[];
}

interface DispatchProps {}

interface OwnProps {}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state: ReducerState) => ({
  storyIds: getTopStoryIds(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList);
