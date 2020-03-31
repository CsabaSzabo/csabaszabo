<template>
  <!-- 
    This flexbox page is a learning page about Flexbox CSS layout
   -->
  <div>
    <p>
      A flexbox example page with
      <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">pure CSS code</a>
    </p>
    
    <h2>Container 1 <code>flex-direction</code></h2>
    <div class="cont-column">
      <h3>Container <code>flex-direction: column</code></h3>
      <div class="cont cont-column">
        <div class="item">item1</div>
        <div class="item">item2</div>
      </div>
      <h3>Container <code>flex-direction: row</code></h3>
      <div class="cont">
        <div class="item item1">item1 order=2</div>
        <div class="item item2">item2 order=1</div>
      </div>
    </div>

    <h2>Container 2 <code>wraps</code></h2>
    <div class="cont-column">
      <h3>Container CSS <code>flex-wrap: no-wrap</code> (default)</h3>
      <div class="cont">
        <div class="item item-long" v-for="index in Array.from(Array(10).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      <h3>Container CSS <code>flex-wrap: wrap</code></h3>
      <div class="cont cont-wrap">
        <div class="item item-long" v-for="index in Array.from(Array(10).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      <h3>Container CSS <code>flex-wrap: wrap-reverse</code></h3>
      <div class="cont cont-wrap-reverse">
        <div class="item item-long" v-for="index in Array.from(Array(10).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
    </div>

    <h2>Container 3 <code>justify-content</code></h2>
    <div class="cont-column">  
      <h3>Container CSS <code>justify-content: flex-start</code> (default)</h3>
      <div class="cont cont-flex-start">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>

      <h3>Container CSS <code>justify-content: flex-end</code></h3>
      <div class="cont cont-flex-end">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container CSS <code>justify-content: center</code></h3>
      <div class="cont cont-center">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container CSS <code>justify-content: space-between</code></h3>
      <div class="cont cont-space-between">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container CSS <code>justify-content: space-around</code></h3>
      <div class="cont cont-space-around">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
      
      <h3>Container CSS <code>justify-content: space-evenly</code></h3>
      <div class="cont cont-space-evenly">
        <div class="item item-long" v-for="index in Array.from(Array(3).keys())" :key="index">
          item{{ index }}
        </div>
      </div>
    </div>

    <h2>Container 4 <code>align-items</code></h2>
    <div class="cont-column">
      <div
        v-for="aiConfig in [
          {class: '', name: 'stretch', default: true},
          {class: 'cont-ai-start', name: 'start', default: false},
          {class: 'cont-ai-end', name: 'end', default: false},
          {class: 'cont-ai-center', name: 'center', default: false},
          {class: 'cont-ai-baseline', name: 'baseline', default: false}]"
        :key="aiConfig.class"
      >
        <h3>
          <span>Container CSS </span>
          <code>align-items: {{ aiConfig.name }}</code>
          <span v-if="aiConfig.default"> (default)</span>
        </h3>
        <div
          class="cont"
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
    <div class="cont-column">
      <div
        v-for="acConfig in [
          {class: 'cont-ac-stretch', name: 'stretch', default: true},
          {class: 'cont-ac-start', name: 'start', default: false},
          {class: 'cont-ac-end', name: 'end', default: false},
          {class: 'cont-ac-center', name: 'center', default: false},
          {class: 'cont-ac-space-between', name: 'space-between', default: false},
          {class: 'cont-ac-space-around', name: 'space-around', default: false},
          {class: 'cont-ac-space-evenly', name: 'space-evenly', default: false}]"
        :key="acConfig.class"
      >
        <h3>
          <span>Container CSS</span>
          <code>align-content: {{ acConfig.name }}</code>
          <span v-if="acConfig.default">(default)</span>
        </h3>
        <div
          class="cont cont-wrap cont-ac"
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

.cont {
  display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox;      /* TWEENER - IE 10 */
  display: -webkit-flex;     /* NEW - Chrome */
  display: flex;
}
.cont-column {
  -webkit-flex-direction: column;   /* Chrome, Edge, Safari */
  -ms-flex-direction: column;       /* IE 10 */
  flex-direction: column;
}

.cont-wrap {
  $wrap: wrap;
  -webkit-flex-wrap: $wrap;
  flex-wrap: $wrap;
}
.cont-wrap-reverse {
  $wrap: wrap-reverse;
  -webkit-flex-wrap: $wrap;
  flex-wrap: $wrap;
}

.cont-flex-start {
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
.cont-flex-end {
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
.cont-center {
  -webkit-justify-content: center;
  justify-content: center;
}
.cont-space-between {
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.cont-space-around {
  -webkit-justify-content: space-around;
  justify-content: space-around;
}
.cont-space-evenly {
  -webkit-justify-content: space-evenly;
  justify-content: space-evenly;
}

.cont-ai-start {
  -webkit-align-items: start;
  align-items: start;
}
.cont-ai-end {
  -webkit-align-items: end;
  align-items: end;
}
.cont-ai-center {
  -webkit-align-items: center;
  align-items: center;
}
.cont-ai-baseline {
  -webkit-align-items: baseline;
  align-items: baseline;
}

.cont-ac-stretch {
  -webkit-align-content: stretch;
  align-content: stretch;
}
.cont-ac-start {
  -webkit-align-content: start;
  align-content: start;
}
.cont-ac-end {
  -webkit-align-content: end;
  align-content: end;
}
.cont-ac-center {
  -webkit-align-content: center;
  align-content: center;
}
.cont-ac-space-between {
  -webkit-align-content: space-between;
  align-content: space-between;
}
.cont-ac-space-around {
  -webkit-align-content: space-around;
  align-content: space-around;
}
.cont-ac-space-evenly {
  -webkit-align-content: space-evenly;
  align-content: space-evenly;
}
</style>