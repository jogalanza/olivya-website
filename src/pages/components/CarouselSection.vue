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
          <el-carousel height="500px" type="card" :interval="5000">
            <el-carousel-item style="background: url(img/bg1.jpg);background-size:cover">
              <!-- <img class="d-block" src="img/bg1.jpg" alt="First slide" /> -->
              <div class="carousel-caption d-none d-md-block">
                <h5>Rapid Implementation</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item style="background: url(img/bg3.jpg);background-size:cover">
              <!-- <img class="d-block" src="img/bg3.jpg" alt="Second slide" /> -->
              <div class="carousel-caption d-none d-md-block">
                <h5>Design Thinking</h5>
              </div>
            </el-carousel-item>
            <el-carousel-item style="background: url(img/bg4.jpg);background-size:cover">
              <!-- <img class="d-block" src="img/bg4.jpg" alt="Third slide" /> -->
              <div class="carousel-caption d-none d-md-block">
                <h5>Earn with What you Save</h5>
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
  }
};
</script>
<style>
.section.dark > * {
  color: white;
}
.section.dark{
  background: #2c2c2c;
}
</style>
