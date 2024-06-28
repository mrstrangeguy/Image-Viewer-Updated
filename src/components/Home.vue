<template>
  <div class="house-container">
    <div class="house-container__image-container">
      <img
        src="../images/benner_image.jpg"
        alt=""
        class="house-container__image-container__image"
      />
    </div>
    <div class="container house-container__description-1">
      <h2 class="house-container__description-1__heading">Description</h2>
      <div class="house-container__description-1__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo
        dolorem temporibus itaque nisi laboriosam commodi id ipsum, et voluptate
        non quasi saepe voluptatum iusto natus nihil quibusdam corporis
        aspernatur obcaecati aut labore ea cupiditate! Voluptatibus, fugit
        necessitatibus expedita perferendis atque repellendus magnam provident
        doloribus vitae ducimus nemo. Natus fugit corrupti assumenda atque? Odit
        officiis, ducimus molestiae mollitia modi qui eos nobis, animi quo
        eligendi impedit! Numquam labore similique itaque eum dolores.
        Accusantium, quos? Voluptatibus, ratione. Saepe accusamus necessitatibus
        quos maiores fugiat quasi quas facilis atque possimus. Cum, facere.
        Natus libero dolorum quod neque totam explicabo odit magni ullam atque
        ex repellat eaque dolor doloribus asperiores corporis ipsum assumenda
        autem placeat vitae, at laudantium! Nesciunt perspiciatis provident,
        eaque in consequuntur consequatur aliquam, deserunt a amet fugit hic
        beatae? Suscipit dolorum nostrum molestiae? Impedit nulla, assumenda
        veritatis voluptatem magnam officia tempore temporibus doloremque!
        Corporis laudantium explicabo sunt nihil excepturi ipsa dolore iusto
        eaque! Consectetur laudantium ullam praesentium aut pariatur libero ipsa
        nesciunt quia laboriosam impedit voluptatum officiis repudiandae
        dolorem, exercitationem deserunt possimus molestiae quibusdam tenetur.
        Officia, debitis illum labore delectus rem tenetur iure impedit iusto
        nostrum id asperiores cum non ullam qui quidem consequuntur, eos
        adipisci? Vel quos aut voluptas corrupti nesciunt excepturi provident
        quam natus culpa deleniti veritatis libero repellat, ipsum ullam impedit
        accusantium, minima, voluptatum alias consequatur suscipit et ea animi.
        Velit quo repudiandae, reprehenderit quos ducimus illum possimus placeat
        perferendis, odit blanditiis distinctio beatae itaque nesciunt sunt
        aspernatur repellat fugiat ipsa, eos esse commodi repellendus harum non
        est iusto! Sapiente eaque, est iure expedita ratione culpa mollitia
        voluptatibus et assumenda unde praesentium laboriosam aut similique
        accusamus esse facilis nesciunt consequuntur magni consectetur tenetur
        excepturi nostrum fugiat! Eaque at itaque omnis consequatur ullam
        cupiditate ducimus sit maiores autem nam! Sunt omnis eveniet accusantium
        reiciendis non, distinctio earum architecto eum culpa sit iure minima
        itaque natus facere officia iste vel, cum quod perferendis, aliquam hic
        ipsam? Quis soluta nihil nam rerum vel ipsa velit adipisci? Libero
        tempore sapiente assumenda fugit ad asperiores nam, ducimus saepe
        distinctio. Minus adipisci voluptate atque ipsum id esse corrupti quos
        debitis necessitatibus! Obcaecati deserunt asperiores, nihil expedita
        doloribus et? Tempore corporis debitis nulla inventore voluptatem unde
        tenetur distinctio veniam, nihil aperiam nostrum suscipit totam, soluta
        nemo autem vel iusto, provident culpa at non consectetur molestias
        facilis! Quam accusantium culpa obcaecati aliquam facere error sunt
        voluptatibus, laudantium repudiandae in excepturi dolorum earum esse
        ratione, animi voluptatum!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.house-container {
  width: 100%;
  &__image-container {
    &__image {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1800/500;
    }
  }

  &__description-1 {
    background-color: white;
    padding: 15px 25px;
    margin: 20px auto;
    border-radius: 25px;
    font-family: Montreal;

    &__heading {
      font-size: 30px;
    }
    &__content {
      line-height: 30px;
    }
  }
}
</style>
