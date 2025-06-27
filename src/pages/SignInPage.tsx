import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import usePersistedState from "@/hooks/usePersistedState";
import { useState, type FormEvent, type SetStateAction } from "react";
import { useNavigate } from "react-router";

const SignInPage = () => {
  const [, setEmail] = usePersistedState("userEmail", "");
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmail(input);
    navigate("/upload");
  };

  return (
    <div className="flex flex-col justify-center w-auto items-center min-h-screen">
      <h2 className="text-2xl">Sign In</h2>
      <form
        className="flex flex-col justify-center w-full max-w-sm gap-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          placeholder="Type your email..."
          required
          type="email"
          onChange={handleChange}
        />
        <Button type="submit" className="max-w-fit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
