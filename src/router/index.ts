import { createRouter, createWebHistory } from 'vue-router';
import PlaylistsPage from "../pages/PlaylistsPage.vue";
import TracksPage from "../pages/TracksPage.vue";
import AlbumsPage from "../pages/AlbumsPage.vue";


const routes = [
  { path: '/', redirect: '/playlists' },
  { path: '/playlists', component: PlaylistsPage },
  { path: '/tracks', component: TracksPage },
  { path: '/albums', component: AlbumsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
