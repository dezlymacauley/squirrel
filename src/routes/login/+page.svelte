<script lang="ts">
  import logo from "#lib/assets/logo.svg";
    import { login } from "#lib/auth.remote.ts";
</script>

<div class="splash">
  <form {...login}>
    <img alt="Squirrel logo" src={logo} />
    <label>
      Sign in

      {#each login.fields.handle.issues() as issue }
        <p role="alert">{issue.message}</p> 
      {/each}


      <input class="rounded" {...login.fields.handle.as("text")} />
    </label>
    <button class="primary rounded">Log in to Squirrel</button>
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
    margin: 0.5rem 0;

    &[aria-invalid="true"]:not(:focus) {
      outline: 2px solid red;
    }
  }

  button {
    display: block;
    width: 100%;
  }

  [role="alert"] {
    color: red;
  }

</style>
