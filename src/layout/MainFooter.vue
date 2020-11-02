<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
    style="background: black"
  >
    <div class="container">
      <!-- <img src="img/line.png" /> -->
      <div class="row">
        <div class="col-12 col-md-6">
          <h5 class="h3" style="margin-top:32px">Follow and contact us</h5>
        </div>
        <div class="col-12 col-md-6" style="text-align:right">
          <div class="icon-container">
            
            <a class="contact-link" href="mailto:contact@olivyainc.com" target="_blank">
              <!-- <i class="fab now-ui-icons ui-1_email-85 lg-icon"></i> -->
              <i class="fab far fa-envelope lg-icon"></i>
            </a>
            <a class="contact-link" href="https://www.instagram.com" target="_blank">
              <i class="fab fa-instagram lg-icon"></i>
            </a>
            <a class="contact-link" href="https://www.facebook.com" target="_blank">
              <i class="fab fa-facebook-square lg-icon"></i>
            </a>
            <a class="contact-link" href="https://www.twitter.com" target="_blank">
              <i class="fab fa-twitter lg-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row" filter-color="orange" style="margin-top:64px">
        <div class="col-12">
          <!-- Email: <a href="mailto:contact@olivyainc.com">contact@olivyainc.com</a> -->
          &copy; {{ year }} Olivya Inc.
        </div>       
      </div>
    </div>   
    <!-- <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#">
              About Us
            </a>
          </li>
          <li>
            <a href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}
      </div>
    </div> -->
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style scoped>
.contact-link{
  margin:8px;
}
.icon-container {
    height: 50px;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
}
</style>
<style>
.lg-icon{
  font-size: 45px !important;
}
</style>
