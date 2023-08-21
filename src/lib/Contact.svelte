<script>
  import * as yup from "yup";
  import { Form, Message, isInvalid } from "svelte-yup";
  import Button from "./Button.svelte";

  let schema = yup.object().shape({
    name: yup.string().required().max(30).label("Name"),
    email: yup.string().required().email().label("Email address"),
  });
  let fields = {
    name: "",
    email: "",
    yourmessage: "",
  };
  let submitted = false;
  let isValid;

  $: invalid = (name) => {
    if (submitted) {
      return isInvalid(schema, name, fields);
    }
    return false;
  };

  function formSubmit() {
    submitted = true;
    isValid = schema.isValidSync(fields);

    if (isValid) {
      alert("Form is valid!");
      console.log("Validated fields", fields);
    }
  }
</script>

<section>
  <h1>Contact Us</h1>

  <div id="banner">
    <img src="images/banner.jpg" alt="" />
  </div>

  <div id="content">
    <h3>Feel free to contact us! Either by telephone or by email!</h3>
    <h4>Telephone: (666) 666 - 6666</h4>
    <h4>Email: caca@poop.com</h4>
  </div>
</section>

<style>
  #content {
    display: flex;
    column-gap: 80px;
  }
</style>
