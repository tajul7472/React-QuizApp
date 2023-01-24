
import Buttton from "./Buttton";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  return (
    <Form style={{ height: "500px" }} >
    <TextInput
      type="text"
      placeholder="Enter name"
      icon="person"
      required
      
      
    />

    <TextInput
      type="text"
      required
      placeholder="Enter email"
      icon="alternate_email"
      
    />

    <TextInput
      type="password"
      required
      placeholder="Enter password"
      icon="lock"
      
    />

    <TextInput
      type="password"
      required
      placeholder="Confirm password"
      icon="lock_clock"
      
    />

    <Checkbox
      required
      text="I agree to the Terms &amp; Conditions"
      
    />

    <Buttton type="submit">
    <span>Submit Now</span>
    </Buttton>
   

    <div className="info">
      Already have an account? <a to="/login">Login</a> instead.
    </div>
  </Form>
  )
}

export default SignupForm