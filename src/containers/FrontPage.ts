import { connect } from 'react-redux';
import StoryList from '../components/StoryList';
import { ReducerState, getStoryIds } from '../store/root';

const mapStateToProps = (state: ReducerState) => ({
  storyIds: getStoryIds(state),
});

export default connect(
  mapStateToProps
)(StoryList);
