import { createSignal, For, onMount } from 'solid-js';
import type { CollectionEntry } from "astro:content";
import Card from "./Card"

type Post = CollectionEntry<'blog'>

// post categories
const categories: string[] = ['Web Development', 'Marketing', 'Data', 'Guide', 'Project', "Thoughts"];

interface CategoryFilterProps {
    posts: Post[];
}

export default function CategoryFilter(props: CategoryFilterProps) {
    const [selectedCategory, setSelectedCategory] = createSignal<string>('All');
    const [categories, setCategories] = createSignal<string[]>([]);
    onMount(() => {
        const allCategories = props.posts.map(post => post.data.categories).flat().filter(Boolean) as string[];
        const uniqueCategories = ['All', ...new Set(allCategories)];
        setCategories(uniqueCategories);
    });

    const filterPostsByCategory = () => {
        if (selectedCategory() === 'All') {
            return props.posts;
        }
        return props.posts.filter(post => selectedCategory() === 'All' || post.data.categories?.includes(selectedCategory() as "Web Development" | "Marketing" | "Data" | "Guide" | "Project" | "Thoughts"))
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div>

            <section class="">
                <div class="flex justify-end">
                    <div class="relative inline-block">
                        <select
                            onChange={(e) => handleCategoryChange(e.target.value)}
                            class="border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ppurlple appearance-none bg-white pr-8"
                        >
                            <For each={categories()}>
                                {(category) => <option value={category}>{category}</option>}
                            </For>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ppurlple">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
                    {filterPostsByCategory().map(post => (
                        <Card post={post} />
                    ))}
                </div>
            </section>

        </div>
    );
}