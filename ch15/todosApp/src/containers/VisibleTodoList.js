import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknow filter:' + filter);
  }
}

// mapStateToProps
function mapStateToProps (state) {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
}
// mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});
// export connect
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);