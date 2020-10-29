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
            poster="desk-laptop.jpg"
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
          <h1 class="h1" style="margin-top:30px">Navigate the Future</h1>
          <!-- <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3> -->
        </div>
      </div>
    </div>
    <div class="main">
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
    <!-- <basic-elements></basic-elements>
    <navigation></navigation>
    <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
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
    <examples-section></examples-section> -->
    <download-section></download-section>
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
//     CarouselSection,
//     NucleoIconsSection,
// SignupForm,
// ExamplesSection,

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {           
    DownloadSection
  }
};
</script>
<style>
.cover-tint {
    height: 200px;
    margin-top: -109px;
    position: relative;
    background: linear-gradient(0deg, rgb(25 24 24), rgba(0,0,0,0.1));
    box-shadow: 0px -30px 30px rgba(0,0,0,0.1);
}
</style>
