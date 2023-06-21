import { useState } from "react";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import Spinner from "../components/shared/Spinner";
import { FcAddImage } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

type formValues = {
  name: string;
  mail: string;
  psw: string;
  img: File | undefined;
};

const initialFormValues: formValues = { name: "", mail: "", psw: "", img: undefined };

function Register() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const uploadFile = async (file: File) => {
    try {
      const storageRef = ref(storage, formValues.name);
      const uploadResult = await uploadBytes(storageRef, file);
      return uploadResult;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Create user
      const { user } = await createUserWithEmailAndPassword(auth, formValues.mail, formValues.psw);
      //Update username AND profile img
      await updateProfile(user, {
        displayName: formValues.name,
        photoURL: formValues.img
          ? await getDownloadURL((await uploadFile(formValues.img)).ref)
          : null,
      });

      /* if (formValues.img) {
        const uploadResult = await uploadFile(formValues.img);
        const photoURL = await getDownloadURL(uploadResult.ref);
        await updateProfile(user, {
          photoURL: photoURL,
        });
      } */

      //Save user to db
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      });

      await setDoc(doc(db, "userChats", user.uid), {});
      navigate("/");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setFormValues(initialFormValues);
    }
  };

  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-xl flex-col items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="flex w-full flex-col gap-10 rounded-lg bg-white p-8 shadow-lg shadow-neutral-600"
      >
        <h3 className="text-center text-4xl font-medium text-purple-400">Register</h3>
        {error && <p className="text-center text-rose-500">{error}</p>}

        <Input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={inputChangeHandler}
          placeholder="Name"
          required
        />

        <Input
          type="email"
          id="email"
          name="mail"
          placeholder="Email"
          value={formValues.mail}
          onChange={inputChangeHandler}
          required
        />

        <Input
          type="password"
          id="psw"
          name="psw"
          placeholder="Password"
          value={formValues.psw}
          onChange={inputChangeHandler}
          required
        />

        <Input
          className="hidden"
          type="file"
          id="image"
          onChange={(e) => setFormValues({ ...formValues, img: e.target.files?.[0] })}
          label={
            <>
              <FcAddImage className="text-4xl" />
              <span>{formValues.img ? formValues.img.name : "Add profile picture"}</span>
            </>
          }
        />

        <p className="text-s text-right text-purple-500">Already have an account? Sign in</p>

        <Button>
          {isLoading ? <Spinner className="mx-auto inline text-inherit" /> : "Sign up"}
        </Button>
      </form>
    </div>
  );
}

export default Register;
