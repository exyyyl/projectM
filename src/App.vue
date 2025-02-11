<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-tabs align="center">
        <q-route-tab to="/playlists" label="Плейлисты" />
        <q-route-tab to="/tracks" label="Треки" />
        <q-route-tab to="/albums" label="Альбомы" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
