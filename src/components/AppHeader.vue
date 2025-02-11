<template>
  <q-header class="header-container">
    <q-toolbar>
      <q-btn flat dense round icon="music_note" />
      <q-toolbar-title>Music App</q-toolbar-title>

      <q-tabs align="right">
        <q-route-tab to="/playlists" label="Плейлисты" />
        <q-route-tab to="/tracks" label="Треки" />
        <q-route-tab to="/albums" label="Альбомы" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.header-container {
  background: #1e1e1e;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
