import GitHub from "@/app/components/header/auth/github";
import Google from "@/app/components/header/auth/google";

const LoginSession = () => {
  return (
    <div className="space-y-5 pt-10">
      <Google />
      <GitHub />
    </div>
  );
};

export default LoginSession;
