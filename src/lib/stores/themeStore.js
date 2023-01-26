import { writable } from 'svelte/store';

export const themeStore = writable({list:["forest", "black", "night", "wireframe"], selected:"Theme"})

export default themeStore
