import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
	return (
			<div className={style.posts}>
				<div className={style.posts__title}>
					Мои новости
				</div>
				<div className={style.posts__add_post}>
					<div className={style.posts__input_posts}>
						<input type="text" placeholder={"Ваша новость ..."}/>
					</div>

					<div className="my-button">Добавить новость</div>
				</div>
				<div className={style.posts__all_posts}>
					<Post></Post>
					<Post></Post>
				</div>
			</div>
	);
}
export default MyPosts;