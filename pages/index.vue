<style lang="scss">

</style>

<template>
  <div>
    <FullScreenSlider />
    <WorksGrid />
    <!-- <div :class="['network',online ? 'online' : 'offline']">
      <div class="circle"></div>
      {{ online ? 'online' : 'offline' }}
    </div> -->
  </div>
</template>

<script>
import FullScreenSlider from '~/components/sliders/FullScreenSlider.vue';
import WorksGrid from '~/components/works/WorksGrid.vue';

export default {
  components: {
    FullScreenSlider,
    WorksGrid
  },
  async fetch({ store }) {
    await store.dispatch('LOAD_ITEMS', 'works/?per_page=100');
    await store.dispatch('LOAD_SLIDES', 'slide/?per_page=100');
  },
  data() {
    return {
      online: true
    };
  },
  mounted() {
    if (!window.navigator) {
      this.online = false;
      return;
    }
    this.online = Boolean(window.navigator.onLine);
    window.addEventListener('offline', this._toggleNetworkStatus);
    window.addEventListener('online', this._toggleNetworkStatus);
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online';
    }
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus);
    window.removeEventListener('online', this._toggleNetworkStatus);
  }
};
</script>
