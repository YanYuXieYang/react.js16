import { CalculateType } from "../actions";

// init state
const initState = {
  n1: '',
  n2: '',
  opr: '',
  eq: '',
  result: ''
}
// reducer
var reducerCalculator = (state = initState, action) => {
  switch (action.type) {
    case CalculateType.NUM:
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: action.result
      };
    case CalculateType.OPR:
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: action.result
      };
    case CalculateType.CLS:
      return {
        n1: '',
        n2: '',
        opr: '',
        eq: '',
        result: ''
      };
    case CalculateType.EQUALS:
      console.log('action:', action);
      switch (action.opr) {
        case 'add':
          return {
            n1: action.n1,
            n2: action.n2,
            opr: action.opr,
            eq: action.eq,
            result: Number.parseInt(action.n1) + Number.parseInt(action.n2)
          };
        case 'minus':
          return {
            n1: action.n1,
            n2: action.n2,
            opr: action.opr,
            eq: action.eq,
            result: Number.parseInt(action.n1) - Number.parseInt(action.n2)
          };
        case 'multiple':
          return {
            n1: action.n1,
            n2: action.n2,
            opr: action.opr,
            eq: action.eq,
            result: Number.parseInt(action.n1) * Number.parseInt(action.n2)
          };
        case 'divide':
          if (Number.parseInt(action.n2) !== 0) {
            return {
              n1: action.n1,
              n2: action.n2,
              opr: action.opr,
              eq: action.eq,
              result: Number.parseInt(action.n1) / Number.parseInt(action.n2)
            }
          } else {
            return {
              n1: action.n1,
              n2: action.n2,
              opr: action.opr,
              eq: action.eq,
              result: Number.NaN
            }
          }
        default:
          return {
            n1: action.n1,
            n2: action.n2,
            opr: action.opr,
            eq: action.eq,
            result: 0
          }
      }
    default:
      return state;
  }
}
// export
export default reducerCalculator;