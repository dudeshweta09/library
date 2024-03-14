import AuthGuard from "@/components/auth/auth-guard";

export default function Home() {
  return (
    <main>
      <AuthGuard>
        <></>
      </AuthGuard>
    </main>
  );
}
