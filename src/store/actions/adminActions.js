// import actionTypes from './actionTypes';
// import { getAllCodeService } from '../../services/userService';

// export const fetchGenderStart = () => {
//     return async (dispatch, getStart) => {
//         try {
//             let res = await getAllCodeService('GENDER')
//             if (res && res.errCode === 0) {
//                 dispatch(fetchGenderSucess(res.data))
//             } else {
//                 dispatch(fetchGenderFaided())
//             }
//         }
//         catch (e) {
//             dispatch(fetchGenderFaided())
//             console.log("check err adminAction: ", e)
//         }
//     }
// }

// export const fetchGenderSucess = (genderData) => ({
//     type: actionTypes.FETCH_GENDER_SUCCESS,
//     data: genderData
// })

// export const fetchGenderFaided = () => ({
//     type: actionTypes.FETCH_GENDER_FAIDED
// })
