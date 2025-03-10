import { type Component } from 'solid-js';
import type { CollectionEntry } from "astro:content";
import { Icon } from '@iconify-icon/solid';

type Project = CollectionEntry<'projects'>;

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
    return (
        <div class="w-full text-left rounded-3xl border-1 border-black shadow-card group hover:shadow-hover transition px-4 py-6 flex flex-col gap-6">
            <a href={`/projects/${props.project.id}/`} class="flex flex-col gap-4">
                <div class={`text-4xl p-2 self-start border-1 border-black shadow-card1 group-hover:shadow-card transition`}>
                    <Icon icon={props.project.data.icon} />
                </div>
                <h4 class="text-xl font-semibold">{props.project.data.title}</h4>
                <p class="date -mt-4 text-sm font-light">
                    {props.project.data.year}
                </p>
            </a>
            <div innerHTML={props.project.data.description} />
        </div>
    );
};

export default ProjectCard;