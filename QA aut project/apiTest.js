const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

function checkResponse(response, expectedStatus) {
	if (response.status !== expectedStatus) {
		throw new Error(
			`Expected status ${expectedStatus}, but got ${response.status}`
		);
	}
	if (!response.data) {
		throw new Error('Response data is empty');
	}
}

async function runTests() {
	try {
		const getPostsResponse = await axios.get(`${baseURL}/posts`);
		checkResponse(getPostsResponse, 200);
		console.log('GET cписок постів: Passed');

		const getPostResponse = await axios.get(`${baseURL}/posts/1`);
		checkResponse(getPostResponse, 200);
		console.log('GET Отримати конкретний пост: Passed');

		const newPost = {
			title: 'foo',
			body: 'bar',
			userId: 1,
		};
		const createPostResponse = await axios.post(`${baseURL}/posts`, newPost);
		checkResponse(createPostResponse, 201);
		console.log('POST Створити новий пост: Passed');

		const getCommentsResponse = await axios.get(`${baseURL}/posts/1/comments`);
		checkResponse(getCommentsResponse, 200);
		console.log('GET список коментарів до посту: Passed');

		const newComment = {
			postId: 1,
			name: 'test',
			email: 'test@example.com',
			body: 'New test comment',
		};
		const createCommentResponse = await axios.post(
			`${baseURL}/comments`,
			newComment
		);
		checkResponse(createCommentResponse, 201);
		console.log('POST новий коментар: Passed');

		const getUsersResponse = await axios.get(`${baseURL}/users`);
		checkResponse(getUsersResponse, 200);
		console.log('GET список юзерів: Passed');

		const getUserAlbumsResponse = await axios.get(`${baseURL}/users/1/albums`);
		checkResponse(getUserAlbumsResponse, 200);
		console.log('GET список альбомів юзера: Passed');

		const newAlbum = {
			title: 'New Album',
			userId: 4,
		};
		const createAlbumResponse = await axios.post(`${baseURL}/albums`, newAlbum);
		checkResponse(createAlbumResponse, 201);
		console.log('POST створити новий альбом: Passed');

		const getAlbumPhotosResponse = await axios.get(
			`${baseURL}/albums/1/photos`
		);
		checkResponse(getAlbumPhotosResponse, 200);
		console.log('GET список фото в альбомі: Passed');

		const newPhoto = {
			albumId: 1,
			title: 'New Photo',
			url: 'https://via.placeholder.com/600/92c952',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		};
		const createPhotoResponse = await axios.post(`${baseURL}/photos`, newPhoto);
		checkResponse(createPhotoResponse, 201);
		console.log('POST нове фото: Passed');
	} catch (error) {
		console.error('Error:', error.message);
	}
}

runTests();
