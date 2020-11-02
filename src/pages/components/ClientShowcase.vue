<template>
  <div class="main">
      <div class="section">
        <div class="container">
          <img src="img/line.png" />
          <h2 class="h1" style="margin-top:32px">At Olivya we understand how to engage the market and create effective solutions for you.</h2>
          <!-- <p>
            The rapid change in systems and the forever changing demands of organizations have long-term implications. With work from home and learning from home being the “next normal” and businesses cutting costs, it is imperative that you need to transition quickly from the traditional processes delivery to a low-cost and effective approach. Olivya offers diverse solutions and platforms as services that are customized to suit your needs.
          </p> -->
          <div class="row" filter-color="orange" style="margin-top:64px">
            <div class="col-6 col-md-3 client-img-wrapper" v-for="(client, i) in clients" :key="i">
              <img :src="client.src" class="client-img" :style="client.style" />
            </div>
            <!-- <div class="col-6 col-md-3 client-img-wrapper">
              <img src="img/consystent.png" class="client-img"/>
            </div>
            <div class="col-6 col-md-3 client-img-wrapper">
              <img src="img/greatness_lab.png" class="client-img"/>
            </div>
            <div class="col-6 col-md-3 client-img-wrapper">
              <img src="img/dm_consunji.png" class="client-img"/>
            </div>
            <div class="col-6 col-md-3 client-img-wrapper">
              <img src="img/stemon_lab.png" class="client-img"/>
            </div>
            <div class="col-6 col-md-3 client-img-wrapper">
              <img src="img/stem_ed.png" class="client-img"/>
            </div>
            <div class="col-6 col-md-3 client-img-wrapper">
              <img src="img/humanly.png" class="client-img"/>
            </div>
            <div class="col-6 col-md-3 client-img-wrapper">
              <img src="img/rancho_del_ray.png" class="client-img"/>
            </div> -->
          </div>
        </div>
        
      </div>
    </div>
</template>
<script>
// import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
  },
  data: () => ({
    clients: [
      {src: 'img/zuellig.png'},
      {src: 'img/consystent.png'},
      {src: 'img/greatness_lab.png'},
      {src: 'img/dm_consunji.png'},
      {src: 'img/stemon_lab.png'},
      {src: 'img/stem_ed.png'},
      {src: 'img/humanly.png'},
      {src: 'img/rancho_del_ray.png', style: {'margin-top': '32px'}}
    ]
  })
};
</script>
<style>
.client-img{
  width: 160px;
}

.client-img-wrapper {
    text-align: center;
    min-height: 180px;
}
</style>
