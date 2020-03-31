<template>
  <!-- 
    This flexbox page is a learning page about Flexbox CSS layout
   -->
  <div>
    <p>
      A flexbox example page with
      <a hreaf="https://vuetifyjs.com/en/styles/flex/#enabling-flexbox" target="_blank">Vuetify flexbox classes</a>
    </p>
    
    <h2>Container 1 <code>flex-direction</code></h2>
    <div class="flex-column">
      <h3>Container <code>d-flex flex-column</code></h3>
      <div class="d-flex flex-column">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>

      <h3>Container <code>d-flex</code></h3>
      <div class="d-flex">
        <div class="item item1">item1 order=2</div>
        <div class="item item2">item2 order=1</div>
      </div>
    </div>

    <h2>Container 2 <code>wraps</code></h2>
    <div class="flex-column">
      <h3>Container class <code>no-wrap</code> (default)</h3>
      <div class="d-flex">
        <div class="item item-long" v-for="index in Array.from(Array(10).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      <h3>Container class <code>flex-wrap</code></h3>
      <div class="d-flex flex-wrap">
        <div class="item item-long" v-for="index in Array.from(Array(10).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      <h3>Container class <code>flex-wrap-reverse</code></h3>
      <div class="d-flex flex-wrap-reverse">
        <div class="item item-long" v-for="index in Array.from(Array(10).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
    </div>

    <h2>Container 3 <code>justify-content</code></h2>
    <div class="flex-column">  
      <h3>Container class <code>justify-start</code> (default)</h3>
      <div class="d-flex justify-start">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>

      <h3>Container class <code>justify-end</code></h3>
      <div class="d-flex justify-end">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container class <code>justify-center</code></h3>
      <div class="d-flex justify-center">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container class <code>justify-space-between</code></h3>
      <div class="d-flex justify-space-between">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container class <code>justify-space-around</code></h3>
      <div class="d-flex justify-space-around">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container space-evenly</h3>
      <p>Not supported in Vuetify.</p>
    </div>

    <h2>Container 4 <code>align-items</code></h2>
    <div class="flex-column">
      <div
        v-for="aiConfig in [
          {class: 'align-stretch', name: 'align-stretch', default: true},
          {class: 'align-start', name: 'align-start', default: false},
          {class: 'align-end', name: 'align-end', default: false},
          {class: 'align-center', name: 'align-center', default: false},
          {class: 'align-baseline', name: 'align-baseline', default: false}]"
        :key="aiConfig.class"
      >
        <h3>
          Container class 
          <code>{{ aiConfig.class }}</code>
          <span v-if="aiConfig.default"> (default)</span>
        </h3>
        <div
          class="d-flex"
          :class="aiConfig.class"
        >
          <div
            v-for="index in Array.from(Array(5).keys())"
            :key="index"
            class="item item-long"
            :class="`item-height-${index}`"
          >
            item{{ index }}
          </div>
        </div>
      </div>
    </div>

    <h2>Container 5 <code>align-content</code></h2>
    <div class="flex-column">
      <div
        v-for="acConfig in [
          {class: 'align-content-stretch', name: 'align-content-stretch (default)', default: true},
          {class: 'align-content-start', name: 'align-content-start', default: false},
          {class: 'align-content-end', name: 'align-content-end', default: false},
          {class: 'align-content-center', name: 'align-content-center', default: false},
          {class: 'align-content-space-between', name: 'align-content-space-between', default: false},
          {class: 'align-content-space-around', name: 'align-content-space-around', default: false}]"
        :key="acConfig.class"
      >
        <h3>
          <span>Container class</span>
          <code>{{ acConfig.class }}</code>
          <span v-if="acConfig.default"> (default)</span>
        </h3>
        <div
          class="d-flex flex-wrap cont-ac"
          :class="acConfig.class"
        >
          <div
            v-for="index in Array.from(Array(15).keys())"
            :key="index"
            class="item item-long"
          >
            item{{ index }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/pages/test/flexbox.scss';
</style>