<script lang="ts">
  import logo from "#lib/assets/logo.svg";
</script>

<div class="splash">
  <form>
    <img alt="Squirrel logo" src={logo} />
    <label>
      Sign in
      <input />
    </label>
    <button>Log in to Squirrel</button>
  </form>
</div>

<style>
  .splash {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40rem;
  }

  input {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
  }
</style>
