<style lang="scss">

  #works__grid {
    background: #222;
    height: 100%;
    width: 100%;
    padding-top: 4em;
    .work--grid {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      .work--item {
        color: white;
        font-size: 1.2em;
        letter-spacing: 1px;
        padding: 1em;
        border: 1px solid white;
      }
    }
  }

///wp-json/acf/v2/options/slides

</style>

<template>
  <div id="works__grid">
    <ul class="work--grid">
      <li class="work--item" v-for="(item, index) in items" :key="item.id">
        <!-- {{item.title.rendered}} -->
        {{index}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState(['items'])
};
</script>
