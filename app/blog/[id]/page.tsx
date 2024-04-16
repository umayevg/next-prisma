import { getAllPosts, getPostById } from '@/services/posts';
import { Metadata } from 'next';
import { removePost } from '../actions';
import Link from 'next/link';

type Props = {
	params: {
		id: string;
	};
};

export async function generateStaticParams() {
	const posts: any[] = await getAllPosts();

	return posts.map(post => ({
		slug: post.id.toString(),
	}));
}

export async function generateMetadata({
	params: { id },
}: Props): Promise<Metadata> {
	const post = await getPostById(id);

	return {
		title: post?.title ?? '',
	};
}

export default async function PostPage({ params: { id } }: Props) {
	const post = await getPostById(id);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.body}</p>

			<form action={removePost.bind(null, id)}>
				<input type='submit' value='Delete post' />
			</form>

			<Link href={'/blog/' + post.id + '/edit'}>Edit post</Link>
		</>
	);
}
