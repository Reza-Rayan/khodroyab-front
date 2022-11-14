import Head from "next/head";
import Link from "next/link";
import Header from "../components/Containers/Header";

const Eror404 = () => {
  return (
    <main className="primary-bg h-full ">
      <Head>
        <title>صفحه مورد نظر یافت نشد | ارور 404</title>
      </Head>
      <Header />
      <div className=" justify-center items-center bg-cover ">
        <div>
          <h1 className="text-white text-center text-3xl">صفحه مورد نظر یافت نشد!</h1>
        </div>
        <div className=" mt-4 text-center">
          <Link
            href={"/"}
            className="secondary-bg py-2 px-3 rounded-md shadow-lg"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Eror404;
