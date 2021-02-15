import itemService from '../services/itemService';
import { loading, doneLoading } from './systemActions'

export function loadItems() {
  return async dispatch => {
    dispatch(loading)

    try {
      const items = await itemService.query();
      dispatch({ type: 'SET_ITEMS', items });
      
    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err);
    }
    
    finally {
      
        dispatch(doneLoading)
        
    }
  };
}

// export function addReview(item) {
//   return async dispatch => {
//     try {
//       const addedReview = await itemService.add(item);
//       dispatch({ type: 'REVIEW_ADD', item: addedReview });
//     } catch (err) {
//       console.log('ReviewActions: err in addReview', err);
//     }
//   };
// }
