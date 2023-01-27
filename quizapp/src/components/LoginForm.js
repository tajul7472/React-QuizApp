
import { Link } from "react-router-dom";
import Buttton from "./Buttton";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
  return (
    <Form style={{ height: "330px" }}>
    <TextInput
      type="text"
      placeholder="Enter email"
      icon="alternate_email"
      required
     
    />

    <TextInput
      type="password"
      placeholder="Enter password"
      icon="lock"
      required
      
    />

   
     <Buttton type="submit">
     <span>Submit Now</span>
     </Buttton>
    

    <div className="info">
      Don't have an account? <Link to="/signup">Signup</Link> instead.
    </div>
  </Form>
  )
}

export default LoginForm