<template>
  <div>
    <div class="page-header clear-filter" filter-color="purple">
      <!-- style="background-image:url('img/desk-laptop.jpg')" -->
      <parallax
        class="page-header-image"     
        style="background: linear-gradient(0deg, #131111, #222);"   
      >
      <!-- overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"  -->
        <video-background 
            src="img/roadster-loop-imperial.mp4"
            poster="img/desk-laptop.jpg"
            style="max-height: 400px; height: 100vh;"
            
            overlay="linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(251, 148, 158, 0.22), rgba(251, 148, 158, 0.42))"
        >
            <!-- <div style="text-align:center">
              <h1 style="color: white;">Navigate the future</h1>
            </div> -->
          
        </video-background>
        <div class="cover-tint"></div>
      </parallax>
      <!-- <img src="img/desk-laptop.jpg" /> -->
      
      <div class="container">
        <div class="content-center brand">
          <!-- <img class="n-logo" src="img/now-logo.png" alt="" /> -->
          <h1 class="h1" style="margin-top:0px">Navigate the future</h1>
        </div>
      </div>
    </div>
    <!-- <div class="main">
      <div class="section section-images">
      
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container">
                <img src="img/hero-image-1.png" alt="" />
              </div>
              <div class="hero-images-container-1">
                <img src="img/hero-image-2.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="img/hero-image-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <RedefiningNormal />

    <!-- <div class="main">
      <div class="section">
        <div class="container">
          <img src="img/line.png" />
          <h2 class="h1" style="margin-top:32px">Redefining Normal</h2>
          <p>
            The rapid change in systems and the forever changing demands of organizations have long-term implications. With work from home and learning from home being the “next normal” and businesses cutting costs, it is imperative that you need to transition quickly from the traditional processes delivery to a low-cost and effective approach. Olivya offers diverse solutions and platforms as services that are customized to suit your needs.
          </p>
        </div>
        <div class="row clear-filter" filter-color="orange">
            <div class="col-12 col-lg-4 item-wrapper cardimg1">
              <p class="p1">Immersive</p>
              <p class="p2">
                We combine the engaging elements of technology and human principles to create meaningful user experience
              </p>
            </div>
             <div class="col-12 col-lg-4 item-wrapper cardimg2">
              <p class="p1">Dynamic</p>
              <p class="p2">
                We seek to understand users, dispute assumptions, reimagine problems, and formulate out of the box solutions for testing and incubation 
              </p>
            </div>
             <div class="col-12 col-lg-4 item-wrapper cardimg3">
              <p class="p1">Experience</p>
              <p class="p2">
                We design your solutions to get users engaged - anytime, anywhere, on any device
              </p>
            </div>
          </div>
      </div>
    </div> -->

    <carousel-section></carousel-section>

    <ClientShowcase />

    <!-- <basic-elements></basic-elements>
    <navigation></navigation>
    <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    
    <nucleo-icons-section></nucleo-icons-section> -->

    <!-- <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <signup-form></signup-form>
    <examples-section></examples-section> 
    <download-section></download-section>-->
  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ProgressPagination from './components/ProgressPagination';
import Notifications from './components/Notifications';
import Typography from './components/Typography';
import JavascriptComponents from './components/JavascriptComponents';
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

//Parallax,
//  BasicElements,
//     Navigation,
//     TabsSection,
//     ProgressPagination,
//     Notifications,
//     Typography,
//     JavascriptComponents,
//     DownloadSection
//     NucleoIconsSection,
// SignupForm,
// ExamplesSection,

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {   
    CarouselSection,
    RedefiningNormal: () => import('./components/RedefiningNormal.vue'),
    ClientShowcase: () => import('./components/ClientShowcase.vue')
  }
};
</script>
<style>
.cover-tint {
    height: 110px;
    margin-top: -109px;
    position: relative;
    background: linear-gradient(0deg, rgb(25 24 24), rgba(0,0,0,0.1));
    box-shadow: 0px -30px 30px rgba(0,0,0,0.1);
}
.item-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 360px;
    margin: 0 auto;
    height: auto;
    padding: 60px 50px;
    min-height: 340px;

    -webkit-box-pack: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: white;
}
.cardimg1 {
    /* background: linear-gradient(rgba(55, 33, 123, 0.4), rgba(255, 152, 32, 0.4)) center center / cover no-repeat, url("/img/building-up.jpg"); */
    /* background-image: url(/img/team-discussion.jpg); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: white;
}
.cardimg2 {
    /* background: linear-gradient(rgba(66, 5, 53, 0.4), rgba(255, 152, 32, 0.4)) center center / cover no-repeat, url("/img/team-discussion.jpg"); */
    /* background-image: url(/img/team-discussion.jpg); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: white;
}
.cardimg3 {
    /* background: linear-gradient(rgba(17, 15, 111, 0.4), rgba(255, 152, 32, 0.4)) center center / cover no-repeat, url("/img/chart-tablet.jpg"); */
    /* background-image: url(/img/team-discussion.jpg); */
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color: white;
}
.p1 {
    color: rgb(255, 255, 255);
    margin: 15px 0px;
    font-size: 32px;
}
.p2 {
    color: rgb(255, 255, 255);
    margin: 0px 0px 15px;
    font-size: 16px;
}
</style>
