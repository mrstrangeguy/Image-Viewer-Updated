<template>
  <div class="loading-container">
    <div class="loading-container__text">Loading Data...</div>
    <img class="loading-container__img" src="../gifs/loading.gif" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.loading-container {
  width: 100%;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1504/400;
  position: relative;

  &__text {
    margin-right: 25px;
    font-size: 22px;
  }
  &__img {
    display: block;
    height: 72px;
    width: 72px;
  }
}

@media screen and (max-width: 1200px) {
  .loading-container {
    &__text {
      margin-right: 25px;
      font-size: 18px;
    }
    &__img {
      width: 56px;
      height: 56px;
    }
  }
}

@media screen and (max-width: 900px) {
  .loading-container {
    &__text {
      display: none;
    }
    &__img {
      height: 52px;
      width: 52px;
    }
  }
}

@media screen and (max-width: 500px) {
  .loading-container {
    &__img {
      height: 40px;
      width: 40px;
    }
  }
}
</style>
