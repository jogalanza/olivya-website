<template>
  <div class="main">
      <div class="section">
        <div class="container">
          <img src="img/line.png" />
          <h2 class="h1" style="margin-top:32px">Contact Us</h2>
          <!-- <p>
            The rapid change in systems and the forever changing demands of organizations have long-term implications. With work from home and learning from home being the “next normal” and businesses cutting costs, it is imperative that you need to transition quickly from the traditional processes delivery to a low-cost and effective approach. Olivya offers diverse solutions and platforms as services that are customized to suit your needs.
          </p> -->
          <div class="row" filter-color="orange" style="margin-top:64px">
            <div class="col-12 col-md-6">
              Email: <a href="mailto:contact@olivyainc.com">contact@olivyainc.com</a>
            </div>       
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
