import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import PlaygroundTemplate from '../../components/Playground';

const mapStateToProps = (state, {match}) => {
  const {section = 'playground'} = match.params;

  return {
    filterId: state.primitives[section].length ? 'filter' : '',
    playgroundType: state.playground.type,
    svgCode: state.playground.svgCode
  };
};

const Playground = withRouter(connect(
  mapStateToProps,
  null
)(PlaygroundTemplate));


export default Playground;
