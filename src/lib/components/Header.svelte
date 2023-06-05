<header>
  <nav>
    <ul>
      <li>
        <a class="button" href="https://www.linkedin.com/in/jenny-marie-feragen/">Linkedin</a>
      </li>
      <li>
        <a class="button" href="https://github.com/Jenfer93">GitHub</a>
      </li>
      <li >
        <a class="myWorkButton" href="#myWork">My work</a>
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">

header, nav, ul {
  margin: 0; 
  position: sticky;
  top: 0;
}

header {
  background-color: var(--dark-secondary);
  height: var(--spacing-xxl);
  display: flex;
  margin-bottom: var(--spacing-l);
}

nav {
  display: flex; 
  justify-content: flex-end;
  margin: auto;
  max-width: 1200px;
}

ul {
  display: flex; 
  margin-right: var(--spacing-m)
}

li {
  list-style: none;
}
</style>