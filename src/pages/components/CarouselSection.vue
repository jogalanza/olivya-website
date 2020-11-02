<template>
  <div class="section dark" id="carousel">
    <div class="container">
      <img src="img/line.png" />
      <h1 style="margin-top:32px">We are an extension of your team</h1>
      <p>
        Things can, and occasionally do, go wrong. Operational continuity is our number one priority.
      </p>
      <!-- <div class="title">
        
      </div> -->
     
    </div>
     <div class="row justify-content-center">
        <div class="col-12">
          <el-carousel height="500px" :type="cardMode" :interval="5000" @change="onChange($event)">
            <el-carousel-item style="background: url(img/bg1.jpg);background-size:cover">
              <!-- <img class="d-block" src="img/bg1.jpg" alt="First slide" /> -->
              <div class="carousel-caption d-md-block" v-if="currentIndex === 0">
                <h5>Rapid Implementation</h5>
                <p>
                  The rapid change in systems and the forever changing demands of the learning population have long-term implications. With work from home and learning from home being the “next
normal” and businesses cutting costs, it is imperative that you need to transition quickly from the traditional process. Olivya offers diverse solutions and platforms as services that are customized to suit your needs.
                </p>
              </div>
            </el-carousel-item>
            <el-carousel-item style="background: url(img/bg3.jpg);background-size:cover">
              <!-- <img class="d-block" src="img/bg3.jpg" alt="Second slide" /> -->
              <div class="carousel-caption d-md-block" v-if="currentIndex === 1">
                <h5>Design Thinking</h5>
                <p>
                  While creating our product, we put simplicity and functionality at the core to meet the needs of our users. Our platform and content solutions are easy to use due to simple design and high usability.
                </p>
              </div>
            </el-carousel-item>
            <el-carousel-item style="background: url(img/bg4.jpg);background-size:cover">
              <!-- <img class="d-block" src="img/bg4.jpg" alt="Third slide" /> -->
              <div class="carousel-caption d-md-block" v-if="currentIndex === 2">
                <h5>Earn with What you Save</h5>
                <p>
                  Along with the high quality and comfort, we offer affordability which makes our services the most cost-effective option. Take your chance today to dive into a new reality with a low cost.
                </p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data: () => ({
    windowWidth: null,
    cardMode: 'card',
    currentIndex : 0
  }),
  watch: {
    windowWidth(newVal) {
     this.cardMode = newVal > 800 ? 'card' : ''
    }
  },
  methods: {
    onChange(e){
      this.currentIndex = e
    },
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },
  mounted(){
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.onResize);
    // this.$nextTick(() => {
      
    // })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
};
</script>
<style>
.section.dark > * {
  color: white;
}
.section.dark{
  background: #2c2c2c;
}
.carousel-caption {
    right: 5% !important;
    left: 5% !important;
    background: rgba(0,0,0,0.4);
    box-shadow: 0px 0px 32px rgba(0,0,0,0.4);
}
</style>
