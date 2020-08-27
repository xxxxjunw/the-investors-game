import { connect } from 'react-redux';
import { incrementTimeAction } from '../../actions/warp_time_actions';
import { FRAMES_PER_SEC } from "../../utils/constants"

import React, { useEffect } from 'react';
const WarpedTime = ({ warpedTime, incrementWarpedTime }) => {
    //didMount

    useEffect(() => {
        const id = requestAnimationFrame(incrementWarpedTime);
        return () => cancelAnimationFrame(id);
    }, [incrementWarpedTime]);

    return (
        <div className='nav-link shadowed-card w-100 nav-top-card'>
            <div>
            <p className="nav-top-p">Current Time:</p>
            <p className="time"> {`${warpedTime.format("dddd, MMMM Do YYYY, h:mm a")}`}</p >
            </div>
            <svg width="70" height="76" viewBox="0 0 70 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M35.5859 76.0001C54.0962 76.0001 69.1018 72.2633 69.1018 67.6538C69.1018 63.0443 54.0962 59.3075 35.5859 59.3075C17.0756 59.3075 2.07007 63.0443 2.07007 67.6538C2.07007 72.2633 17.0756 76.0001 35.5859 76.0001Z" fill="#B8CBCD" />
                <path d="M34.8511 69.6405C53.4907 69.6405 68.6011 54.4569 68.6011 35.7269C68.6011 16.9969 53.4907 1.81323 34.8511 1.81323C16.2115 1.81323 1.10107 16.9969 1.10107 35.7269C1.10107 54.4569 16.2115 69.6405 34.8511 69.6405Z" fill="#F6AD55" fill-opacity="0.8" />
                <path d="M34.5339 57.8102C46.572 57.8102 56.3308 48.0041 56.3308 35.9077C56.3308 23.8112 46.572 14.0051 34.5339 14.0051C22.4959 14.0051 12.7371 23.8112 12.7371 35.9077C12.7371 48.0041 22.4959 57.8102 34.5339 57.8102Z" fill="white" />
                <path d="M59.7263 37.0333C60.503 37.0333 61.1326 36.4006 61.1326 35.6202C61.1326 34.8398 60.503 34.2072 59.7263 34.2072C58.9497 34.2072 58.3201 34.8398 58.3201 35.6202C58.3201 36.4006 58.9497 37.0333 59.7263 37.0333Z" fill="#783741" />
                <path d="M9.80444 37.0333C10.5811 37.0333 11.2107 36.4006 11.2107 35.6202C11.2107 34.8398 10.5811 34.2072 9.80444 34.2072C9.02779 34.2072 8.39819 34.8398 8.39819 35.6202C8.39819 36.4006 9.02779 37.0333 9.80444 37.0333Z" fill="#783741" />
                <path d="M35.1167 61.7619C35.8933 61.7619 36.5229 61.1293 36.5229 60.3489C36.5229 59.5684 35.8933 58.9358 35.1167 58.9358C34.34 58.9358 33.7104 59.5684 33.7104 60.3489C33.7104 61.1293 34.34 61.7619 35.1167 61.7619Z" fill="#783741" />
                <path opacity="0.2" d="M34.868 10.0825C52.0658 10.0825 66.2415 23.0389 68.2826 39.7647C68.4493 38.4004 68.5449 37.0156 68.5449 35.6068C68.5449 16.9175 53.4678 1.7666 34.8673 1.7666C16.2683 1.7666 1.19116 16.9175 1.19116 35.6068C1.19116 37.0156 1.28679 38.4011 1.45343 39.7647C3.4946 23.0389 17.671 10.0825 34.868 10.0825Z" fill="#783741" />
                <path d="M68.6011 34.9136C68.6011 53.6439 53.4909 68.8273 34.8511 68.8273C16.2112 68.8273 1.10107 53.6439 1.10107 34.9136C1.10107 16.1834 16.2112 1 34.8511 1C42.6326 1 49.7995 3.64668 55.5082 8.09219" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M58.3198 1.6062V11.598H48.4761" stroke="#783741" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35.1167 12.3045C35.8933 12.3045 36.5229 11.6719 36.5229 10.8915C36.5229 10.111 35.8933 9.47839 35.1167 9.47839C34.34 9.47839 33.7104 10.111 33.7104 10.8915C33.7104 11.6719 34.34 12.3045 35.1167 12.3045Z" fill="#783741" />
                <path d="M28.2484 29.638H26.5518L24.1055 31.9417V34.3371L26.4076 32.1813H26.4653V44.0663H28.2484V29.638Z" fill="black" />
                <path d="M34.1696 44.2635C36.2506 44.2635 37.7021 42.1923 37.7021 39.325C37.7021 36.5492 36.3852 34.5484 34.5973 34.5484C33.7995 34.5484 33.093 35.0134 32.7277 35.6474H32.67L32.9536 31.822H37.1878V29.638H31.4781L30.9639 37.0776L32.5739 37.4651C32.9055 36.9296 33.5303 36.5703 34.1215 36.5774C35.2029 36.5844 35.9815 37.7539 35.9767 39.3884C35.9815 41.0017 35.2221 42.15 34.1696 42.15C33.2804 42.15 32.5643 41.3257 32.5018 40.1422H30.7716C30.8197 42.5375 32.2471 44.2635 34.1696 44.2635Z" fill="black" />
                <path d="M44.5749 41.361C44.5797 43.0377 45.3054 44.4678 46.656 44.4678C48.0017 44.4678 48.7418 43.0377 48.737 41.361V40.6001C48.7418 38.9093 48.0209 37.4932 46.656 37.4932C45.3247 37.4932 44.5797 38.9234 44.5749 40.6001V41.361ZM39.5717 33.1042C39.5765 34.7809 40.3022 36.197 41.6576 36.197C42.9985 36.197 43.7386 34.795 43.7338 33.1042V32.3433C43.7386 30.6525 43.0177 29.2365 41.6576 29.2365C40.3311 29.2365 39.5765 30.6525 39.5717 32.3433V33.1042ZM40.0042 44.0663H41.2106L47.9777 29.638H46.7713L40.0042 44.0663ZM45.8293 40.6001C45.8341 39.8533 46.0504 39.0995 46.656 39.0995C47.2904 39.0995 47.4778 39.8533 47.473 40.6001V41.361C47.4778 42.1077 47.2711 42.8475 46.656 42.8475C46.0408 42.8475 45.8341 42.1007 45.8293 41.361V40.6001ZM40.8357 32.3433C40.8405 31.6036 41.0472 30.8427 41.6576 30.8427C42.292 30.8427 42.4746 31.5965 42.4698 32.3433V33.1042C42.4746 33.851 42.2727 34.5907 41.6576 34.5907C41.0424 34.5907 40.8405 33.851 40.8357 33.1042V32.3433Z" fill="black" />
            </svg>

    </div>
    
    ) // Todo : change style !!!
};

const mapStateToProps = (state) => ({
    warpedTime: state.warpedTime
});

const mapDispatchToProps = (dispatch) => {
    let lastTime = 0;
    const incrementWarpedTime = (time) => {
        const timeDelta = time - lastTime;
        if (timeDelta >= 1000 / FRAMES_PER_SEC) {
            dispatch(incrementTimeAction(timeDelta));
            lastTime = time;
        }
        requestAnimationFrame(incrementWarpedTime);
    }
    return { incrementWarpedTime: incrementWarpedTime };
};

const WarpedTimeContainer = connect(mapStateToProps, mapDispatchToProps)(WarpedTime);

export default WarpedTimeContainer;