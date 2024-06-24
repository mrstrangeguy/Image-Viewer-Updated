<template>
  <div class="home-container">
    <img src="../images/benner_image.jpg" alt="" class="home-container__img" />
    <div class="home-container__description">
      <div class="home-container__description__heading">Description</div>
      <div class="home-container__description__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
        assumenda consequuntur! Doloremque harum ea laudantium porro optio nam.
        Possimus maxime doloribus eius architecto necessitatibus, voluptatibus
        illum, laudantium totam asperiores officiis, libero eos aperiam
        excepturi nobis optio nulla saepe cumque! Aspernatur est architecto
        libero commodi ab, pariatur sapiente mollitia ad cupiditate ratione
        blanditiis accusamus, natus laboriosam illo. Consequatur odit, tempora,
        aliquam qui nesciunt, dolor minus amet ipsa ab sit non error harum
        eaque? Quaerat porro vero dolorem quis fuga veniam ut suscipit.
        Consequatur, quaerat. Quos sint animi laudantium fugiat sunt, blanditiis
        dolorum enim aliquid sed doloremque voluptates molestiae, laboriosam
        dignissimos similique, hic reiciendis ipsam ipsa laborum magnam
        voluptatem voluptatum nulla. Quibusdam sit sed ipsam nostrum commodi,
        eaque, ex dolorum porro culpa aspernatur animi. Aspernatur alias nulla
        esse architecto explicabo cumque quis corporis neque officiis libero
        praesentium, quidem nostrum quos laboriosam sit voluptatum aliquam hic,
        repellat rem, quod illum provident maiores officia.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-container {
  width: 100%;

  &__img {
    display: block;
    width: 100%;
    aspect-ratio: 1504/400;
    // height: 400px;
    object-fit: cover;
    border-radius: 30px;
  }

  &__description {
    padding: 15px;
    background-color: white;
    margin-top: 20px;
    border-radius: 30px;

    &__heading {
      font-size: 20px;
    }

    &__content {
      margin-top: 15px;
    }
  }
}

@media screen and (max-width: 425px) {
  .home-container {
    margin-top: 12px;

    &__img {
      aspect-ratio: 1504/600;
    }
  }
}
</style>
