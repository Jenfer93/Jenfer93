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
        <a href='{card.github}' class="button">Github</a>
        <a href='{card.page}' class="button" >Visit</a>
      </div>
    </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .img-container {
    height: 150px;
    width: 250px;
  }

  img {
    width: 100%;
  }

  .card {
    border: solid 0.5px var(--primary);
    width: 250px;
    height: 400px;
    padding: var(--spacing-xs);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: var(--spacing-l);
    box-shadow: 6px -2px 20px -7px rgba(1,21,19,0.50);
    transition: ease 0.5s;
  }

  .card:hover {
    box-shadow: 6px -2px 20px -7px rgba(1,21,19,0.90);
  }
</style>