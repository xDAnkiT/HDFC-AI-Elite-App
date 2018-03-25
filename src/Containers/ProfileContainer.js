/**
 * Author: Ankit Jain
 * Project Name: Icicle App
 * Date: 01-March-2018
 */

import {connect} from 'react-redux';
import Profle from '../Components/Profile';

import {getProfileDetailsAction} from '../Actions/Profile';

const mapStateToProps = (state) => {
    console.log(state.getProfileReducer.items)
    return {profile: state.getProfileReducer.items, isFetching: state.getProfileReducer.isFetching}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProfile: () => {
            dispatch(getProfileDetailsAction());
        }
    };
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profle);
export default ProfileContainer;