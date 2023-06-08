<script lang="ts">
  import { myWork } from "../../myWork/myWork.js";
</script>

<div class="content-container">
  <h3 id="myWork">My work</h3>
  <div class="flex-container"> 
    {#each myWork as card}
      <div class="card">
      <div class="img-container" style="background-image: url('{card.img}')">
      </div>
      <div class="text-container">
        <h4>{card.title}</h4>
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
  .content-container{
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    text-align: center;
  }

  .flex-container {
    display: flex; 
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
  }

  .img-container {
    height: 250px;
    width: 300px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card {
    border: solid 0.5px var(--primary);
    width: 300px;
    height: 500px;
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