import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
   if (!props.profile) {
    return <Preloader />
   }

   
  return (
    <div>
      <div>
        <img
          src="https://assets.change.org/photos/3/kj/jh/GzkJJHCKBWFcfEA-1600x900-noPad.jpg?1646537308" />
      </div>
      <div className={s.descriptionaBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  )
}
export default ProfileInfo;