<script>
</script>

<button on:click><slot /></button>

<style>
  button {
    color: white;
    background-color: #c59747;
    border: none;
    border-radius: 5px;
    padding: 10px 16px;
    border: none;
    outline: none;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 175px;
    letter-spacing: 2.4px;
    margin-top: 10px;
  }
  button:hover,
  button:active {
    background-color: black;
    color: white;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26);
  }
</style>
