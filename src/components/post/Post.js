import './Post.css'
export default function Post({post}) {
  return (
    <div className={'postWrap'}>
      <div>{post.id}. {post.title}</div>
    </div>
  );
}