import React from "react";

const Profile = () => {
	return (
		<div className="content">
			<div className="content-top-bg-image">
				<img src="https://oir.mobi/uploads/posts/2022-08/1661391591_7-oir-mobi-p-fon-dlya-profilya-feisit-pinterest-7.jpg" alt=""/>
			</div>
			<div className="content__user-info">
				<div className="user-info__img">
					<img src="https://pipcat.ru/wp-content/uploads/2016/12/image-21.jpg" alt=""/>
				</div>
				<div className="user-info__text">
					<div className="user-info__name">
						Оля Баскацкая
					</div>
					<div className="user-info__birthday">
						День рождения: 23 11 1996
					</div>
					<div className="user-info__city">
						Адрес: Донецк
					</div>
					<div className="user-info__links">
						Web site: https://vk.com
					</div>
				</div>
			</div>

			<div className="posts">
				<div className="posts__title">
					Мои новости
				</div>
				<div className="posts__add-post">
					Добавить новость
				</div>
				<div className="posts__all-posts">
					<div className="posts__post-item">
						Пост
					</div>
					<div className="posts__post-item">
						Пост 2
					</div>
				</div>
			</div>
		</div>
	);
}
export default Profile;