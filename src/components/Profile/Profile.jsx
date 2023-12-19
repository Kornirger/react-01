import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className={style.content}>
			<div className={style.content_top_bg_image}>
				<img
					src="https://oir.mobi/uploads/posts/2022-08/1661391591_7-oir-mobi-p-fon-dlya-profilya-feisit-pinterest-7.jpg"
					alt=""/>
			</div>
			<div className={style.content__user_info}>
				<div className={style.user_info__img}>
					<img src="https://pipcat.ru/wp-content/uploads/2016/12/image-21.jpg" alt=""/>
				</div>
				<div className={style.user_info__text}>
					<div className={style.user_info__name}>
						Оля Баскацкая
					</div>
					<div className={style.user_info__birthday}>
						<b>День рождения:</b> 23 11 1996
					</div>
					<div className={style.user_info__city}>
						<b>Адрес:</b> Донецк
					</div>
					<div className={style.user_info__links}>
						<b>Web site:</b> https://vk.com
					</div>
				</div>
			</div>

			<MyPosts/>
		</div>
	);
}
export default Profile;