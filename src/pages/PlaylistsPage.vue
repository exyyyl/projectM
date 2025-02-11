<script setup lang="ts">
import { playlists } from "../data/playlists";
</script>

<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <q-card
        v-for="playlist in playlists"
        :key="playlist.id"
        class="music-card col-12 col-md-4"
      >
        <q-img :src="playlist.cover" class="rounded-borders" />
        <q-card-section>
          <div class="text-h6">{{ playlist.title }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.rounded-borders {
  border-radius: 10px;
}
</style>
