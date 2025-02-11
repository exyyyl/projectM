<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <q-card
        v-for="album in albums"
        :key="album.id"
        class="music-card col-12 col-md-4 flex column items-center"
      >
        <div class="album-container" @mouseover="startRotation" @mouseleave="stopRotation">
          <q-img :src="album.cover" class="album-cover" />
          <div class="vinyl" :class="{ spinning: isSpinning }"></div>
        </div>
        <q-card-section>
          <div class="text-h6">{{ album.title }}</div>
          <div class="text-caption text-grey-5">{{ album.artist }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { albums } from "../data/albums";

const isSpinning = ref(false);

const startRotation = () => {
  isSpinning.value = true;
};

const stopRotation = () => {
  isSpinning.value = false;
};
</script>

<style scoped>
.album-container {
  position: relative;
  width: 140px;
  height: 140px;
}

.album-cover {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.vinyl {
  position: absolute;
  right: -35px;
  top: 10px;
  width: 90px;
  height: 90px;
  background: radial-gradient(circle, #111 30%, #444 70%);
  border-radius: 50%;
  transition: transform 0.5s ease-in-out;
}

.spinning {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
