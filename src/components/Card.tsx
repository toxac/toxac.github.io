import { type Component } from 'solid-js';
import type { CollectionEntry } from "astro:content";
import { Icon } from '@iconify-icon/solid';


type Post = CollectionEntry<'blog'>;

interface CardProps {
  post: Post;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};


const Card: Component<CardProps> = (props) => {
  return (
    <div class="w-full text-left rounded-3xl border-1 border-black shadow-card group hover:shadow-hover transition px-4 py-6 flex flex-col gap-6">
      <a href={`/posts/${props.post.id}/`} class="flex flex-col gap-4">
        <div class={`text-4xl p-2 self-start border-1 border-black shadow-card1 group-hover:shadow-card transition`}>
          <Icon icon={props.post.data.icon} />
        </div>
        <h4 class="text-xl font-semibold">{props.post.data.title}</h4>
        <p class="date -mt-4 text-sm font-light">
          {formatDate(props.post.data.pubDate)}
        </p>
      </a>
      <div innerHTML={props.post.data.description} />
    </div>
  );
};

export default Card;
