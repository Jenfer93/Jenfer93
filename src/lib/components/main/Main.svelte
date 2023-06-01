<script lang="ts">
  import { myWork } from "../../myWork/myWork.js";
</script>

<div class="content-container">
  <div class="flex-container"> 
    {#each myWork as card}
      <div class="card">
      <div class="img-container">
        <img src={card.img} alt="{card.title} image"/>
      </div>
      <div class="text-container">
        <h3>{card.title}</h3>
        <p>{card.descrition}</p>
      </div>
      <div class="link-container">
        <a href='{card.github}'>Github</a>
        <a href='{card.page}'>Visit</a>
      </div>
    </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .img-container {
    height: 100px;
    width: 100px;
  }

  img {
    width: 100%;
  }
</style>