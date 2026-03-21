import { create } from "zustand";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string | null;
}

interface SampleWorkState {
    open: boolean;
    setOpen: (open: boolean) => void;
    project: Project | null;
    setProject: (project: Project | null) => void;
}

export const useSampleWork = create<SampleWorkState>((set) => ({
    open: false,
    setOpen: (open) => set({ open }),
    project: null,
    setProject: (project) => set({ project }),
}));