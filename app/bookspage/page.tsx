import AuthGuard from "@/components/auth/auth-guard";
import SearchBook from "@/components/auth/search-book";

const BooksPage = () => {
  return (
    <AuthGuard>
      <>
      <div className=" bg-teal-50 rounded-md py-8 w-9/12 mx-auto mt-10">
        <SearchBook searchParams={""} />
      </div>
      </>
    </AuthGuard>
  );
};

export default BooksPage;
