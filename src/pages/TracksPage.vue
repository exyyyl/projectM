<script setup lang="ts">
import { tracks } from "../data/tracks";
</script>

<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <q-card
        v-for="track in tracks"
        :key="track.id"
        class="music-card col-12 col-md-4"
      >
        <div class="cd-container">
          <q-img :src="track.cover" class="rounded-cd cd-hover" />
        </div>
        <q-card-section>
          <div class="text-h6">{{ track.title }}</div>
          <div class="text-caption text-grey-5">{{ track.artist }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.cd-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rounded-cd {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease-in-out;
}

.cd-hover:hover {
  transform: scale(1.1);
}
</style>